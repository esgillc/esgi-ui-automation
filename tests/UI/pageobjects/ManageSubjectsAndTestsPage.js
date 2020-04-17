'use strict'

import Page from './Page'
import AddTestPage from './AddTestPage'
// import Helper from '../support/Helper'

class ManageSubjectsAndTestsPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/esgi#'

        this.subjectListCss = '.modal-body .subject-list'
        this.subjectsCss = `${this.subjectListCss} .subject-row`
        this.createNewSubjectButtonCss = '.modal-footer .btn-transparent'
        this.doneButtonCss = 'button=Done'

        this.subjectObjCss = {
            cellordercss: '.cell.order',
            namecss: '.name',
            draghandlecss: '.handle',
            expandcollapsecss: '.fa',
            showhidecss: '.showhide',
            edit: '.action-link[title="Edit subject name"]',
            deletecss: '.action-link[title="Delete subject"]',
            addtestcss: '.add-btn',
            addedtestcss: '.test-row'
        }
    }

    get doneButton () {
        return $(this.doneButtonCss)
    }

    get createNewSubjectButton () {
        return $(this.createNewSubjectButtonCss)
    }

    createNewSubject (name) {
        this.createNewSubjectButton.click()
        browser.pause(1000)
        $('input.form-control').setValue(name)
        // Helper.setValue('input.form-control', name)
        browser.pause(2000)
        // Helper.setValue('input.form-control', name)
        browser.pause(500)
        $('button=Save').click()
        browser.pause(5000)
        // this.doneButton.click()
        // browser.pause(500)
    }

    createSubjectTab (payload) {
        browser.pause(2000)
        // this.getSubjectRowByName('Math Baseline').$('.showhide').click()
        this.createNewSubject(payload.subjectname)
        this.addTestToSubject(payload.subjectname, payload.testname)
        // $('.add-test-footer button:not(.btn-add)').click() // Click the done button
        // $('.add-btn').click()
        // this.waitForLoadingToComplete()
        browser.pause(1000) // @TODO: wait to be on homepage
    }

    getSubjectRowByName (name) {
        return $(`.name=${name}`).$('..').$('..')
    }

    expandSubjectRow (name) {
        this.isSubjectRowCollapsed(name) && this.clickSubjectRow(name)
    }

    isSubjectRowCollapsed (name) {
        return this.getSubjectRowByName(name)
        .$(this.subjectObjCss.expandcollapsecss)
        .getAttribute('class')
        .includes('expand')
    }

    clickSubjectRow (name) {
        this.getSubjectRowByName(name).click()
    }

    addTestToSubject (subjectName, testName) {
        this.expandSubjectRow(subjectName)
        this.clickAddTestToSubjectButton(subjectName)
        if (!this.isReportAProblemAlertDisplayed()) {
            AddTestPage.addTest(testName)
            $('button=Done').click()
            browser.pause(5000)
        }
    }

    addTestToSubjectButton (name) {
        return this.getSubjectRowByName(name).$(this.subjectObjCss.addtestcss)
    }

    clickAddTestToSubjectButton (name) {
        this.addTestToSubjectButton(name).click()
        browser.pause(1000)
    }

    isReportAProblemAlertDisplayed () {
        return $('span=Report an issue').isDisplayed()
    }

    getAddedTests (name) {
        return this.getSubjectRowByName(name)
        .$$(this.subjectObjCss.addedtestcss)
    }

    getAddedTestsText (subjectName) {
        return this.getAddedTests(subjectName).map((test) => {
            return test.getText()
        })
    }

    getAddedTestByname (subjectName, testName) {
        return this.getAddedTests(subjectName).filter((test) => {
            return test.getText() === testName
        })[0]
    }

    isTestAddedToSubject (subjectName, testName) {
        const addedTest = this.getAddedTestByname(subjectName, testName)
        return !!addedTest && addedTest.isDisplayed()
    }
}

export default new ManageSubjectsAndTestsPage()
