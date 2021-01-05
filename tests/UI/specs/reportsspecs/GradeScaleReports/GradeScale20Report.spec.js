import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale20Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach20.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale20Report-GenerateReport_VerifyGradeScaleRange', () => {
        let action = 'GradeScale20TeacherReport-GenerateReport'
        let payload
        before(function () {
            payload = {
                highestgrade: '1',
                highestgradedesc: '1',
                lowestgrade: '2',
                lowestgradedesc: '2',
                levels: '2'
            }
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickCreateYourOwnReportGS()
            ReportsPage.selectGradeScaleLevels(payload.levels)
            ReportsPage.setGradesScaleInfo(payload)
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickEditScaleConfig()
            ReportsPage.clickDefaultPercent()
            ReportsPage.clickEdit()
            ReportsPage.clickOkInEdit()
            ReportsPage.inputEMPNpercentValue(75)
        })
        it('should save percentages in config page', function () {
            browser.saveElement(ReportsPage.percentageConfigContainer, 'PercentagesConfigContainerGS20', {})
            ReportsPage.clickWizardOk()
        })
        it(`${action} - should be correct`, function () {
            ReportsPage.clickRunReport()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it('should show generated report range settings match percentages in config page', function () {
            ReportsPage.clickViewRangeSettings()
            expect(browser.checkElement(ReportsPage.percentageConfigContainer, 'PercentagesConfigContainerGS20', {})).toEqual(0)
        })
    })
})
