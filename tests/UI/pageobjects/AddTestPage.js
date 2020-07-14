'use strict'

import Page from './Page'

class AddTestPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/esgi#'

        this.searchBoxCss = 'input.form-control'
        this.checkBoxCss = 'span.lbl'
        this.doneButtonCss = '.add-test-footer button:not(.btn-add)'
    }

    get searchBox () { return $(this.searchBoxCss) }
    get checkBox () { return $(this.checkBoxCss) }
    get doneButton () { return $(this.doneButtonCss) }

    addTest (testname) {
        this.searchBox.setValue(testname.split(' ')[0].concat(' ')) // searches the first word in the test name
        this.waitForLoadingToComplete()
        browser.pause(1000)
        this.checkBox.click()
        this.waitForLoadingToComplete()
        browser.pause(1000)
        this.doneButton.click() // Click the done button
        this.waitForLoadingToComplete()
        browser.pause(1000) // @TODO: wait to be on homepage
    }
}

export default new AddTestPage()
