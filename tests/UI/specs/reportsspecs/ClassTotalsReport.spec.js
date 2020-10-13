import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('ClassTotalsReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.credentials)

        // Set the teacher dropdowns
        const teacherInfo = {
            subject: 'SubjectTabTest001',
            class: 'Buckhoff\'s Class'
        }
        HomePage.clickClassTotalsReport()
        ReportsPage.setClassTotalsReportInfo(teacherInfo)
    })
    after(function () {
        ReportsPage.closeModal()
    })
    describe('ClassTotalsReport-Score_Zero_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Score_Zero_CurrentMarking'
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
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassTotalsReport-Score_Zero_CarryForward_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Score_Zero_CarryForward_CurrentMarking'
        let payload
        before(function () {
            payload = {
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: true,
                percent: false,
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: true,
                allmarking: false

            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassTotalsReport-Score_Zero_CarryForward_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Score_Zero_CarryForward_CurrentMarking'
        let payload
        before(function () {
            payload = {
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: true,
                percent: false,
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: true,
                allmarking: false

            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassTotalsReport-Score_Zero_CarryForward_All', () => {
        let action = 'ClassTotalsReport-Score_Zero_CarryForward_All'
        let payload
        before(function () {
            payload = {
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: true,
                percent: false,
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: false,
                allmarking: true
            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
})
