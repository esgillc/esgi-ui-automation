import LoginPage from '../pageobjects/LoginPage'
import {Login} from '../fixtures/data'

describe('Login page', function () {
    before(function () {
        LoginPage.navigate()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).toBe(LoginPage.getTitle())
    })
    describe('LostPasswordLink', function () {
        before(async function () {
            await LoginPage.deleteAllMails()
        })
        it('should be present', function () {
            expect(LoginPage.lostPasswordLink.isDisplayed()).toBe(true)
        })
    })
    describe('PasswordReminder', function () {
        let resetPasswordInfo
        before(function () {
            resetPasswordInfo = Login.forgotpassword.resetpasswordemail
            LoginPage.passwordReminder(resetPasswordInfo.useremail)
        })
        it('should be sent', function () {
            expect(LoginPage.isPasswordReminderSent()).toBe(true)
        })
        describe('Reset Password Email', function () {
            let emailInfo
            before(async function () {
                emailInfo = await LoginPage.getMailInfo()
            })
            describe('From', function () {
                it('should be present', function () {
                    expect(emailInfo.from).toBe(resetPasswordInfo.from)
                })
            })
            describe('Subject', function () {
                it('should be present', function () {
                    expect(emailInfo.subject).toBe(resetPasswordInfo.subject)
                })
            })
            describe('Body', function () {
                let body
                before(function () {
                    body = emailInfo.text
                })
                describe('UserEmail', function () {
                    it('should be present', function () {
                        expect(body).toContain(resetPasswordInfo.useremail)
                    })
                })
                describe('Last Login Date', function () {
                    it('should be present', function () {
                        expect(body).toContain(resetPasswordInfo.lastlogindate)
                    })
                })
                describe('Username', function () {
                    it('should be present', function () {
                        expect(body).toContain(resetPasswordInfo.username)
                    })
                })
                describe('Verify Email Link', function () {
                    let verifyemaillink
                    before(function () {
                        verifyemaillink = `${browser.options.baseUrl}${resetPasswordInfo.verifyemaillink}`
                    })
                    it('should be present', function () {
                        expect(body).toContain(verifyemaillink)
                    })
                })
                describe('Expire Message', function () {
                    it('should be present', function () {
                        expect(body).toContain(resetPasswordInfo.expiremessage)
                    })
                })
                describe('Concerns', function () {
                    it('should be present', function () {
                        expect(body).toContain(resetPasswordInfo.concerns)
                    })
                })
                describe('Contact', function () {
                    it('should be present', function () {
                        expect(body).toContain(resetPasswordInfo.contact)
                    })
                })
            })
        })
    })
})
