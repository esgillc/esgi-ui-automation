import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'
import expect from 'expect'
const {Target} = require('@applitools/eyes-webdriverio')

describe('ClassTotalsReport', function () {
    beforeEach(() => {
        browser.eyesClearProperties()
    })
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.credentials)
    })
    describe('Settings', () => {
        let payload
        before(function () {
            payload = {
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: true,
                percent: false,
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: true,
                allmarking: false

            }
            HomePage.clickClassTotalsReport(payload)
            ReportsPage.verifyClassTotalsReport(payload)
        })
        after(function () {
            browser.click('.close:first-child')
            HomePage.waitForLoadingToComplete()
        })
        it.only('Score_Zero_CurrentMarking', () => {
            const result = browser.eyesCheck('ClassTotalsReport-Score_Zero_CurrentMarking', Target.region(HomePage.modal))
            expect(result._asExpected).toBe(true)
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                questionnotes: false,
                grades: true,
                skippedquestions: true,
                date: true,
                message: true

            }
            HomePage.clickParentLetterReport()
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            browser.click('.close:first-child')
            HomePage.waitForLoadingToComplete()
        })
        it('UncheckQuestionNotes - Report should be correct', () => {
            const result = browser.eyesCheck('ParentLetterReport_UncheckQuestionNotes', Target.region(HomePage.modal))
            expect(result._asExpected).toBe(true)
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                questionnotes: true,
                grades: false,
                skippedquestions: true,
                date: true,
                message: true

            }
            HomePage.clickParentLetterReport()
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            browser.click('.close:first-child')
            HomePage.waitForLoadingToComplete()
        })
        it('UncheckGrades - Report should be correct', () => {
            const result = browser.eyesCheck('ParentLetterReport_UncheckGrades', Target.region(HomePage.modal))
            expect(result._asExpected).toBe(true)
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                questionnotes: true,
                grades: true,
                skippedquestions: false,
                date: true,
                message: true

            }
            HomePage.clickParentLetterReport()
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            browser.click('.close:first-child')
            HomePage.waitForLoadingToComplete()
        })
        it('UnCheckSkippedQuestions - Report should be correct', () => {
            const result = browser.eyesCheck('ParentLetterReport_UnCheckSkippedQuestions', Target.region(HomePage.modal))
            expect(result._asExpected).toBe(true)
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                questionnotes: true,
                grades: true,
                skippedquestions: true,
                date: false,
                message: true

            }
            HomePage.clickParentLetterReport()
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            browser.click('.close:first-child')
            HomePage.waitForLoadingToComplete()
        })
        it('UncheckDate - Report should be correct', () => {
            const result = browser.eyesCheck('ParentLetterReport_UncheckDate', Target.region(HomePage.modal))
            expect(result._asExpected).toBe(true)
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                questionnotes: true,
                grades: true,
                skippedquestions: true,
                date: true,
                message: false

            }
            HomePage.clickParentLetterReport()
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            browser.click('.close:first-child')
            HomePage.waitForLoadingToComplete()
        })
        it('UncheckMessage - Report should be correct', () => {
            const result = browser.eyesCheck('ParentLetterReport_UncheckMessage', Target.region(HomePage.modal))
            expect(result._asExpected).toBe(true)
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                questionnotes: false,
                grades: false,
                skippedquestions: false,
                date: false,
                message: false

            }
            HomePage.clickParentLetterReport()
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            browser.click('.close:first-child')
            HomePage.waitForLoadingToComplete()
        })
        it('UncheckAll - Report should be correct', () => {
            const result = browser.eyesCheck('ParentLetterReport_UncheckAll', Target.region(HomePage.modal))
            expect(result._asExpected).toBe(true)
        })
    })
})
