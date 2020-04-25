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
        browser.pause(3000) // @TODO: Implement wait for new window

        let protocol
        let suffix
        const mid = 'www.esgisoftware.com'
        if (browser.getUrl().toLowerCase().includes('beta')) {
            suffix = 'esgi'
            protocol = 'http://'
        } else {
            suffix = 'ESGI/Public/jsindex.aspx'
            protocol = 'https://'
        }

        // After logging into the assessment switch to the assessment window
        browser.switchWindow(`${protocol}${mid}/${suffix}`)

        browser.pause(1000)
        // Handle modal @TODO: move this to a modals
        this.isModalVisible() && browser.click('.close')
        browser.pause(500)
        this.isModalVisible() && browser.click('.close-popup')
    }

    isModalVisible () {
        return browser.isVisible('.modal-dialog')
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
}

export default new LoginPage()
