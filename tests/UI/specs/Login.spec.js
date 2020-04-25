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
    describe('PasswordReminder', function () {
        let email
        before(async function () {
            email = 'test001@mailkept.com'
            LoginPage.clickLostPasswordLink()
            LoginPage.passwordReminder(email)
            console.log(await LoginPage.getMail())
        })
        it('should be sent', function () {
            expect(LoginPage.isPasswordReminderSent()).to.equal(true)
        })
    })
})
