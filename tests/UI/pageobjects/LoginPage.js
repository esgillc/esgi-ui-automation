'use strict'

import Page from './Page'

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
        // After logging into the assessment switch to the assessment window
        browser.switchWindow(`${browser.options.baseUrl}/esgi`)

        browser.pause(2000)
        // Handle modal @TODO: move this to a modals
        this.isModalVisible() && browser.click('.close')
        browser.pause(500)
        this.isModalVisible() && browser.click('.close-popup')
    }
    isModalVisible () {
        return browser.isVisible('.modal-dialog')
    }
}

export default new LoginPage()
