import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale14TeacherReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach14.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale14TeacherReport-VerifyWizardComplete_VerifyGSConfig', () => {
        let action = 'GradeScale14TeacherReport-VerifyWizardComplete'
        let action2 = 'GradeScale14TeacherReport-VerifyGSConfig'
        before(function () {
            HomePage.clickClassGradesReport()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickExistingEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickContinueSetup()
            ReportsPage.inputEMPNrangeValues(26, 21, 15)
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
