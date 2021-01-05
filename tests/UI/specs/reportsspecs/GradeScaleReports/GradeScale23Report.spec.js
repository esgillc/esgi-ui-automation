import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale23Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach23.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale23Report-VerifyGradeScaleKMath_VerifyGradeScaleKELA', () => {
        let action = 'GradeScale23Report-VerifyGradeScaleKMath'
        let action2 = 'GradeScale23Report-VerifyGradeScaleKELA'
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
            ReportsPage.clickEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickRunReport()
            ReportsPage.selectSubjectGS('K - Math')
            ReportsPage.clickReportSettingsEdit()
            ReportsPage.createNewGradeScaleCreateYourOwn(payload)
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
