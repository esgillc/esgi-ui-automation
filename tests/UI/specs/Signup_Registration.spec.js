import SignupPage from '../pageobjects/SignupPage'
import CompleteRegistrationPage from '../pageobjects/CompleteRegistrationPage'
import HomePage from '../pageobjects/HomePage'
import Global from '../support/Global'
import {Signup} from '../fixtures/data'

describe('Signup page - Signup_Registration', function () {
    describe('Normal Path', () => {
        after(function () {
            Global.logout()
        })
        before(function () {
            SignupPage.navigate()
        })
        it('should be on signup page', function () {
            expect(SignupPage.title).toBe(SignupPage.getTitle())
        })
        describe('Register', function () {
            let payload
            before(function () {
                payload = Signup.users.user1
                // Dynamically generate an email from the username and a default domain
                payload.email = SignupPage.generateEmail(payload.username, false)
                SignupPage.signUp(payload)
            })
            it('should be on complete registration page', function () {
                expect(CompleteRegistrationPage.title).toBe(CompleteRegistrationPage.getTitle())
            })
            describe('Complete Registration', () => {
                let payload
                before(() => {
                    payload = {
                        firstname: 'firstname',
                        lastname: 'lastname',
                        country: 'United States',
                        state: 'Ohio',
                        school: 'St Patrick School - Ohio (St. Patrick School)',
                        gradelevel: 'K',
                        expected: {
                            subjecttabs: [
                                'K - ELA',
                                'K - Math',
                                'K - Sight Words'
                            ]
                        }
                    }
                    CompleteRegistrationPage.completeRegistration(payload)
                })
                describe('Home Page', () => {
                    it('should be on the home page', function () {
                        expect(HomePage.title).toBe(HomePage.getTitle())
                    })
                    describe('Subject Tabs', () => {
                        it('should be present', function () {
                            expect(HomePage.subjectTabs()).toStrictEqual(payload.expected.subjecttabs)
                        })
                    })
                })
            })
        })
    })
    describe('Activation Code Path', () => {
        after(function () {
            Global.logout()
        })
        before(function () {
            SignupPage.open(SignupPage.activationCodeUrl)
        })
        it('should be on activation code screen', function () {
            expect(SignupPage.activationCodeHeader).toBeDisplayed()
        })
        describe('Register', function () {
            let payload
            before(function () {
                payload = Signup.users.user2
                // Dynamically generate an email from the username and a default domain
                payload.email = SignupPage.generateEmail(payload.username, false)
                console.log('payload: ', payload)
                SignupPage.signUp(payload)
            })
            it('should be on complete registration page', function () {
                expect(CompleteRegistrationPage.title).toBe(CompleteRegistrationPage.getTitle())
            })
            describe('Complete Registration', () => {
                let payload
                before(() => {
                    payload = {
                        firstname: 'firstname',
                        lastname: 'lastname',
                        country: 'United States',
                        state: 'Ohio',
                        school: 'St Patrick School - Ohio (St. Patrick School)',
                        gradelevel: 'K',
                        expected: {
                            subjecttabs: [
                                'K - ELA',
                                'K - Math',
                                'K - Sight Words'
                            ]
                        }
                    }
                    CompleteRegistrationPage.completeRegistration(payload)
                })
                describe('Home Page', () => {
                    it('should be on the home page', function () {
                        expect(HomePage.title).toBe(HomePage.getTitle())
                    })
                    describe('Subject Tabs', () => {
                        it('should be present', function () {
                            expect(HomePage.subjectTabs()).toStrictEqual(payload.expected.subjecttabs)
                        })
                    })
                })
            })
        })
    })
})
