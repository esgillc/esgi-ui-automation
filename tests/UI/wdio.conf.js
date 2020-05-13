let path = require('path')
let dir = __dirname
let VisualRegressionCompare = require('wdio-visual-regression-service/compare')
function getScreenshotName (basePath) {
    return function (context) {
        let type = context.type
        let testName = context.test.title
        let browserVersion = parseInt(context.browser.version, 10)
        let browserName = context.browser.name
        let browserWidth = context.meta.viewport.width // Viewport depends on the browser size.
        return path.join(basePath, `${testName}_${type}_${browserName}_v${browserVersion}_${browserWidth}.png`)
    }
}

exports.config = {
    runner: 'local',
    credentials: {
        username: 'sbuckhoff',
        password: 'automation01!'
    },

    hostname: '172.28.1.1',
    port: 4444,
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which UI specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    specs: [
        // `${dir}/specs/**/*.spec.js`
        `${dir}/specs/WebFront.spec.js`
    ],
    // define specific suites
    suites: {
        login: [
            `${dir}/specs/Login.spec.js`
        ],
        districtadminacct: [
            `${dir}/specs/districtadminaccount/*.spec.js`
        ],
        schooladminacct: [
            `${dir}/specs/schooladminaccount/CreateSubjectTabTest.spec.js`
        ],
        teacheracct: [
            `${dir}/specs/teacheraccount/CreateSubjectTabTest.spec.js`
        ],
        reports: [
            `${dir}/specs/**/Reports.spec.js`
        ],
        prodsmoke: [
            `${dir}/specs/Login.spec.js`,
            `${dir}/specs/WebFront.spec.js`,
            `${dir}/specs/legacy/*.spec.js`
        ],
        signup: [
            `${dir}/specs/Signup*.spec.js`,
            `${dir}/specs/WebFront.spec.js`
        ]
    },

    // Patterns to exclude.
    exclude: [
    ],
    capabilities: [
        {
            browserName: 'chrome',
            'selenoid:options': {'screenResolution': '1920×1080x24'},
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--test-type',
                    '--headless', // Windows server doesn't like headless mode
                    '--disable-infobars',
                    '--disable-gpu',
                    '--window-size=1920,1080'
                ]
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

    maxInstances: 1,
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
    // services: [
    //     ['selenium-standalone', {
    //         logPath: 'logs',
    //         installArgs: {
    //             drivers: {
    //                 chrome: { version: '81.0.4044.129' }
    //             }
    //         },
    //         args: {
    //             drivers: {
    //                 chrome: { version: '81.0.4044.129' }
    //             }
    //         }
    //     }]
    // ],

     // options
    // chromeDriverArgs: ['--port=4444', '--url-base=\'/\''], // default for ChromeDriver
    // Options are set here as well
    // seleniumLogs: './logs',
    visualRegression: {
        compare: new VisualRegressionCompare.LocalCompare({
            referenceName: getScreenshotName(path.join(process.cwd(), 'screenshots/reference')),
            screenshotName: getScreenshotName(path.join(process.cwd(), 'screenshots/screen')),
            diffName: getScreenshotName(path.join(process.cwd(), 'screenshots/diff')),
            misMatchTolerance: 0.01
        }),
        viewportChangePause: 100,
        orientations: ['landscape']
    },

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

    reporters: ['spec',
        // outputDir: './mochawesomeoutput',
        // mochawesome_filename: `mochawesomeresults${new Date().getTime()}${Math.floor((Math.random() * 1000) + 1)}_del.json`, // will default to wdiomochawesome.json if no name is provided
        // overwrite: false,
        // reportTitle: 'Time Summit Connect',
        // showPassed: true,
        // showSkipped: true,
        // enableCode: false,
        // saveJson: true,
        ['junit', {
            outputDir: './reports/junit-results',
            outputFileFormat: function (opts) { // optional
                let date = new Date().getTime()
                return `WDIO.xunit.${opts.capabilities}.${date}.${opts.cid}.xml`
            }
        }],
        ['allure', {
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
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
    // onPrepare: function () {
    // },
    before: function () {
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
    after: function (failures, pid) {
    },
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
    // },
    //
    // Function to be executed after a UI (in Mocha/Jasmine) or a step (in Cucumber) starts.
    afterTest: function (test) {
        if (test.error !== undefined) {
            let failedTestInfo = {}
            let credentials = browser.config.savedCredentials
            failedTestInfo.currentTest = test.currentTest
            failedTestInfo.parent = test.parent
            failedTestInfo.file = test.file
            failedTestInfo.username = (credentials) ? credentials.username : 'Login not attempted'
            failedTestInfo.password = (credentials) ? credentials.password : 'Login not attempted'
            failedTestInfo.passed = test.passed
            // console.log(test)
            failedTestInfo.message = test.error.message
            console.log(failedTestInfo)
            // let screenshotPath = `./reports/${failedTestInfo.parent.split(' ').join('_')}--${failedTestInfo.currentTest.split(' ').join('_')}.png`
            // browser.saveScreenshot(screenshotPath)
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
    // onComplete: function(exitCode) {
    // }
}
