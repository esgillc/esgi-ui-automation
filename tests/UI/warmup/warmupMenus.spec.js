const NavigationBuilder = require('../support/NavigationBuilder')
describe('EnvironmentPrep - WarmupMenus', function () {
    const timeout = 3000
    let warmUp
    before(function () {
        warmUp = NavigationBuilder.call()
        warmUp.onWarmupError()
    })
    after(function () {
    })
    describe('WarmUp', function () {
        describe('Pages', () => {
            describe('Navigation', () => {
                it('Warm up environment under test', function () {
                    this.timeout(0) // Disable mocha timeout
                    let i
                    for (i = 0; i < 3; i++) {
                        warmUp
                            .goToLoginPage(timeout)
                            .login(browser.config.credentials)
                            .navigateToTestExplorer(timeout)
                            .navigateToStudentManager(timeout)
                            .navigateToParentConferencer(timeout)
                            .navigateToHome(timeout)
                        browser.reloadSession()
                    }
                })
            })
        })
    })
})
