import LoginPage from '../pageobjects/LoginPage'
import {Login} from '../fixtures/data'

describe('Login page', function () {
    before(async function () {
        console.log(await LoginPage.deleteAllMails())
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
        let resetPasswordInfo
        before(function () {
            resetPasswordInfo = Login.forgotpassword.resetpasswordemail
            LoginPage.clickLostPasswordLink()
            LoginPage.passwordReminder(resetPasswordInfo.useremail)
        })
        it('should be sent', function () {
            expect(LoginPage.isPasswordReminderSent()).to.equal(true)
        })
        describe('Reset Password Email', function () {
            let emailInfo
            before(async function () {
                emailInfo = await LoginPage.getMailInfo()
            })
            describe('From', function () {
                it('should be present', function () {
                    expect(emailInfo.from).to.equal(resetPasswordInfo.from)
                })
            })
            describe('Subject', function () {
                it('should be present', function () {
                    expect(emailInfo.subject).to.equal(resetPasswordInfo.subject)
                })
            })
            describe('Body', function () {
                let body
                before(function () {
                    body = emailInfo.text
                })
                describe('UserEmail', function () {
                    it('should be present', function () {
                        expect(body).includes(resetPasswordInfo.useremail)
                    })
                })
                describe('Last Login Date', function () {
                    it('should be present', function () {
                        expect(body).includes(resetPasswordInfo.lastlogindate)
                    })
                })
                describe('Username', function () {
                    it('should be present', function () {
                        expect(body).includes(resetPasswordInfo.username)
                    })
                })
                describe('Verify Email Link', function () {
                    it('should be present', function () {
                        expect(body).includes(resetPasswordInfo.verifyemaillink)
                    })
                })
                describe('Verify Email Link', function () {
                    it('should be present', function () {
                        expect(body).includes(resetPasswordInfo.verifyemaillink)
                    })
                })
                describe('Expire Message', function () {
                    it('should be present', function () {
                        expect(body).includes(resetPasswordInfo.expiremessage)
                    })
                })
                describe('Concerns', function () {
                    it('should be present', function () {
                        expect(body).includes(resetPasswordInfo.concerns)
                    })
                })
                describe('Contact', function () {
                    it('should be present', function () {
                        expect(body).includes(resetPasswordInfo.contact)
                    })
                })
            })
        })
    })
})
