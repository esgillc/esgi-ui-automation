import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale19Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach19.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale19Report-GenerateReport_VerifyGradeScaleRange', () => {
        let action = 'GradeScale19TeacherReport-GenerateReport'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickEditScaleConfig()
            ReportsPage.clickDefaultPercent()
            ReportsPage.clickEdit()
            ReportsPage.clickOkInEdit()
            ReportsPage.inputEMPNpercentValues(85, 75)
        })
        it('should save percentages in config page', function () {
            browser.saveElement(ReportsPage.percentageConfigContainer, 'PercentagesConfigContainerGS19', {})
            ReportsPage.clickWizardOk()
        })
        it(`${action} - should be correct`, function () {
            ReportsPage.clickRunReport()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it('should show generated report range settings match percentages in config page', function () {
            ReportsPage.clickViewRangeSettings()
            expect(browser.checkElement(ReportsPage.percentageConfigContainer, 'PercentagesConfigContainerGS19', {})).toEqual(0)
        })
    })
})
