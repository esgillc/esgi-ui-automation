import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale12Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gssadmin12.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale12Report-GenerateCreateYourOwnReport', () => {
        let action = 'GradeScale12Report-GenerateCreateYourOwnReport'
        let payload
        before(function () {
            payload = {
                highestgrade: '1',
                highestgradedesc: '1',
                lowestgrade: '2',
                lowestgradedesc: '2',
                levels: '2'
            }
            HomePage.resetGradeScale('SCHOOL')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickCreateYourOwnReportGS()
            ReportsPage.selectGradeScaleLevels(payload.levels)
            ReportsPage.setGradesScaleInfo(payload)
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('SchA tab')
            ReportsPage.clickContinueSetup()
            ReportsPage.inputEMPNrangeValue(26)
            ReportsPage.clickNextPageConfigBtn()
            ReportsPage.clickWizardOk()
            ReportsPage.clickRunReport()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        after(function () {
            ReportsPage.closeGSReportModal()
        })
    })
})
