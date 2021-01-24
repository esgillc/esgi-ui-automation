
'use strict'
import keys from 'lodash/keys'
function Helper () {
    this.scrollToTopLinkCss = 'a.scrollToTop'
    this.checkboxCheckedCss = 'input:checked'

    this.isCheckBoxChecked = function (css) {
        return $(`${this.checkboxCheckedCss}${css}`).isDisplayed()
    }

    this.isDisplayed = function (ele) {
        if (!ele.ELEMENT) { return $(ele).isDisplayed() }
        return ele.isDisplayed()
    }

    this.generateRandomSSNs = function () {
        return Math.random().toString().slice(2, 11)
    }

    this.switchToFrame = () => {
        // browser.switchToFrame(null)
        const iframeCss = '.contact-us'
        const frame = browser.$(iframeCss)
        browser.switchToFrame(frame)
        browser.pause(3000)
    }

    this.timeFormats = {
        HHcolonMM: 'hh:mm',
        HdotMM: 'h.mm',
        HhspaceMMm: 'hh mmm'
    }

    this.fillForm = function (cssObj, json) {
        try {
            let entityKeys = keys(json)
            for (let key in json) {
                let css
                let value
                if (json.hasOwnProperty(key)) {
                    css = cssObj[key.toLowerCase()]
                    value = json[key]
                    // if key is not in EntityValues throw exception
                    if (!entityKeys.includes(key)) { throw new Error(key + ' not Allowed. Allowed keys are: ' + JSON.stringify(entityKeys)) }
                    this.setFieldValues(css, value)
                }
            }
            this.scrolltotop() // After filling the form scroll to the top
        } catch (e) {
            console.log(e)
        }
    }

    // Returns the Css of the id with that ends with the provided string
    this.getIDCss = function (str) {
        return `[id$='${str}']`
    }

    this.isSelectionBox = function (css) {
        return $(css).getTagName().toLowerCase() === 'select'
    }

    this.isCheckBoxOrRadio = function (css) {
        let ele = $(css)
        return ele.getTagName().toLowerCase() === 'input' && ['radio', 'checkbox'].includes(ele.getAttribute('type').toLowerCase())
    }

    this.scrolltotop = function () {
        if (this.isScrollToTopLinkVisible()) {
            browser.click(this.scrollToTopLinkCss)
            browser.pause(2000)
        }
    }

    this.isScrollToTopLinkVisible = function () {
        return $(this.scrollToTopLinkCss).isDisplayed()
    }

    this.setFieldValues = function (css, value) {
        let ele = $(css)
        if (this.isSelectionBox(css)) {
            ele.selectByVisibleText(value)
        } else if (this.isCheckBoxOrRadio(css)) {
            if (value) {
                !this.isCheckBoxChecked(css) && ele.click()
            } else {
                this.isCheckBoxChecked(css) && ele.click()
            }
        } else {
            browser.setValue(css, value)
        }
        browser.pause(200)
    }

    this.acceptAlert = function () {
        this.alertAction('Yes')
    }

    this.cancelAlert = function () {
        this.alertAction('Cancel')
    }

    this.alertAction = function (action) {
        $('.ui-dialog-buttonset').$(`.ui-button=${action}`).click()
        browser.pause(2000) // @Todo: wait for page to refresh
    }

    this.clickElement = function (css) {
        browser.execute(function (css) {
            // eslint-disable-next-line no-undef
            return document.querySelector(css).click()
        }, css)
        browser.pause(500)
        this.waitForLoadingToComplete()
    }

    this.setValue = function (css, input) {
        browser.execute(function (css, input) {
            // eslint-disable-next-line no-undef
            document.querySelector(css).value = input
        }, css, input)
        browser.pause(500)
        browser.keys(' ') // Necessary else the value is lost after we lose focus
    }

    // this.getValues = function (css) {
    //     return browser.execute(function (css) {
    //             // eslint-disable-next-line no-undef
    //         return document.querySelectorAll('.form-control')[7].value
    //     }, css)
    // }
    this.getValues = function () {
        return browser.execute(() => {
            // eslint-disable-next-line no-unused-expressions
            return document.querySelector('input')
        })
        // this.waitForLoadingToComplete()
    }

    this.hideElements = function () {
        browser.execute(() => {
            // eslint-disable-next-line no-undef
            return document.querySelectorAll('.card-header span[data-bind*="report"]').forEach(function (ele) { ele.style.display = 'none' })
        })
        this.waitForLoadingToComplete()
    }

    this.getText = function (css) {
        return browser.execute(function (css) {
            // eslint-disable-next-line no-undef
            return $(css).text()
        }, css)
    }

    this.jqueryLoaded = function () {
        return browser.execute(() => {
            // eslint-disable-next-line no-undef
            return jQuery.active
        })
    }

    this.domReady = function () {
        return browser.execute(() => {
            // eslint-disable-next-line no-undef
            return document.readyState
        })
    }

    this.waitForLoadingToComplete = function (css, timeout) {
        css = css || '.loadmask-msg .animated-loading,.preloader'
        timeout = timeout || 10000
        browser.pause(250)
        browser.waitUntil(
            () => this.jqueryLoaded() === 0 && this.domReady() === 'complete' && !$(css).isDisplayed(),
            {
                timeout: timeout,
                timeoutMsg: `Loading did not complete in ${timeout / 1000} seconds`
            }
        )
        browser.pause(500)
    }

    this.waitForJQuery = function (timeout) {
        timeout = timeout || 20000
        browser.pause(250)
        let _this = this
        browser.waitUntil(function () {
            return _this.jqueryLoaded() === 0
        }, timeout, `Loading (Jquery) did not complete in ${timeout / 1000} seconds`)
        browser.pause(250)
    }

    this.COLORS = {
        districtadmin: {
            subjecttab: {
                property: 'background-color',
                value: 'rgba(170,125,255,0.15)',
                parsed: {
                    hex: '#aa7dff',
                    alpha: 0.15,
                    type: 'color',
                    rgba: 'rgba(170,125,255,0.15)'
                }
            }
        },
        schooladmin: {
            subjecttab: {
                property: 'background-color',
                value: 'rgba(3,169,244,0.1)',
                parsed: {
                    hex: '#03a9f4',
                    alpha: 0.1,
                    type: 'color',
                    rgba: 'rgba(3,169,244,0.1)'
                }
            }
        },
        teacher: {
            subjecttab: {
                property: 'background-color',
                value: 'rgba(242,242,242,1)',
                parsed: {
                    hex: '#f2f2f2',
                    alpha: 1,
                    type: 'color',
                    rgba: 'rgba(242,242,242,1)'
                }
            }
        }
    }

    this.makeMailRequest = async function (emailAddr) {
        // const crypto = require('crypto')
        let payload = {}
        payload.endpoint = 'mail'
        payload.hash = '7b8671d2df4a772d4645e75d6cb21af3' // crypto.createHash('md5').update(payload.emailAddr).digest('hex')
        return this.makeRequest(payload)
    }

    this.makeDeleteRequest = async function (mailHash) {
        // const crypto = require('crypto')
        let payload = {}
        payload.endpoint = 'delete'
        payload.hash = mailHash
        return this.makeRequest(payload)
    }

    this.makeRequest = function (payload) {
        const rp = require('request-promise')
        const url = `https://privatix-temp-mail-v1.p.rapidapi.com/request/${payload.endpoint}/id/${payload.hash}/`
        const key = '7be698f73bmsh248d31c025a66f8p166934jsnfc3bf39d4417'
        var options = {
            method: 'GET',
            url: url,
            headers: {
                'x-rapidapi-key': key
            },
            json: true
        }
        return rp(options)
    }

    this.generateEmail = function (username, domain) {
        username = username || 'tester'
        domain = domain || 'mailkept.com'
        return `${username}${new Date().getTime()}@${domain}`
    }

    this.confirmEmail = async function (email) {
        // let res = await this.makeRequest(email)
        browser.url(await this.getVerificationUrl(email))
    }

    // this.getVerificationUrl = async function (email) {
    //     let res = await this.makeRequest(email)
    //     let pre = /verify-email/
    //     let suf = '>'
    //     let result = res[0].mail_text.match(new RegExp(`${pre}(.*)${suf}`))
    //     return `${browser.options.baseUrl}${pre}${result[1]}`
    // }

    this.getMails = async function (emailAddr) {
        emailAddr = emailAddr || 'test001@mailkept.com'
        return this.makeMailRequest(emailAddr)
    }

    this.getMailInfo = async function (emailAddr) {
        let mails = await this.getMails(emailAddr)
        let mail = mails[0]
        return {
            from: mail.mail_from,
            subject: mail.mail_subject,
            text: mail.mail_text
        }
    }

    this.getMailIDs = async function (emailAddr) {
        const emails = await this.getMails(emailAddr)
        if (Array.isArray(emails)) {
            return emails.map(function (mail) {
                return mail.mail_id
            })
        }
        console.log('EmailIDs: ', emails)
    }

    this.deleteAllMails = async function (emailAddr) {
        let emailIDs
        try {
            emailIDs = await this.getMailIDs(emailAddr)
            if (!emailIDs) { throw new Error('No Emails In Mailbox') }
            emailIDs.forEach(async emailID => {
                await this.makeDeleteRequest(emailID)
            })
        } catch (error) {
            console.log(error)
        }
    }

    this.triggerChange = function (css) {
        browser.execute(function (css) {
            // eslint-disable-next-line no-undef
            return $(css).trigger('change')
        }, css)
        browser.pause(500)
    }

    this.triggerChange1 = function (ele) {
        browser.execute(function (ele) {
            // eslint-disable-next-line no-undef
            return ele.trigger('change')
        }, ele)
        browser.pause(500)
    }

    this.handleInitialModals = () => {
        // this.waitForPreLoaderToDisappear()
        this.isModalVisible() && browser.click('.close')
        browser.pause(500)
        this.isModalVisible() && browser.click('.close-popup, .close')
    }

    this.acceptCookie = () => {
        const css = '.btn-primary=ACCEPT'
        if ($(css).isDisplayed()) {
            $(css).click()
        }
    }

    this.waitForPreLoaderToDisappear = () => {
        let retries = 0
        let preloaderWait = () => {
                 // wait for preloader to disappear
            const preloader = $('.preloader')
            browser.pause(500)
            preloader.waitForDisplayed({
                timeout: 7000,
                reverse: true,
                timeoutMsg: 'Preloader did not disappear in 7 secs'
            })
        }
        if (retries < 2) {
            try {
                preloaderWait()
                return
            } catch (error) {
                browser.refresh()
                preloaderWait()
                retries++
            }
        }
    }
    this.isModalVisible = () => {
        return $('.modal-dialog').isDisplayed()
        // return browser.isVisible('.modal-dialog')
    }

    // this.hideElements = (css) => {
    //     css = css || '.card-header span[data-bind*="report"]'
    //     this.executeScript(document.querySelectorAll(css).forEach(function (ele) { ele.style.display = 'none' }), css)
    // }
}
module.exports = new Helper()
