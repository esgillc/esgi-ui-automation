import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('StudentProgressReport', function () {
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
        HomePage.clickStudentProgress()
        ReportsPage.selectSubjectRunReport(teacherInfo)
        ReportsPage.clickRunReport()
        ReportsPage.setStudentProgressReportInfo(teacherInfo)
    })
    after(function () {
        // ReportsPage.closeModal()
    })
    describe('StudentProgressReport-Score_Zero', () => {
        let action = 'StudentProgressReport-Score_Zero'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: true,
                percent: false,
                grade: false,
                zero: true,
                nt: false,
                carryforward: false,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Score_Zero_CarryForward', () => {
        let action = 'StudentProgressReport-Score_Zero_CarryForward'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: true,
                percent: false,
                grade: false,
                zero: true,
                nt: false,
                carryforward: true,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Score_NT', () => {
        let action = 'StudentProgressReport-Score_NT'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: true,
                percent: false,
                grade: false,
                zero: false,
                nt: true,
                carryforward: false,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Score_NT_CarryForward', () => {
        let action = 'StudentProgressReport-Score_NT_CarryForward'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: true,
                percent: false,
                grade: false,
                zero: false,
                nt: true,
                carryforward: true,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Percent_Zero', () => {
        let action = 'StudentProgressReport-Percent_Zero'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: true,
                grade: false,
                zero: true,
                nt: false,
                carryforward: false,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Percent_Zero_CarryForward', () => {
        let action = 'StudentProgressReport-Percent_Zero_CarryForward'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: true,
                grade: false,
                zero: true,
                nt: false,
                carryforward: true,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Percent_NT', () => {
        let action = 'StudentProgressReport-Percent_NT'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: true,
                grade: false,
                zero: false,
                nt: true,
                carryforward: false,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Percent_NT_CarryForward', () => {
        let action = 'StudentProgressReport-Percent_NT_CarryForward'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: true,
                grade: false,
                zero: false,
                nt: true,
                carryforward: true,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Grade_Zero', () => {
        let action = 'StudentProgressReport-Grade_Zero'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: false,
                grade: true,
                zero: true,
                nt: false,
                carryforward: false,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Grade_Zero_CarryForward', () => {
        let action = 'StudentProgressReport-Grade_Zero_CarryForward'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: false,
                grade: true,
                zero: true,
                nt: false,
                carryforward: true,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Grade_Zero_CarryForward_ShowGradeColors', () => {
        let action = 'StudentProgressReport-Grade_Zero_CarryForward_ShowGradeColors'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: false,
                grade: true,
                zero: true,
                nt: false,
                carryforward: true,
                showgradecolors: true
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Grade_Zero_ShowGradeColors', () => {
        let action = 'StudentProgressReport-Grade_Zero_ShowGradeColors'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: false,
                grade: true,
                zero: true,
                nt: false,
                carryforward: false,
                showgradecolors: true
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Grade_NT', () => {
        let action = 'StudentProgressReport-Grade_NT'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: false,
                grade: true,
                zero: false,
                nt: true,
                carryforward: false,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Grade_NT_CarryForward', () => {
        let action = 'StudentProgressReport-Grade_NT_CarryForward'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: false,
                grade: true,
                zero: false,
                nt: true,
                carryforward: true,
                showgradecolors: false
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Grade_NT_CarryForward_ShowGradeColors', () => {
        let action = 'StudentProgressReport-Grade_NT_CarryForward_ShowGradeColors'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: false,
                grade: true,
                zero: false,
                nt: true,
                carryforward: true,
                showgradecolors: true
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentProgressReport-Grade_NT_ShowGradeColors', () => {
        let action = 'StudentProgressReport-Grade_NT_ShowGradeColors'
        let payload
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                score: false,
                percent: false,
                grade: true,
                zero: false,
                nt: true,
                carryforward: false,
                showgradecolors: true
            }
            ReportsPage.verifyStudentProgressReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
})
