import LoginPage from '../pageobjects/LoginPage'

describe('Login page', function () {
    before(function () {
        LoginPage.navigate()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).to.equal(LoginPage.getTitle())
    })
    describe('LostPasswordLink', function () {
        it('should be present', function () {
            expect(LoginPage.lostPasswordLink.isDisplayed()).to.equal(true)
        })
    })
})
