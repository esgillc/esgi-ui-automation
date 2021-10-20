const NavigationBuilder = require('../support/NavigationBuilder')
describe('EnvironmentPrep - WarmupReports1', function () {
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
                            .login({username: 'dan504', password: 'Wentiirim'})
                            .doBingo(timeout)
                        browser.reloadSession()
                    }
                })
            })
        })
    })
})
