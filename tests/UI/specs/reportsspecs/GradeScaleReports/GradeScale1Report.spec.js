import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale1Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach1.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale1Report-Cancel', () => {
        before(function () {
            HomePage.resetGradeScale('CLASS')
        })
        it('should have grade scale modal displayed', function () {
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(true)
        })
        it('should not have grade scale modal displayed', function () {
            ReportsPage.cancelGSModal()
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(false)
        })
    })
    describe('GradeScale1Report-Close', () => {
        before(function () {
            HomePage.resetGradeScale('CLASS')
        })
        it('should have grade scale modal displayed', function () {
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(true)
        })
        it('should not have grade scale modal displayed', function () {
            ReportsPage.closeGSModal()
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(false)
        })
    })
    describe('GradeScale1Report-ClickNext_Step1Screen', () => {
        let action = 'GradeScale1Report-ClickNext_Step1Screen'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        after(function () {
            ReportsPage.closeGSModal()
        })
    })
    describe('GradeScale1Report-ClickNext_Step1Screen_Cancel', () => {
        let action = 'GradeScale1Report-ClickNext_Step1Screen_Cancel'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it('should not have grade scale modal displayed', function () {
            ReportsPage.cancelGSModal()
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(false)
        })
    })
    describe('GradeScale1Report-ClickNext_Step1Screen_Close', () => {
        let action = 'GradeScale1Report-ClickNext_Step1Screen_Close'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it('should not have grade scale modal displayed', function () {
            ReportsPage.closeGSModal()
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(false)
        })
    })
    describe('GradeScale1Report-ClickNext_SelectOSNU_Step2Screen', () => {
        let action = 'GradeScale1Report-ClickNext_SelectOSNU_Step2Screen'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickOSNUReportGS()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        after(function () {
            ReportsPage.closeGSModal()
        })
    })
    describe('GradeScale1Report-ClickNext_SelectOSNU_Step2Screen_Back_SelectEMPN', () => {
        let action = 'GradeScale1Report-ClickNext_SelectOSNU_Step2Screen_Back'
        let action2 = 'GradeScale1Report-SelectEMPN_Step2Screen'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickOSNUReportGS()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
            ReportsPage.cancelGSModal()
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickEMPNReportGS()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        after(function () {
            ReportsPage.closeGSModal()
        })
    })
})
