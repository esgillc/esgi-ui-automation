'use strict'

import Page from './Page'

class StudentManager extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/esgi/student-manager#'
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
    deleteStudent (payload) {
        const studentname = `${payload.firstname} ${payload.lastname}`
        $('#text_input_student_filter').setValue(studentname)
        $('select.teacher-dropdown').click()
        browser.pause(1000)
        $(`option=${payload.teacher}`).click()
        browser.pause(1000)
        $('.ace.select-students-input').click()
        browser.pause(1000)
        $$('.student_operations a')[2].click() // Click Delete Button
        $('.footer_buttons .btn-primary').click()
        this.waitForLoadingToComplete()
    }
}

export default new StudentManager()
