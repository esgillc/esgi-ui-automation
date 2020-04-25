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
            return $(css).click()
        }, css)
        browser.pause(500)
    }

    this.setValue = function (css, input) {
        browser.execute(function (css, input) {
            // eslint-disable-next-line no-undef
            return $(css).val(input)
        }, css, input)
        browser.pause(500)
    }

    this.getText = function (css) {
        return browser.execute(function (css) {
            // eslint-disable-next-line no-undef
            return $(css).text()
        }, css)
    }

    this.waitForLoadingToComplete = function (css, timeout) {
        css = css || '.loadmask-msg .animated-loading'
        timeout = timeout || 5000
        browser.waitUntil(function () {
            return !$(css).isDisplayed()
        }, timeout, `Loading did not complete in ${timeout / 1000} seconds`)
    }

    this.COLORS = {
        districtadmin: {
            subjecttab: {
                property: 'color',
                value: 'rgb(225,223,223)',
                parsed: {
                    hex: '#e1dfdf',
                    alpha: 1,
                    type: 'color',
                    rgb: 'rgb(225,223,223)'
                }
            }
        },
        schooladmin: {
            subjecttab: {
                property: 'color',
                value: 'rgb(66,66,66)',
                parsed: {
                    hex: '#424242',
                    alpha: 1,
                    type: 'color',
                    rgb: 'rgb(66,66,66)'
                }
            }
        },
        teacher: {
            subjecttab: {
                property: 'color',
                value: 'rgb(66,66,66)',
                parsed: {
                    hex: '#424242',
                    alpha: 1,
                    type: 'color',
                    rgb: 'rgb(66,66,66)'
                }
            }
        }
    }

    this.makeRequest = function (email) {
        const rp = require('request-promise')
        // const crypto = require('crypto')
        const emailHash = '7b8671d2df4a772d4645e75d6cb21af3' // crypto.createHash('md5').update(email).digest('hex')
        const url = `https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/${emailHash}/`
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

    this.generateEmail = function () {
        return `tester${new Date().getTime()}@feroxo.com`
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

    this.getMail = async function () {
        let email = 'test001@mailkept.com'
        return this.makeRequest(email)
        // let pre = /verify-email/
        // let suf = '>'
        // let result = res[0].mail_text.match(new RegExp(`${pre}(.*)${suf}`))
        // return `${browser.options.baseUrl}${pre}${result[1]}`
    }
}
module.exports = new Helper()
