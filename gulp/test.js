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

    gulp.task('createdirs', gulp.series(function (done) {
        let errorCode = shell.mkdir('-p', 'errorshots')
        done()
        return errorCode
    }))

    gulp.task('deletedirs', gulp.series(function (done) {
        let errorCode = shell.rm('-rf', 'errorshots/*', 'reports/allure-results/*', 'reports/custom-report/*')
        done()
        return errorCode
    }))
}
