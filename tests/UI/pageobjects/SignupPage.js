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

        this.schoolDropdownCss = 'select#school'

        this.activationCodeCss = '.ac-input'

        // Thank you dialog
        this.thankYouMessageCss = '.dialog-modal .title b'
        this.finishLaterCss = 'a=FINISH LATER'
        this.continueCss = 'a=CONTINUE'

        // Finish Setting up text
        this.finishSettingUpTextCss = 'b=Finish setting up your account'

        // Activation Code page
        this.activationCodeHeaderCss = 'b=Account Sign Up'
    }

    get email () { return $(this.emailCss) }
    get createUsername () { return $(this.createUsernameCss) }
    get createPassword () { return $(this.createPasswordCss) }
    get promoCode () { return $(this.promoCodeCss) }
    get activationCode () { return $(this.activationCodeCss) }
    get createTrialButton () { return $(this.createTrialButtonCss) }
    get finishLater () { return $(this.finishLaterCss) }
    get continue () { return $(this.continueCss) }
    get finishSettingUpText () { return $(this.finishSettingUpTextCss) }
    get alreadyExistsMessage () { return $(this.alreadyExistsMessageCss) }
    get alreadyExistsMessageText () { return 'An account with this email already exists. Do you want to login to your existing account?' }
    get promoCodeToolTip () { return $(this.promoCodeToolTipCss) }
    get schoolDropdown () { return $(this.schoolDropdownCss) }
    get haveAnActivationCodeLink () { return $(this.haveAnActivationCodeLinkCss) }
    get activationCodeHeader () { return $(this.activationCodeHeaderCss) }

    get activationCodeUrl () { return `${browser.options.baseUrl}/sign-up?ActivationCode=true` }
    get isOnActivationCodeScreen () { return browser.getUrl() === this.activationCodeUrl }

    signUp (payload) {
        this.waitForLoadingToComplete()
        const activationCodeScreen = this.isOnActivationCodeScreen
        this.setFieldValues(payload)
        this.createTrialButton.click()
        if (!activationCodeScreen) {
            $('b=Thanks for creating your free trial!').waitForDisplayed({ timeout: 6000 })
            this.clickContinue()
        }
        this.waitForLoadingToComplete()
    }

    setFieldValues (payload) {
        this.setValue(this.email, payload.email)
        // this.setValue(this.createUsername, payload.username)
        this.setValue(this.createPassword, payload.password)
        this.setValue(this.promoCode, payload.promocode)
        this.setActivationCode(payload.activationcode)
    }

    setValue (el, value) {
        !el.error && el.setValue(value)
        browser.pause(250)
    }

    setActivationCode (code) {
        this.setValue(this.activationCode, code)
        this.loseFocus()
        browser.pause(250)
    }

    generateEmail (username, domain) {
        return Helper.generateEmail(username, domain)
    }

    isThankYouMessagePresent () {
        return browser.getText(this.thankYouMessageCss) === 'Thanks for creating your free trial!'
    }

    clickFinishLater () {
        this.finishLater.click()
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
