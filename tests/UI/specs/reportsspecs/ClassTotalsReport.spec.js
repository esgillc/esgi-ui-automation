import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('ClassTotalsReport', function () {
    const reportName = 'Total_Report'
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.credentials)
        HomePage.selectSchoolYear('2019-2020')
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
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Score_Zero_CarryForward_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Score_Zero_CarryForward_CurrentMarking'
        let payload
        before(function () {
            payload = {
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
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Score_Zero_All', () => {
        let action = 'ClassTotalsReport-Score_Zero_All'
        let payload
        before(function () {
            payload = {
                score: true,
                percent: false,
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: false,
                allmarking: true
            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Score_Zero_CarryForward_All', () => {
        let action = 'ClassTotalsReport-Score_Zero_CarryForward_All'
        let payload
        before(function () {
            payload = {
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
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Score_NT_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Score_NT_CurrentMarking'
        let payload
        before(function () {
            payload = {
                score: true,
                percent: false,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: true,
                allmarking: false
            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Score_NT_CarryForward_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Score_NT_CarryForward_CurrentMarking'
        let payload
        before(function () {
            payload = {
                score: true,
                percent: false,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: true,
                allmarking: false
            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Score_NT_All', () => {
        let action = 'ClassTotalsReport-Score_NT_All'
        let payload
        before(function () {
            payload = {
                score: true,
                percent: false,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: false,
                allmarking: true
            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Score_NT_CarryForward_All', () => {
        let action = 'ClassTotalsReport-Score_NT_CarryForward_All'
        let payload
        before(function () {
            payload = {
                score: true,
                percent: false,
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
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Percent_Zero_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Percent_Zero_CurrentMarking'
        let payload
        before(function () {
            payload = {
                score: false,
                percent: true,
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
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Percent_Zero_CarryForward_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Percent_Zero_CarryForward_CurrentMarking'
        let payload
        before(function () {
            payload = {
                score: false,
                percent: true,
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
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Percent_Zero_All', () => {
        let action = 'ClassTotalsReport-Percent_Zero_All'
        let payload
        before(function () {
            payload = {
                score: false,
                percent: true,
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: false,
                allmarking: true
            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Percent_Zero_CarryForward_All', () => {
        let action = 'ClassTotalsReport-Percent_Zero_CarryForward_All'
        let payload
        before(function () {
            payload = {
                score: false,
                percent: true,
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
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Percent_NT_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Percent_NT_CurrentMarking'
        let payload
        before(function () {
            payload = {
                score: false,
                percent: true,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: true,
                allmarking: false
            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Percent_NT_CarryForward_CurrentMarking', () => {
        let action = 'ClassTotalsReport-Percent_NT_CarryForward_CurrentMarking'
        let payload
        before(function () {
            payload = {
                score: false,
                percent: true,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: true,
                allmarking: false
            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Percent_NT_All', () => {
        let action = 'ClassTotalsReport-Percent_NT_All'
        let payload
        before(function () {
            payload = {
                score: false,
                percent: true,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: false,
                allmarking: true
            }
            ReportsPage.verifyClassTotalsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('ClassTotalsReport-Percent_NT_CarryForward_All', () => {
        let action = 'ClassTotalsReport-Percent_NT_CarryForward_All'
        let payload
        before(function () {
            payload = {
                score: false,
                percent: true,
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
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
})
