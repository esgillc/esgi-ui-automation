
require('dotenv').config()
let dir = __dirname
const { join } = require('path')
const {EyesService} = require('../../Services/EyeService/index')
const { TimelineService } = require('wdio-timeline-reporter/timeline-service')

// Load the libraries we need for path/filesystem manipulation
const path = require('path')
// const fs = require('fs')

// Store the directory path in a global, which allows us to access this path inside our tests
global.downloadDir = path.join(__dirname, '/pdfs/data/actual')
// eslint-disable-next-line no-undef
console.log('Downloads Directory is : ', downloadDir)

exports.config = {
    runner: 'local',
    credentials: {
        username: 'sbuckhoff',
        password: 'automation01!'
    },

    // ==================
    // Specify Test Files
    // ==================
    // Define which UI specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    specs: [
        `${dir}/specs/**/!(*Report*).spec.js`
    ],
    // define specific suites
    suites: {
        elastic: [
            `./tests/ELK/verifyelasticsearchdata.spec.js`
        ],
        login: [
            `${dir}/specs/Login.spec.js`
        ],
        bingo: [
            `${dir}/specs/reportsspecs/Bingo*.spec.js`
        ],
        classtotals: [
            `${dir}/specs/reportsspecs/ClassTotals*.spec.js`
        ],
        studentdetail: [
            `${dir}/specs/reportsspecs/StudentDetail*.spec.js`
        ],
        gradescale: [
            `${dir}/specs/reportsspecs/GradeScaleReports/GradeScale*.spec.js`
        ],
        studentprogress: [
            `${dir}/specs/reportsspecs/StudentProgress*.spec.js`
        ],
        flashcards: [
            `${dir}/specs/reportsspecs/Flashcards*.spec.js`
        ],
        parentletter: [
            `${dir}/specs/reportsspecs/ParentLetter*.spec.js`
        ],
        itemanalysis: [
            `${dir}/specs/reportsspecs/ItemAnalysis*.spec.js`
        ],
        piecharts: [
            `${dir}/specs/reportsspecs/PieCharts*.spec.js`
        ],
        loginload: [
            `${dir}/loginload/*.spec.js`
        ],
        districtadminacct: [
            `${dir}/specs/districtadminaccount/*.spec.js`
        ],
        schooladminacct: [
            `${dir}/specs/schooladminaccount/*.spec.js`
        ],
        teacheracct: [
            `${dir}/specs/teacheraccount/*.spec.js`
        ],
        reports: [
            // `${dir}/specs/reportsspecs/ParentLetter*.spec.js`,
            `${dir}/specs/reportsspecs/Flashcards*.spec.js`,
            `${dir}/specs/reportsspecs/ClassTotals*.spec.js`,
            `${dir}/specs/reportsspecs/PieCharts*.spec.js`,
            `${dir}/specs/LoadPieCharts.spec.js`,
            `${dir}/specs/reportsspecs/ItemAnalysis*.spec.js`,
            `${dir}/specs/**/*Report*.spec.js`
        ],
        prodsmoke: [
            `${dir}/specs/Login.spec.js`,
            `${dir}/specs/WebFront.spec.js`,
            `${dir}/specs/Navigations.spec.js`,
            `${dir}/prod/Home.spec.js`
        ],
        signup: [
            `${dir}/specs/Signup_Rules.spec.js`,
            `${dir}/specs/WebFront.spec.js`
        ],
        criticalpath: [
            `${dir}/specs/LoadPieCharts.spec.js`,
            `${dir}/specs/teacheraccount/RunTest.spec.js`,
            `${dir}/specs/teacheraccount/Report*.spec.js`,
            `${dir}/specs/AddTest.spec.js`,
            `${dir}/specs/Navigations.spec.js`,
            `${dir}/specs/TestExplorer.spec.js`,
            `${dir}/specs/StudentManager.spec.js`
        ],
        warmup: [
            `${dir}/warmup/*.spec.js`
        ],
        pdf: [
            `${dir}/pdfs/RunPDFReports.spec.js`
        ]
    },
    /**
     * The number of times to retry the entire specfile when it fails as a whole
     */
    specFileRetries: 1,
    /**
     * Delay in seconds between the spec file retry attempts
     */
    specFileRetriesDelay: 0,
    /**
     * Retried specfiles are inserted at the beginning of the queue and retried immediately
     */
    specFileRetriesDeferred: false,

    // Patterns to exclude.
    exclude: [
        `${dir}/specs/**/CreateSubjectTabTest.spec.js`
    ],
    capabilities: [
        {
            browserName: 'chrome',
            'selenoid:options': {
                version: 'chrome_83.0',
                screenResolution: '1920x1080x24'
            },
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--test-type',
                    '--headless', // Windows server doesn't like headless mode
                    '--disable-infobars',
                    '--disable-gpu',
                    '--window-size=1920,1080'
                ],
                prefs: {
                    'directory_upgrade': true,
                    'prompt_for_download': false,
                    // eslint-disable-next-line no-undef
                    'download.default_directory': '/var/lib/actual/'
                }
            }
        }
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several UI
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same UI should run tests.

    maxInstances: parseInt(process.env.MAXINSTANCES),
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Pipe WebdriverIO logs into a file
    // logOutput: './logs/',
    //
    outputDir: './logs', // path.join(__dirname, 'logs'),
    // Level of logging verbosity: trace, debug, info, warn, error, silent
    logLevel: 'silent',
    deprecationWarnings: true,
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: `${dir}/reports`, // Saves a screenshot to a given path if a command fails.
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: process.env.BASEURL || 'https://beta.esgisoftware.com',

    waitforInterval: 2000,
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your UI setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the UI process.
    services: [
        [TimelineService],
        [EyesService],
        [
            'image-comparison',
            {
                baselineFolder: join(process.cwd(), './screenshots/reference/'),
                formatImageName: '{tag}-{logName}-{width}x{height}',
                screenshotPath: join(process.cwd(), './screenshots/'),
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true
            }
        ]
    ],
    eyes: {
        batch: 'ESGI - Automation',
        // '<APPLITOOLS_API_KEY>', // can be passed here or via environment variable `APPLITOOLS_API_KEY`
        apiKey: 'SO8mkDlXVb5dE4xiJhlER0q6iyrFyhMLXnOA1vObsuM110',
        viewportSize: {
            width: 1920,
            height: 1080
        },
        stitchMode: 'CSS'
    },
    hostname: 'localhost',
    port: 4444,
    // path: '/wd/hub',

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The following are supported: dot (default), spec, and xunit
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: [
        'spec',
        ['timeline', {
            outputDir: './reports/timeline-results',
            embedImages: true,
            screenshotStrategy: 'on:error'
        }],
        ['junit', {
            outputDir: './reports/junit-results',
            outputFileFormat: function (opts) { // optional
                let date = new Date().getTime()
                return `WDIO.xunit.${opts.capabilities}.${date}.${opts.cid}.xml`
            }
        }],
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: false
        }]
    ],

    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        // retries: 3,
        timeout: 250000
    },

    before: function (capabilities, specs) {
       //  browser.setWindowSize(1920, 1080)
        browser.addCommand('click', function (css) {
            $(css).click()
        })
        browser.addCommand('getText', function (css) {
            const eles = $$(css)
            let arr = []
            eles.forEach(function (ele) {
                arr.push(ele.getText())
            })
            return (arr.length === 1) ? arr[0] : arr
        })
        browser.addCommand('getValue', function (css) {
            const eles = $$(css)
            let arr = []
            eles.forEach(function (ele) {
                arr.push(ele.getValue())
            })
            return (arr.length === 1) ? arr[0] : arr
        })
        browser.addCommand('setValue', function (css, value) {
            return $(css).setValue(value)
        })
        browser.addCommand('isVisible', function (css) {
            return $(css).isDisplayed()
        })
        browser.addCommand('isEnabled', function (css) {
            return $(css).isEnabled()
        })
        browser.addCommand('isExisting', function (css) {
            return $(css).isExisting()
        })
        browser.addCommand('selectByVisibleText', function (css, value) {
            return $(css).selectByVisibleText(value)
        })
        console.log(`Test run baseUrl is: ${browser.options.baseUrl} \n`)
    },
    // after: function (failures, pid) {
    // },
    // onComplete: function () {
    // },
    //
    // =====
    // Hooks
    // =====
    // WedriverIO provides several hooks you can use to interfere with the UI process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed once before all workers get launched.
    // onPrepare: function (config, capabilities) {
    // },
    //
    // Gets executed before UI execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    // before: function (capabilities, specs) {
    // },
    //
    // Hook that gets executed before the suite starts
    // beforeSuite: function (suite) {
    // },
    //
    // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
    // beforeEach in Mocha)
    // beforeHook: function () {
    // },
    //
    // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
    // afterEach in Mocha)
    // afterHook: function () {
    // },
    //
    // Function to be executed before a UI (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // beforeTest: function (UI) {
    // },
    //
    // Runs before a WebdriverIO command gets executed.
    // beforeCommand: function (commandName, args) {
    // },
    //
    // Runs after a WebdriverIO command gets executed
    // afterCommand: function (commandName, args, result, error) {
    //     if (error) {
    //         browser.saveScreenshot(`./errorshots/${commandName}${new Date().getTime()}.png`)
    //     }
    // },
    //
    // Function to be executed after a UI (in Mocha/Jasmine) or a step (in Cucumber) starts.
    //  payload: { error, result, duration, passed, retries }
    afterTest: (test, context, payload) => {
        if (payload.error !== undefined) {
            const screenshotPath = `./errorshots/${test.parent.split(' ').join('_')}--${test.title.split(' ').join('_')}${new Date().getTime()}.png`
            browser.saveScreenshot(screenshotPath)
        }
    }
    //
    // Hook that gets executed after the suite has ended
    // afterSuite: function (suite) {
    // },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the UI.
    // after: function (capabilities, specs) {
    // },
   //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    // onComplete: function (exitCode, config, capabilities, results) {
    // }
}
