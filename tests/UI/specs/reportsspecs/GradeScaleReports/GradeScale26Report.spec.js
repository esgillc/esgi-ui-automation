import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale26Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach26.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale26Report-VerifyGradeScaleBeforeUpdate_VerifyGradeScaleAfterUpdate', () => {
        let action = 'GradeScale26Report-VerifyGradeScaleBeforeUpdate'
        let action2 = 'GradeScale26Report-VerifyGradeScaleAfterUpdate'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickRunReport()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickReportSettingsEdit()
            ReportsPage.moveGradeLevelRowUpOrDown(1, 'down')
            ReportsPage.clickWizardOk()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
})
