import SignupPage from '../pageobjects/SignupPage'
import {Signup} from '../fixtures/data'

describe('Signup page - Signup_Rules', function () {
    before(function () {
        SignupPage.navigate()
    })
    it('Given I am on the Signup Page', function () {
        expect(SignupPage.title).toBe(SignupPage.getTitle())
    })
    describe('Given I enter an invalid Email Address in the email field', function () {
        let email
        before(function () {
            SignupPage.email.setValue('')
            browser.pause(1000)
            email = Signup.rules.email.invalid
            SignupPage.email.setValue(email)
        })
        describe('When I lose Focus', function () {
            before(function () {
                SignupPage.loseFocus()
            })
            it('Then username filed should not be autopopulated', function () {
                expect(SignupPage.createUsername.getValue()).toBe('')
            })
        })
    })
    describe('Given I enter a valid Email Address in the email field', function () {
        let email
        before(function () {
            SignupPage.email.setValue('')
            browser.pause(1000)
            email = Signup.rules.email.valid
            SignupPage.email.setValue(email)
        })
        describe('When I lose Focus', function () {
            before(function () {
                SignupPage.loseFocus()
            })
            it('Then username filed should be autopopulated', function () {
                expect(SignupPage.createUsername.getValue()).toBe(email)
            })
        })
    })
    describe('Given I enter an existing Email Address in the email field', function () {
        let email
        before(function () {
            SignupPage.createUsername.setValue('')
            browser.pause(1000)
            email = Signup.rules.email.existing
            SignupPage.email.setValue(email)
        })
        describe('When I lose Focus', function () {
            before(function () {
                SignupPage.loseFocus()
            })
            it('Then username filed should not be autopopulated', function () {
                expect(SignupPage.createUsername.getValue()).toBe('')
            })
            it('And an Account already exist message should be displayed', function () {
                expect(SignupPage.alreadyExistsMessage.getText()).toBe(SignupPage.alreadyExistsMessageText)
            })
        })
    })
    describe('Given I enter a valid Email Address that is too long to be a username in the email field', function () {
        let email
        before(function () {
            SignupPage.email.setValue('')
            browser.pause(1000)
            email = Signup.rules.email.toolongvalid
            SignupPage.email.setValue(email)
        })
        describe('When I lose Focus', function () {
            before(function () {
                SignupPage.loseFocus()
            })
            it('Then username field should not be autopopulated', function () {
                expect(SignupPage.createUsername.getValue()).toBe('')
            })
        })
    })
})

describe('Signup page - Signup_Rules_ActivationCode', function () {
    before(function () {
        SignupPage.navigate()
    })
    it('Given I am on the Signup Page', function () {
        expect(SignupPage.title).toBe(SignupPage.getTitle())
    })
    describe('Given I populate the Email, Username, Password fields', function () {
        let payload
        before(function () {
            payload = {
                email: 'autopopulate@esgisoftware.com',
                password: 'autopopulate123'
            }
            SignupPage.setFieldValues(payload)
        })
        describe('When I click on the "Have an activation code?" link', function () {
            before(function () {
                SignupPage.clickHaveAnActivationCodeLink()
            })
            it('Then I should be navigated to the Actication Code Page', function () {
                expect(browser).toHaveUrl('https://beta.esgisoftware.com/sign-up?ActivationCode=true')
            })
            it('And The Email field should be autopopulated', function () {
                expect(SignupPage.email.getValue()).toBe(payload.email)
            })
            it('And The Username field should be autopopulated', function () {
                expect(SignupPage.createUsername.getValue()).toBe(payload.email)
            })
            it('And The Password field should be autopopulated', function () {
                expect(SignupPage.createPassword.getValue()).toBe(payload.password)
            })
        })
    })
})

describe('Signup page - Signup_Rules_ActivationCode', function () {
    describe('Linked Actication Code', () => {
        before(function () {
            SignupPage.open(SignupPage.activateUrl)
        })
        it('Given I am on the Signup Page', function () {
            expect(SignupPage.title).toBe(SignupPage.getTitle())
        })
        describe('When I enter a linked Activation Code', function () {
            let activationCode
            before(function () {
                activationCode = '4D8B79A3'
                SignupPage.setActivationCode(activationCode)
            })
            it('Then school drowpdown should be displayed', function () {
                expect(SignupPage.schoolDropdown).toBeDisplayed()
            })
        })
    })
    describe('UnLinked Actication Code', () => {
        before(function () {
            SignupPage.open(SignupPage.activationCodeUrl)
        })
        it('Given I am on the Signup Page', function () {
            expect(SignupPage.title).toBe(SignupPage.getTitle())
        })
        describe('When I enter an unlinked Activation Code', function () {
            let activationCode
            before(function () {
                activationCode = '8F1662H3'
                SignupPage.setActivationCode(activationCode)
                SignupPage.loseFocus()
            })
            it('Then school drowpdown should not be displayed', function () {
                expect(SignupPage.schoolDropdown).not.toBeDisplayed()
            })
        })
    })
})
