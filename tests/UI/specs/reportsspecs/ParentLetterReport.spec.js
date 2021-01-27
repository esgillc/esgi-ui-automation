import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('ParentLetterReport', function () {
    const reportName = 'Parent_Letter'
    let info
    before(function () {
        info = {
            student: 'Ella Ayvazian',
            subject: 'SubjectTabTest001',
            class: 'Buckhoff\'s Class'
        }
        LoginPage.open()
        LoginPage.login(Users.teacher.credentials)
        HomePage.selectSchoolYear('2019-2020')
        HomePage.setReportInfo(info)
        HomePage.clickParentLetterReport()
    })
    after(function () {
        HomePage.closeModal()
    })
    describe('Include In Parent Teacher', () => {
        let payload
        let action = 'ParentLetterReport_Check-All'
        before(function () {
            payload = {
                student: 'Ella Ayvazian',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                questionnotes: true,
                grades: true,
                skippedquestions: true,
                date: true,
                message: true

            }
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action}_ModalHeader - should be correct`, function () {
            expect(browser.checkElement($('.pl-report-header'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_BackButton - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportBackBtn, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Subject-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(2)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Teacher-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(3)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Class-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(4)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_studentName-should be correct`, function () {
            expect(browser.checkElement($('.student-name'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_ResultsTable-should be correct`, function () {
            expect(browser.checkElement($('.test-results'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_letter-should be correct`, function () {
            expect(browser.checkElement($('.letter'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_legend-should be correct`, function () {
            expect(browser.checkElement($('.grade-scale-legend'), this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        let action = 'ParentLetterReport_UncheckQuestionNotes'
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
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action}_ModalHeader - should be correct`, function () {
            expect(browser.checkElement($('.pl-report-header'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_BackButton - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportBackBtn, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Subject-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(2)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Teacher-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(3)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Class-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(4)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_studentName-should be correct`, function () {
            expect(browser.checkElement($('.student-name'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_ResultsTable-should be correct`, function () {
            expect(browser.checkElement($('.test-results'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_letter-should be correct`, function () {
            expect(browser.checkElement($('.letter'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_legend-should be correct`, function () {
            expect(browser.checkElement($('.grade-scale-legend'), this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        let action = 'ParentLetterReport_UncheckGrades'
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
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action}_ModalHeader - should be correct`, function () {
            expect(browser.checkElement($('.pl-report-header'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_BackButton - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportBackBtn, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Subject-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(2)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Teacher-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(3)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Class-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(4)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_studentName-should be correct`, function () {
            expect(browser.checkElement($('.student-name'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_ResultsTable-should be correct`, function () {
            expect(browser.checkElement($('.test-results'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_letter-should be correct`, function () {
            expect(browser.checkElement($('.letter'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_legend-should be correct`, function () {
            expect($('.grade-scale-legend').isExisting()).toBe(false)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        let action = 'ParentLetterReport_UnCheckSkippedQuestions'
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
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action}_ModalHeader - should be correct`, function () {
            expect(browser.checkElement($('.pl-report-header'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_BackButton - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportBackBtn, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Subject-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(2)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Teacher-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(3)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Class-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(4)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_studentName-should be correct`, function () {
            expect(browser.checkElement($('.student-name'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_ResultsTable-should be correct`, function () {
            expect(browser.checkElement($('.test-results'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_letter-should be correct`, function () {
            expect(browser.checkElement($('.letter'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_legend-should be correct`, function () {
            expect(browser.checkElement($('.grade-scale-legend'), this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        let action = 'ParentLetterReport_UncheckDate'
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
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action}_ModalHeader - should be correct`, function () {
            expect(browser.checkElement($('.pl-report-header'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_BackButton - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportBackBtn, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Subject-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(2)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Teacher-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(3)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Class-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(4)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_studentName-should be correct`, function () {
            expect(browser.checkElement($('.student-name'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_ResultsTable-should be correct`, function () {
            expect(browser.checkElement($('.test-results'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_letter-should be correct`, function () {
            expect(browser.checkElement($('.letter'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_legend-should be correct`, function () {
            expect(browser.checkElement($('.grade-scale-legend'), this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        let action = 'ParentLetterReport_UncheckMessage'
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
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action}_ModalHeader - should be correct`, function () {
            expect(browser.checkElement($('.pl-report-header'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_BackButton - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportBackBtn, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Subject-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(2)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Teacher-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(3)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Class-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(4)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_studentName-should be correct`, function () {
            expect(browser.checkElement($('.student-name'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_ResultsTable-should be correct`, function () {
            expect(browser.checkElement($('.test-results'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_letter-should be correct`, function () {
            expect($('.letter').isExisting()).toBe(false)
        })
        it(`${action}_legend-should be correct`, function () {
            expect(browser.checkElement($('.grade-scale-legend'), this.test.title)).toBeLessThanOrEqual(1)
        })
        describe(`DownloadPDF_${action}`, function () {
            before(function () {
                ReportsPage.downloadPDF(reportName, action)
            })
            it(`${action}-should be correct`, function () {
            })
        })
    })
    describe('Include In Parent Teacher', () => {
        let payload
        let action = 'ParentLetterReport_UncheckAll'
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
            ReportsPage.verifyReport(payload)
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action}_ModalHeader - should be correct`, function () {
            expect(browser.checkElement($('.pl-report-header'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_BackButton - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportBackBtn, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Subject-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(2)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Teacher-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(3)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_header_Class-should be correct`, function () {
            expect(browser.checkElement($('.parent-letter-header li:nth-child(4)'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_studentName-should be correct`, function () {
            expect(browser.checkElement($('.student-name'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_ResultsTable-should be correct`, function () {
            expect(browser.checkElement($('.test-results'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_letter-should be correct`, function () {
            expect($('.letter').isExisting()).toBe(false)
        })
        it(`${action}_legend-should be correct`, function () {
            expect($('.grade-scale-legend').isExisting()).toBe(false)
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
