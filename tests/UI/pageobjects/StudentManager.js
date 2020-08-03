'use strict'

import Page from './Page'

class StudentManager extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/esgi#'
        this.headerCss = '.header h1'

        this.searchBoxCss = 'input.form-control'
        this.checkBoxCss = 'span.lbl'
        this.doneButtonCss = '.add-test-footer button:not(.btn-add)'
    }

    get searchBox () { return $(this.searchBoxCss) }
    get checkBox () { return $(this.checkBoxCss) }
    get doneButton () { return $(this.doneButtonCss) }
    get header () { return $(this.headerCss) }

    isOnPage () {
        return this.header.getText() === 'Student Manager'
    }
}

export default new StudentManager()
