'use strict'

export default class Page {
    open (path) {
        browser.url(path)
        this.waitForPageToLoad()
    }

    isOnPage () {
        return this.getTitle() === this.title
    }
    navigate () {
        browser.url(this.url)
        this.waitForPageToLoad()
    }

    getTitle () {
        return browser.getTitle()
    }

    waitForPageToLoad (timeout) {
        timeout = timeout || 30000
        this.waitUntil(timeout, this.isPageLoaded())
        browser.pause(3000)
    }

    waitForLoadingToComplete (timeout) {
        browser.pause(250)
        let css = '.loadmask-msg .animated-loading'
        timeout = timeout || 10000
        browser.waitUntil(function () {
            return !$(css).isDisplayed()
        }, timeout, `Loading did not complete in ${timeout / 1000} seconds`)
        browser.pause(500)
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
