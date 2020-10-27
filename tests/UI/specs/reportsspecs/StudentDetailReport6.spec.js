import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'

describe('StudentDetailReport6', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.credentials)

        // Set the teacher dropdowns
        const teacherInfo = {
            student: 'Ella Ayvazian',
            subject: 'SubjectTabTest001',
            class: 'Buckhoff\'s Class'
        }
        HomePage.selectSchoolYear('2019-2020')
        HomePage.clickStudentDetail()
        ReportsPage.selectSubjectRunReport(teacherInfo)
        ReportsPage.clickRunReport()
        ReportsPage.setStudentDetailReportInfo(teacherInfo)
    })
    after(function () {
        ReportsPage.closeModal()
        Global.logout()
    })
    describe('StudentDetailReport-NT_AllMarking_GradesShowUnchecked_QuestionNotesUnchecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_GradesShowUnchecked_QuestionNotesUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: false,
                allmarking: true,
                showcolors: true,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_AllMarking_GradesShowUnchecked_ShowColorsUnchecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_GradesShowUnchecked_ShowColorsUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: false,
                allmarking: true,
                showcolors: false,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_CurrentMarking_GradesShowChecked', () => {
        let action = 'StudentDetailReport-Zero_CurrentMarking_GradesShowChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: true,
                allmarking: false,
                showcolors: false,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_AllMarking_GradesShowChecked', () => {
        let action = 'StudentDetailReport-Zero_AllMarking_GradesShowChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: false,
                allmarking: true,
                showcolors: false,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_CurrentMarking_GradesShowChecked', () => {
        let action = 'StudentDetailReport-NT_CurrentMarking_GradesShowChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: true,
                allmarking: false,
                showcolors: false,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_AllMarking_GradesShowChecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_GradesShowChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: false,
                allmarking: true,
                showcolors: false,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_CurrentMarking_CarryForwardChecked', () => {
        let action = 'StudentDetailReport-Zero_CurrentMarking_CarryForwardChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: true,
                allmarking: false,
                showcolors: false,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_AllMarking_CarryForwardChecked', () => {
        let action = 'StudentDetailReport-Zero_AllMarking_CarryForwardChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: false,
                allmarking: true,
                showcolors: false,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_CurrentMarking_CarryForwardChecked', () => {
        let action = 'StudentDetailReport-NT_CurrentMarking_CarryForwardChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: true,
                allmarking: false,
                showcolors: false,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_AllMarking_CarryForwardChecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_CarryForwardChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: false,
                allmarking: true,
                showcolors: false,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
})
