import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale4Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach4.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale4Report-VerifyEMPNReportColor', () => {
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickEMPNReportGS()
            ReportsPage.changeGradeLevelColorToOrange()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickRunReport()
        })
        it(`should have the correct selected color`, function () {
            expect(ReportsPage.getUppercaseLettersRowColor().uppercaseLettersBColor).toEqual('#ffcc80')
            expect(ReportsPage.getUppercaseLettersRowColor().uppercaseLetters1Color).toEqual('#ffcc80')
        })
        after(function () {
            ReportsPage.closeGSReportModal()
            ReportsPage.cancelGSModal()
            ReportsPage.cancelGSModal()
            ReportsPage.closeGSModal()
        })
    })
    describe('GradeScale4Report-VerifyWizardComplete_VerifyGSConfig', () => {
        let action = 'GradeScale4Report-VerifyWizardComplete'
        let action2 = 'GradeScale4Report-VerifyGSConfig'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickContinueSetup()
            ReportsPage.inputEMPNrangeValues(24, 22, 20)
            ReportsPage.clickNextPageConfigBtn()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
            ReportsPage.clickWizardOk()
        })
        it(`${action2} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        after(function () {
            ReportsPage.closeModal()
        })
    })
})
