'use strict'
import Helper from '../support/Helper'

export default class Page {
    absoluteUrl (url) {
        url = url || this.url
        return `${browser.options.baseUrl}${url}`
    }

    open (path) {
        path = path || this.url
        browser.url(path)
        this.waitForPageToLoad()
        this.waitForLoadingToComplete()
    }

    isOnPage () {
        return this.getTitle() === this.title
    }
    navigate () {
        browser.url(this.url)
        this.waitForPageToLoad()
        this.waitForLoadingToComplete()
    }

    getTitle () {
        return browser.getTitle()
    }

    waitForPageToLoad (timeout) {
        timeout = timeout || 30000
        this.waitUntil(timeout, this.isPageLoaded())
        browser.pause(3000)
    }

    waitForLoadingToComplete (css, timeout) {
        Helper.waitForLoadingToComplete(css, timeout)
    }

    jqueryLoaded () {
        let pending
        return browser.execute(function () {
            try {
                // eslint-disable-next-line no-undef
                pending = jQuery.active
            } catch (e) {
                pending = 0
            }
            return pending
        })
    }

    isLoaderVisible () {
        return browser.execute(function () {
            // eslint-disable-next-line no-undef
            return $('.spinner').is(':visible') === false
        })
    }

    waitUntil (timeout, callback) {
        timeout = timeout || 15000
        browser.waitUntil(function () {
            return callback
        }, timeout)
    }

    isPageLoaded () {
        return this.isOnPage() && (this.jqueryLoaded() === 0) && this.isLoaderVisible()
    }
}
