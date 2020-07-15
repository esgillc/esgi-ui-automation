import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('FlashReport', function () {
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
        HomePage.clickFlashcardsReport()
        ReportsPage.setReportInfo(info)
    })
    after(function () {
        HomePage.closeModal()
    })
    describe('Settings', () => {
        let action = 'FlashReport_Check_IncorrectOnly_Check_Six'
        before(function () {
            ReportsPage.clickInCorrectOnly()
            ReportsPage.clickCardsPerPageSix()
            ReportsPage.generateReport()
            browser.pause(5000) // Takes a long time to load here.
            ReportsPage.hideDates()
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
        })
    })
    describe('Settings', () => {
        let action = 'FlashReport_Check_IncorrectOnly_Check_Nine'
        before(function () {
            ReportsPage.clickInCorrectOnly()
            ReportsPage.clickCardsPerPageNine()
            ReportsPage.generateReport()
            ReportsPage.hideDates()
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
        })
    })
    describe('Settings', () => {
        let action = 'FlashReport_Check_IncorrectOnly_Check_Twelve'
        before(function () {
            ReportsPage.clickInCorrectOnly()
            ReportsPage.clickCardsPerPageTwelve()
            ReportsPage.generateReport()
            ReportsPage.hideDates()
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
        })
    })
    describe('Settings', () => {
        let action = 'FlashReport_Check_IncorrectAndSkipped_Check_Six'
        before(function () {
            ReportsPage.clickIncorrectAndSkipped()
            ReportsPage.clickCardsPerPageSix()
            ReportsPage.generateReport()
            browser.pause(5000) // Takes a long time to load here.
            ReportsPage.hideDates()
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
        })
    })
    describe('Settings', () => {
        let action = 'FlashReport_Check_IncorrectAndSkipped_Check_Nine'
        before(function () {
            ReportsPage.clickIncorrectAndSkipped()
            ReportsPage.clickCardsPerPageNine()
            ReportsPage.generateReport()
            ReportsPage.hideDates()
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
        })
    })
    describe('Settings', () => {
        let action = 'FlashReport_Check_IncorrectAndSkipped_Check_Twelve'
        before(function () {
            ReportsPage.clickIncorrectAndSkipped()
            ReportsPage.clickCardsPerPageTwelve()
            ReportsPage.generateReport()
            ReportsPage.hideDates()
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
        })
        describe('ScrollToMiddle', function () {
            before(function () {
                ReportsPage.scrollToQuestionI()
            })
            it(`${action}_ScrollToMiddle - should be correct`, function () {
                expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
            })
        })
        describe('ScrollToEnd', function () {
            before(function () {
                ReportsPage.scrollToQuestionZ()
            })
            it(`${action}_ScrollToEnd - should be correct`, function () {
                expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
            })
        })
    })
    describe('Settings', () => {
        let action = 'FlashReport_Check_FullSet_Check_Six'
        before(function () {
            ReportsPage.clickFullSet()
            ReportsPage.clickCardsPerPageSix()
            ReportsPage.generateReport()
            ReportsPage.hideDates()
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
        })
        describe('ScrollToMiddle', function () {
            before(function () {
                ReportsPage.scrollToQuestionI()
            })
            it(`${action}_ScrollToMiddle - should be correct`, function () {
                expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
            })
        })
        describe('ScrollToEnd', function () {
            before(function () {
                ReportsPage.scrollToQuestionZ()
            })
            it(`${action}_ScrollToEnd - should be correct`, function () {
                expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
            })
        })
    })
    describe('Settings', () => {
        let action = 'FlashReport_Check_FullSet_Check_Nine'
        before(function () {
            ReportsPage.clickFullSet()
            ReportsPage.clickCardsPerPageNine()
            ReportsPage.generateReport()
            ReportsPage.hideDates()
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
        })
        describe('ScrollToMiddle', function () {
            before(function () {
                ReportsPage.scrollToQuestionI()
            })
            it(`${action}_ScrollToMiddle - should be correct`, function () {
                expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
            })
        })
        describe('ScrollToEnd', function () {
            before(function () {
                ReportsPage.scrollToQuestionZ()
            })
            it(`${action}_ScrollToEnd - should be correct`, function () {
                expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
            })
        })
    })
    describe('Settings', () => {
        let action = 'FlashReport_Check_FullSet_Check_Twelve'
        before(function () {
            ReportsPage.clickFullSet()
            ReportsPage.clickCardsPerPageTwelve()
            ReportsPage.generateReport()
            ReportsPage.hideDates()
        })
        after(function () {
            ReportsPage.goBack()
            HomePage.waitForLoadingToComplete()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
        })
        describe('ScrollToMiddle', function () {
            before(function () {
                ReportsPage.scrollToQuestionI()
            })
            it(`${action}_ScrollToMiddle - should be correct`, function () {
                expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
            })
        })
        describe('ScrollToEnd', function () {
            before(function () {
                ReportsPage.scrollToQuestionZ()
            })
            it(`${action}_ScrollToEnd - should be correct`, function () {
                expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBe(0)
            })
        })
    })
})
