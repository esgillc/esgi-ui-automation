import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale21Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach21.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale21Report-VerifyGradeScaleKMath_VerifyGradeScaleKELA', () => {
        let action = 'GradeScale21Report-VerifyGradeScaleKMath'
        let action2 = 'GradeScale21Report-VerifyGradeScaleKELA'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickRunReport()
            ReportsPage.selectSubjectGS('K - Math')
            ReportsPage.clickReportSettingsEdit()
            ReportsPage.createNewGradeScaleOSNU()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.selectSubjectGS('K - ELA')
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
})
