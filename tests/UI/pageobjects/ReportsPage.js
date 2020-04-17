'use strict'

import Page from './Page'

class ReportsPage extends Page {
    constructor () {
        super()
        this.url = ''
        this.title = 'Reports'
        this.reportTitleCss = '.modal-header h3,.report-name,.total-report-name,.gs-header h3'
        this.closeModalCss = '.modal-header .close,.fa-close'
    }

    getReportTitle (name) {
        let title
        try {
            this.openReport(name)
            browser.pause(2000)
            title = browser.getText(this.reportTitleCss)
            this.closeModal()
            browser.pause(2000)
        } catch (error) {
            // console.log('Report Error: ', error)
            browser.refresh()
            browser.pause(3000)
        }
        return title
    }

    getReportByName (name) {
        return $(`span=${name}`)
    }

    closeModal () {
        browser.click(this.closeModalCss)
    }

    closeReport () {
        this.closeModal()
    }

    openReport (name) {
        this.getReportByName(name).click()
        this.waitForLoadingToComplete()
    }
}

export default new ReportsPage()
