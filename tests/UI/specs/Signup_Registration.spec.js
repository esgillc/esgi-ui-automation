import SignupPage from '../pageobjects/SignupPage'
import {Signup} from '../fixtures/data'

describe('Signup page - Signup_Registration', function () {
    before(function () {
        SignupPage.navigate()
    })
    it('should be on login page', function () {
        expect(SignupPage.title).toBe(SignupPage.getTitle())
    })
    describe('Register', function () {
        let payload
        before(function () {
            payload = Signup.users.user1
            // Dynamically generate an email from the username and a default domain
            payload.email = SignupPage.generateEmail(payload.username, false)
            console.log('payload: ', payload)
            SignupPage.signUp(payload)
        })
        it('should be present', function () {
            // expect(SignupPage.lostPasswordLink.isDisplayed()).to.equal(true)
        })
    })
})
