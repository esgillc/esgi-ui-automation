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
            addtestcss: '.add-title',
            addedtestcss: '.test-row'
        }

        // SubjectTab publish
        this.publishIndefinitelyCss = '#SubjectPublishType-indefinitely'
    }

    get doneButton () { return $(this.doneButtonCss) }
    get createNewSubjectButton () { return $(this.createNewSubjectButtonCss) }
    get publishIndefinitely () { return $(this.publishIndefinitelyCss) }

    createNewSubject (payload) {
        this.createNewSubjectButton.click()
        browser.pause(1000)
        $('input.form-control').setValue(payload.subjectname)
        payload.publishindefinitely && this.publishIndefinitely.click()
        // Helper.setValue('input.form-control', name)
        browser.pause(500)
        $('button=Save').click()
        this.waitForLoadingToComplete()
        // this.doneButton.click()
        // browser.pause(500)
    }

    createSubjectTab (payload) {
        browser.pause(2000)
        this.createNewSubject(payload)
        this.addTestToSubject(payload.subjectname, payload.testname)
        this.waitForLoadingToComplete()
    }

    getSubjectRowByName (name) {
        const ele = $(`.name=${name}`)
        return ele.$('..').$('..')
    }

    deleteSubjectTab (name) {
        this.waitForLoadingToComplete()
        const row = this.getSubjectRowByName(name)
        if (row) {
            row.$(this.subjectObjCss.deletecss).click()
            browser.pause(10000)
            browser.pause(250)
            $('span=Delete').click()
            browser.pause(2000)
        }
        $('button=Done').click()
        this.waitForLoadingToComplete()
    }

    expandSubjectRow (name) {
        this.isSubjectRowCollapsed(name) && this.clickSubjectRow(name)
    }

    isSubjectRowPresent (name) { // add-title
        return this.getSubjectRowByName(name).isDisplayed()
    }

    isSubjectRowCollapsed (name) { // add-title
        return this.getSubjectRowByName(name)
        .$('.add-test-row').isDisplayed()
    }

    clickSubjectRow (name) {
        this.getSubjectRowByName(name).click()
    }

    addTestToSubject (subjectName, testName) {
        //  this.expandSubjectRow(subjectName)
        this.clickAddTestToSubjectButton(subjectName)
        if (!this.isReportAProblemAlertDisplayed()) {
            AddTestPage.addTest(testName)
            $('button=Done').click()
            this.waitForLoadingToComplete()
        }
    }

    addTestToSubjectButton (name) {
        return this.getSubjectRowByName(name).$(this.subjectObjCss.addtestcss)
    }

    clickAddTestToSubjectButton (name) {
        $('.add-title').click() // @TODO: looking into making this dynamic
        this.waitForLoadingToComplete()
        // this.addTestToSubjectButton(name).click()
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
