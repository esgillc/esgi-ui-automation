import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale11Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gssadmin11.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale11Report-VerifyWizardComplete_VerifyGSConfig', () => {
        let action = 'GradeScale11Report-VerifyWizardComplete'
        let action2 = 'GradeScale11Report-VerifyGSConfig'
        before(function () {
            HomePage.resetGradeScale('SCHOOL')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('Scha Tab')
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
