import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('ClassGradesReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.credentials)

        // Set the teacher dropdowns
        const teacherInfo = {
            subject: 'SubjectTabTest001',
            class: 'Buckhoff\'s Class'
        }
        HomePage.clickClassGradesReport()
        ReportsPage.clickRunReport()
        ReportsPage.setClassGradesReportInfo(teacherInfo)
    })
    after(function () {
        ReportsPage.closeModal()
    })
    describe('ClassGradesReport-Zero_CurrentMarking', () => {
        let action = 'ClassGradesReport-Zero_CurrentMarking'
        let payload
        before(function () {
            payload = {
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: true,
                allmarking: false
            }
            ReportsPage.verifyClassGradesReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassGradesReport-Zero_CarryForward_CurrentMarking', () => {
        let action = 'ClassGradesReport-Zero_CarryForward_CurrentMarking'
        let payload
        before(function () {
            payload = {
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: true,
                allmarking: false
            }
            ReportsPage.verifyClassGradesReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassGradesReport-Zero_All', () => {
        let action = 'ClassGradesReport-Zero_All'
        let payload
        before(function () {
            payload = {
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: false,
                allmarking: true
            }
            ReportsPage.verifyClassGradesReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassGradesReport-Zero_CarryForward_All', () => {
        let action = 'ClassGradesReport-Zero_CarryForward_All'
        let payload
        before(function () {
            payload = {
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: false,
                allmarking: true
            }
            ReportsPage.verifyClassGradesReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassGradesReport-NT_CurrentMarking', () => {
        let action = 'ClassGradesReport-NT_CurrentMarking'
        let payload
        before(function () {
            payload = {
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: true,
                allmarking: false
            }
            ReportsPage.verifyClassGradesReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassGradesReport-NT_CarryForward_CurrentMarking', () => {
        let action = 'ClassGradesReport-NT_CarryForward_CurrentMarking'
        let payload
        before(function () {
            payload = {
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: true,
                allmarking: false
            }
            ReportsPage.verifyClassGradesReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassGradesReport-NT_All', () => {
        let action = 'ClassGradesReport-NT_All'
        let payload
        before(function () {
            payload = {
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: false,
                allmarking: true
            }
            ReportsPage.verifyClassGradesReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ClassGradesReport-NT_CarryForward_All', () => {
        let action = 'ClassGradesReport-NT_CarryForward_All'
        let payload
        before(function () {
            payload = {
                zero: false,
                nt: true,
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