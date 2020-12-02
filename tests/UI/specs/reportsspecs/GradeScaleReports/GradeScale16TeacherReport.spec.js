import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale16TeacherReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach16.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale16TeacherReport-VerifyWizardComplete_VerifyGSConfig', () => {
        let action = 'GradeScale16TeacherReport-VerifyWizardComplete'
        let action2 = 'GradeScale16TeacherReport-VerifyGSConfig'
        before(function () {
            HomePage.clickClassGradesReport()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickExistingEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickContinueSetup()
            ReportsPage.inputEMPNrangeValue(26)
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
