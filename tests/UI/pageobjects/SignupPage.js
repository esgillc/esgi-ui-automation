'use strict'

import Page from './Page'
import Helper from '../support/Helper'

class SignupPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI - One-on-one Assessments Made Easy'
        this.url = '/sign-up'

        this.emailCss = '#email'
        this.createUsernameCss = '#new-username'
        this.createPasswordCss = '#password'
        this.promoCodeCss = '#promo-code'
        this.createTrialButtonCss = 'button.next-btn'
        this.alreadyExistsMessageCss = '.exist-validation-message.show'
        this.promoCodeToolTipCss = '.tooltip-inner span'
        this.haveAnActivationCodeLinkCss = '.promo-code-label a'

        // Thank you dialog
        this.thankYouMessageCss = '.dialog-modal .title b'
        this.continueCss = 'a=CONTINUE'

        // Finish Setting up text
        this.finishSettingUpTextCss = 'b=Finish setting up your account'
    }

    get email () { return $(this.emailCss) }
    get createUsername () { return $(this.createUsernameCss) }
    get createPassword () { return $(this.createPasswordCss) }
    get promoCode () { return $(this.promoCodeCss) }
    get createTrialButton () { return $(this.createTrialButtonCss) }
    get continue () { return $(this.continueCss) }
    get finishSettingUpText () { return $(this.finishSettingUpTextCss) }
    get alreadyExistsMessage () { return $(this.alreadyExistsMessageCss) }
    get alreadyExistsMessageText () { return 'An account with this email already exists. Do you want to login to your existing account?' }
    get promoCodeToolTip () { return $(this.promoCodeToolTipCss) }
    get haveAnActivationCodeLink () { return $(this.haveAnActivationCodeLinkCss) }

    signUp (payload) {
        this.setFieldValues(payload)
        this.createTrialButton.click()
        $('b=Thanks for creating your free trial!').waitForDisplayed({ timeout: 6000 })
        this.clickContinue()
    }

    setFieldValues (payload) {
        this.email.setValue(payload.email)
        browser.pause(250)
        // this.createUsername.setValue(payload.username)
        this.createPassword.setValue(payload.password)
        browser.pause(250)
        this.promoCode.setValue(payload.promocode)
        browser.pause(250)
    }

    generateEmail (username, domain) {
        return Helper.generateEmail(username, domain)
    }

    isThankYouMessagePresent () {
        return browser.getText(this.thankYouMessageCss) === 'Thanks for creating your free trial!'
    }

    clickContinue () {
        this.continue.click()
        this.finishSettingUpText.waitForDisplayed({ timeout: 6000 })
    }

    getFieldStateEles (el) {
        const parent = el.$('..')
        return {
            errormessage: parent.$('.error-message span'),
            success: parent.$('.fa-check'),
            failure: parent.$('.fa-close')
        }
    }

    getFieldStateProperties (el) {
        const state = this.getFieldStateEles(el)
        return {
            errormessage: state.errormessage.getText(),
            success: state.success.isExisting() && state.success.isDisplayed(),
            failure: state.failure.isExisting() && state.failure.isDisplayed()
        }
    }

    emailFieldStateProperties () {
        return this.getFieldStateProperties(this.email)
    }

    usernameFieldStateProperties () {
        return this.getFieldStateProperties(this.createUsername)
    }

    passwordFieldStateProperties () {
        return this.getFieldStateProperties(this.createPassword)
    }

    promoCodeFieldStateProperties () {
        return this.getFieldStateProperties(this.promoCode)
    }

    loseFocus () {
        browser.keys('Tab')
        browser.pause(1000)
    }

    clickHaveAnActivationCodeLink () {
        this.haveAnActivationCodeLink.click()
        browser.pause(2000)
    }
}

export default new SignupPage()
