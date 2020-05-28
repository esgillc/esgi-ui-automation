'use strict'

import Page from './Page'

class ReportsPage extends Page {
    constructor () {
        super()
        this.url = ''
        this.title = 'Reports'
        this.reportTitleCss = '.modal-header h3,.report-name,.total-report-name,.gs-header h3'
        this.closeModalCss = '.modal-header .close,.fa-close,.close-popup'
        this.alertModalCss = '.modal-dialog .alert'
    }
    get alertModal () { return $(this.alertModalCss) }
    get isAlertModalPresent () { return this.alertModal.isDisplayed() }

    getReportTitle (name) {
        let title
        try {
            this.openReport(name)
            browser.pause(2000)
            title = browser.getText(this.reportTitleCss)
            this.closeModal()
            browser.pause(2000)
        } catch (error) {
            browser.refresh()
            this.waitForLoadingToComplete()
            browser.pause(2000)
        }
        return title
    }

    getReportByName (name) {
        return $(`span=${name}`)
    }

    closeModal () {
        browser.click(this.closeModalCss)
        this.waitForLoadingToComplete()
    }

    closeReport () {
        this.closeModal()
    }

    openReport (name) {
        this.getReportByName(name).click()
        this.waitForLoadingToComplete(null, 20000)
        browser.pause(1000)
    }
}

export default new ReportsPage()
