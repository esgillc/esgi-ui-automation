import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'
import Global from '../../support/Global'

describe('StudentDetailReport5', function () {
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
    describe('StudentDetailReport-Zero_CurrentMarking_ShowColorsChecked', () => {
        let action = 'StudentDetailReport-Zero_CurrentMarking_ShowColorsChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: true,
                allmarking: false,
                showcolors: true,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_AllMarking_ShowColorsChecked', () => {
        let action = 'StudentDetailReport-Zero_AllMarking_ShowColorsChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: false,
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
    describe('StudentDetailReport-NT_CurrentMarking_ShowColorsChecked', () => {
        let action = 'StudentDetailReport-NT_CurrentMarking_ShowColorsChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: true,
                allmarking: false,
                showcolors: true,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_AllMarking_ShowColorsChecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_ShowColorsChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: false,
                nt: true,
                carryforward: false,
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
    describe('StudentDetailReport-Zero_CurrentMarking_QuestionNotestChecked', () => {
        let action = 'StudentDetailReport-Zero_CurrentMarking_QuestionNotesChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: true,
                allmarking: false,
                showcolors: false,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_AllMarking_QuestionNotestChecked', () => {
        let action = 'StudentDetailReport-Zero_AllMarking_QuestionNotestChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: false,
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
    describe('StudentDetailReport-NT_CurrentMarking_QuestionNotestChecked', () => {
        let action = 'StudentDetailReport-NT_CurrentMarking_QuestionNotestChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: true,
                allmarking: false,
                showcolors: false,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_AllMarking_QuestionNotestChecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_QuestionNotestChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: false,
                nt: true,
                carryforward: false,
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
    describe('StudentDetailReport-Zero_CurrentMarking_AllUnchecked', () => {
        let action = 'StudentDetailReport-Zero_CurrentMarking_AllUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
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
    describe('StudentDetailReport-Zero_AllMarking_AllUnchecked', () => {
        let action = 'StudentDetailReport-Zero_AllMarking_AllUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
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
    describe('StudentDetailReport-NT_CurrentMarking_AllUnchecked', () => {
        let action = 'StudentDetailReport-NT_CurrentMarking_AllUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
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
    describe('StudentDetailReport-NT_AllMarking_AllUnchecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_AllUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
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
})
