import SignupPage from '../pageobjects/SignupPage'
import {Signup} from '../fixtures/data'

describe('Signup page - Signup_FieldValidation', function () {
    describe('Validations', function () {
        describe('Email', function () {
            before(function () {
                SignupPage.navigate()
            })
            it('should be on login page', function () {
                expect(SignupPage.title).toBe(SignupPage.getTitle())
            })
            describe('Invalid', function () {
                Signup.fields.email.invalid.forEach(invalid => {
                    describe(`${invalid}`, function () {
                        let fieldProperties
                        before(function () {
                           //  console.log('browser.getWindowSize(): ', browser.getWindowSize())
                            SignupPage.email.setValue(invalid)
                            SignupPage.loseFocus()
                            // browser.saveScreenshot(`./reports/screenshot${new Date().getTime()}.png`)
                            fieldProperties = SignupPage.emailFieldStateProperties()
                        })
                        describe('Check Mark', function () {
                            it('should not be displayed', function () {
                                expect(fieldProperties.success).toBe(false)
                            })
                        })
                        describe('Error Message', function () {
                            it('should be correct', function () {
                                expect(fieldProperties.errormessage).toBe('&lt;div&gt;Email format is invalid. Please try again.&lt;/div&gt;')
                            })
                        })
                        describe('x Mark', function () {
                            it('should be displayed', function () {
                                expect(fieldProperties.failure).toBe(true)
                            })
                        })
                    })
                })
            })
            describe('Valid', function () {
                let email
                let fieldProperties
                before(function () {
                    email = Signup.fields.email.valid
                    SignupPage.email.setValue(email)
                    SignupPage.loseFocus()
                    fieldProperties = SignupPage.emailFieldStateProperties()
                })
                describe('Check Mark', function () {
                    it('should be displayed', function () {
                        expect(fieldProperties.success).toBe(true)
                    })
                })
                describe('Error Message', function () {
                    it('should not be correct', function () {
                        expect(fieldProperties.errormessage).toBe('')
                    })
                })
                describe('x Mark', function () {
                    it('should not be displayed', function () {
                        expect(fieldProperties.failure).toBe(false)
                    })
                })
            })
        })
        describe('Create Username', function () {
            before(function () {
                SignupPage.navigate()
            })
            it('should be on login page', function () {
                expect(SignupPage.title).toBe(SignupPage.getTitle())
            })
            describe('Invalid', function () {
                Signup.fields.username.invalid.forEach(invalid => {
                    describe(`${invalid.test}`, function () {
                        let fieldProperties
                        before(function () {
                            SignupPage.createUsername.setValue(invalid.username)
                            SignupPage.loseFocus()
                            fieldProperties = SignupPage.usernameFieldStateProperties()
                        })
                        describe('Check Mark', function () {
                            it('should not be displayed', function () {
                                expect(fieldProperties.success).toBe(false)
                            })
                        })
                        describe('Error Message', function () {
                            it('should be correct', function () {
                                expect(fieldProperties.errormessage).toBe(invalid.msg)
                            })
                        })
                        describe('x Mark', function () {
                            it('should be displayed', function () {
                                expect(fieldProperties.failure).toBe(true)
                            })
                        })
                    })
                })
            })
            describe('Valid', function () {
                Signup.fields.username.valid.forEach(valid => {
                    describe(`${valid.test}`, function () {
                        let fieldProperties
                        before(function () {
                            SignupPage.createUsername.setValue(valid.username)
                            SignupPage.loseFocus()
                            fieldProperties = SignupPage.usernameFieldStateProperties()
                        })
                        describe('Check Mark', function () {
                            it('should be displayed', function () {
                                expect(fieldProperties.success).toBe(true)
                            })
                        })
                        describe('Error Message', function () {
                            it('should not be correct', function () {
                                expect(fieldProperties.errormessage).toBe(valid.msg)
                            })
                        })
                        describe('x Mark', function () {
                            it('should not be displayed', function () {
                                expect(fieldProperties.failure).toBe(false)
                            })
                        })
                    })
                })
            })
        })
        describe('Create Password', function () {
            before(function () {
                SignupPage.navigate()
            })
            it('should be on login page', function () {
                expect(SignupPage.title).toBe(SignupPage.getTitle())
            })
            describe('Invalid', function () {
                Signup.fields.password.invalid.forEach(invalid => {
                    describe(`${invalid.test}`, function () {
                        let fieldProperties
                        before(function () {
                            SignupPage.createPassword.setValue(invalid.password)
                            SignupPage.loseFocus()
                            fieldProperties = SignupPage.passwordFieldStateProperties()
                        })
                        describe('Check Mark', function () {
                            it('should not be displayed', function () {
                                expect(fieldProperties.success).toBe(false)
                            })
                        })
                        describe('Error Message', function () {
                            it('should be correct', function () {
                                expect(fieldProperties.errormessage).toBe(invalid.msg)
                            })
                        })
                        describe('x Mark', function () {
                            it('should be displayed', function () {
                                expect(fieldProperties.failure).toBe(true)
                            })
                        })
                    })
                })
            })
            describe('Valid', function () {
                Signup.fields.password.valid.forEach(valid => {
                    describe(`${valid.test}`, function () {
                        let fieldProperties
                        before(function () {
                            SignupPage.createPassword.setValue(valid.password)
                            SignupPage.loseFocus()
                            fieldProperties = SignupPage.passwordFieldStateProperties()
                        })
                        describe('Check Mark', function () {
                            it('should be displayed', function () {
                                expect(fieldProperties.success).toBe(true)
                            })
                        })
                        describe('Error Message', function () {
                            it('should not be correct', function () {
                                expect(fieldProperties.errormessage).toBe(valid.msg)
                            })
                        })
                        describe('x Mark', function () {
                            it('should not be displayed', function () {
                                expect(fieldProperties.failure).toBe(false)
                            })
                        })
                    })
                })
            })
        })
        describe('Promo Code', function () {
            before(function () {
                SignupPage.navigate()
            })
            it('should be on login page', function () {
                expect(SignupPage.title).toBe(SignupPage.getTitle())
            })
            describe('Invalid', function () {
                let promoCode
                let fieldProperties
                before(function () {
                    promoCode = Signup.fields.promocode.invalid
                    SignupPage.promoCode.setValue(promoCode.test)
                    SignupPage.loseFocus()
                    fieldProperties = SignupPage.promoCodeFieldStateProperties()
                })
                describe('Check Mark', function () {
                    it('should not be displayed', function () {
                        expect(fieldProperties.success).toBe(false)
                    })
                })
                describe('Error Message', function () {
                    it('should be correct', function () {
                        expect(fieldProperties.errormessage).toBe(promoCode.msg)
                    })
                })
                describe('x Mark', function () {
                    it('should be displayed', function () {
                        expect(fieldProperties.failure).toBe(true)
                    })
                })
            })
            describe('Expired', function () {
                let promoCode
                let fieldProperties
                before(function () {
                    promoCode = Signup.fields.promocode.expired
                    SignupPage.promoCode.setValue(promoCode.test)
                    SignupPage.loseFocus()
                    fieldProperties = SignupPage.promoCodeFieldStateProperties()
                })
                describe('Check Mark', function () {
                    it('should not be displayed', function () {
                        expect(fieldProperties.success).toBe(false)
                    })
                })
                describe('Error Message', function () {
                    it('should be correct', function () {
                        expect(fieldProperties.errormessage).toBe(promoCode.msg)
                    })
                })
                describe('x Mark', function () {
                    it('should be displayed', function () {
                        expect(fieldProperties.failure).toBe(true)
                    })
                })
            })
            describe('Valid', function () {
                let promoCode
                let fieldProperties
                before(function () {
                    promoCode = Signup.fields.promocode.valid
                    SignupPage.promoCode.setValue(promoCode)
                    SignupPage.loseFocus()
                    fieldProperties = SignupPage.promoCodeFieldStateProperties()
                })
                describe('Check Mark', function () {
                    it('should be displayed', function () {
                        expect(fieldProperties.success).toBe(true)
                    })
                })
                describe('Error Message', function () {
                    it('should not be displayed', function () {
                        expect(fieldProperties.errormessage).toBe('')
                    })
                })
                describe('x Mark', function () {
                    it('should not be displayed', function () {
                        expect(fieldProperties.failure).toBe(false)
                    })
                })
            })
            describe.only('Activation Code', function () {
                let promoCode
                let fieldProperties
                before(function () {
                    promoCode = Signup.fields.promocode.activationcode
                    SignupPage.promoCode.setValue(promoCode.test)
                    SignupPage.loseFocus()
                    fieldProperties = SignupPage.promoCodeFieldStateProperties()
                })
                describe('Check Mark', function () {
                    it('should not be displayed', function () {
                        expect(fieldProperties.success).toBe(false)
                    })
                })
                describe('Error Message', function () {
                    it('should be correct', function () {
                        expect(SignupPage.promoCodeToolTip).toHaveTextContaining(promoCode.msg)
                    })
                })
                describe('x Mark', function () {
                    it('should be displayed', function () {
                        expect(fieldProperties.failure).toBe(true)
                    })
                })
            })
        })
    })
})
