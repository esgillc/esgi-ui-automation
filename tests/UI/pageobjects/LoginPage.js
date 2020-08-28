'use strict'

import Page from './Page'
import Helper from '../support/Helper'

class LoginPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI - One-on-one Assessments Made Easy'
        this.url = '/login'

        this.loginButtonCss = '.login-button'
        this.usernameCss = '[name="LoginForm.UserName"]'
        this.passwordCss = '[name="LoginForm.UserPassword"]'
        this.submitCss = '.login-btn'
        this.lostPasswordLinkCss = '.lost-password-wrapper a'

        // Remind Password Modal
        this.remindPassEmailAddressCss = '#email-address'
        this.remindPassusernameCss = '#user-name'
        this.remindPassSuccessAlertCss = '.SuccessfulTextEmail.alert.alert-success'
    }

    get loginButton () { return $(this.loginButtonCss) }
    get username () { return $(this.usernameCss) }
    get password () { return $(this.passwordCss) }
    get submitButton () { return $(this.submitCss) }
    get lostPasswordLink () { return $(this.lostPasswordLinkCss) }

    login (credentials) {
        this.waitForPageToLoad()
        this.username.setValue(credentials.username)
        this.password.setValue(credentials.password)
        this.submitButton.click()
        browser.pause(250)
        this.waitForPageToLoad()
        const assessmentWindow = browser.getWindowHandles()[1]
        browser.switchToWindow(assessmentWindow)
        this.waitForLoadingToComplete(null, 20000)
        Helper.handleInitialModals()
    }

    isModalVisible () {
        return Helper.isModalVisible()
    }

    clickLostPasswordLink () {
        this.lostPasswordLink.click()
        browser.pause(2000) // @TODO: wait for modal to popup
    }

    passwordReminder (email) {
        this.clickLostPasswordLink()
        $(this.remindPassEmailAddressCss).setValue(email)
        $('button=Submit').click()
        browser.pause(3000)
    }

    isPasswordReminderSent () {
        return browser.isVisible(this.remindPassSuccessAlertCss)
    }

    getMail () {
        return Helper.getMail()
    }

    getMailIDs () {
        return Helper.getMailIDs()
    }

    deleteAllMails () {
        return Helper.deleteAllMails()
    }

    getMailInfo () {
        return Helper.getMailInfo()
    }
}

export default new LoginPage()
