import gulp from 'gulp'
import selenium from 'selenium-standalone'
import webdriver from '../lib/index'
import shell from 'shelljs'

export default options => {
    let configFile = process.env.WDIO_CONF || 'wdio.conf'
    let errorLog = options.errorHandler('Selenium start')
    const seleniumStart = (done) => {
        selenium.install({
            // check for more recent versions of selenium here:
            // https://selenium-release.storage.googleapis.com/index.html
            version: '3.9.0',
            baseURL: 'https://selenium-release.storage.googleapis.com',
            drivers: {
                chrome: {
                    // check for more recent versions of chrome driver here:
                    // https://chromedriver.storage.googleapis.com/index.html
                    version: '80.0.3987.16',
                    arch: process.arch,
                    baseURL: 'https://chromedriver.storage.googleapis.com'
                }
            },
            logger (message) {
                process.stdout.write(`${message} \n`)
            },
            progressCb: (totalLength, progressLength) => {
                process.stdout.write(`Downloading drivers ${Math.round(progressLength / totalLength * 100)}% \r`)
            }
        }, err => {
            if (err) return done(err)
            selenium.start({
                version: '3.9.0',
                drivers: {
                    chrome: {
                        // check for more recent versions of chrome driver here:
                        // https://chromedriver.storage.googleapis.com/index.html
                        version: '80.0.3987.16',
                        arch: process.arch,
                        baseURL: 'https://chromedriver.storage.googleapis.com'
                    }
                },
                spawnOptions: {
                    // stdio: 'ignore'
                }
            }, (err, child) => {
                selenium.child = child
                errorLog(err)
                child.stderr.on('data', function (data) {
                    console.log(data.toString())
                })
                done()
            })
        })
    }

    gulp.task('seleniumStart', gulp.series(seleniumStart))
    gulp.task('elastic', gulp.series(async function test () {
        return runTest(['elastic'])
    }))
    gulp.task('test', gulp.series(async function test () {
        return runTest('test')
    }))

    gulp.task('teacher', gulp.series(async function test () {
        return runTest(['teacheracct'])
    }))

    gulp.task('school', gulp.series(async function test () {
        return runTest(['schooladminacct'])
    }))

    gulp.task('district', gulp.series(async function test () {
        return runTest(['districtadminacct'])
    }))

    gulp.task('reports', gulp.series(async function test () {
        return runTest(['reports'])
    }))

    gulp.task('login', gulp.series(async function test () {
        return runTest(['login'])
    }))

    gulp.task('classtotals', gulp.series(async function test () {
        return runTest(['classtotals'])
    }))

    gulp.task('flashcards', gulp.series(async function test () {
        return runTest(['flashcards'])
    }))

    gulp.task('parentletter', gulp.series(async function test () {
        return runTest(['parentletter'])
    }))

    gulp.task('studentdetail', gulp.series(async function test () {
        return runTest(['studentdetail'])
    }))

    gulp.task('studentprogress', gulp.series(async function test () {
        return runTest(['studentprogress'])
    }))

    gulp.task('loginload', gulp.series(async function test () {
        return runTest(['loginload'])
    }))

    gulp.task('criticalpath', gulp.series(async function test () {
        return runTest(['criticalpath'])
    }))

    gulp.task('prodsmoke', gulp.series(async function test () {
        return runTest(['prodsmoke'], 'wdio.prod.conf')
    }))

    gulp.task('signup', gulp.series(async function test () {
        return runTest(['signup'])
    }))

    gulp.task('warmup', gulp.series(async function test () {
        return runTest(['warmup'])
    }))

    function runTest (suiteName, conf) {
        conf = conf || configFile
        return new Promise(async function (resolve, reject) {
            gulp.src(`${options.tests}/UI/${conf}.*`)
                .pipe(await webdriver({
                    framework: 'mocha',
                    suite: suiteName
                })).once('end', () => {
                    resolve(0)
                }).on('error', () => {
                    reject(new Error('SuiteName:::Error: ', suiteName))
                })
        })
    }

    function deletedirs (cb) {
        shell.rm('-rf', 'screenshots/diff', 'screenshots/actual', 'errorshots', 'reports', 'allure-report')
        cb()
    }

    function createdirs (cb) {
        shell.mkdir('-p', 'screenshots', 'errorshots', 'reports/custom-report')
        cb()
    }

    gulp.task('clean', gulp.series(deletedirs, createdirs))

    gulp.task('slacksummaryreport', gulp.series(async function () {
        const buildServer = process.env.BUILDSERVER && process.env.BUILDSERVER.toUpperCase()
        if (buildServer === 'TEAMCITY') {
            shell.exec('npm run allure-report')
        }
        const axios = require('axios')
        const summary = require('../allure-report/widgets/summary.json').statistic
        const executors = require('../allure-report/widgets/executors.json')
        let executor, reportName, reportURL
        if (executors.length > 0) {
            executor = executors[0]
            reportName = executor.buildName.split(' ')[0]
            reportURL = executor.reportUrl
        } else {
            if (buildServer === 'TEAMCITY') {
                reportName = 'CRITICALPATH'
                reportURL = 'NOT AVAILABLE'
            } else {
                reportName = 'Runned Locally'
                reportURL = 'Local Link'
            }
        }

        let attachments = [
            {
                pretext: `*Test Report *`,
                title: ''
            }
        ]

        const totalFmt = `TEST SUITE: ${reportName}\nTOTAL: ${summary.total}\nPASSED: ${summary.passed}\nFAILED: ${summary.failed}\nBROKEN: ${summary.broken}\nSKIPPED: ${summary.skipped}
        \nSee test run at ${reportURL}`

        attachments[0].title += totalFmt
        if (summary.failed > 0 || summary.broken > 0) {
            const failedColor = '#dc3545'
            let attach = {
                color: failedColor,
                author_name: reportName,
                text: `Some tests failed. See more at ${reportURL}`,
                ts: Date.now()
            }
            attachments.push(attach)
        }

        console.log(attachments)
        const slackEnv = process.env.SENDSLACK && parseInt(process.env.SENDSLACK)
        if (slackEnv) {
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                data: {'attachments': attachments},
                url: `https://hooks.slack.com/services/${process.env.SLACKTOKEN}`
            }
            let errorCode = await axios(options)
            return errorCode
        }
    }))
}
