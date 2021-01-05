import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale25Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach25.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale25Report-VerifyGradeScaleBeforeUpdate_VerifyGradeScaleAfterUpdate', () => {
        let action = 'GradeScale25Report-VerifyGradeScaleBeforeUpdate'
        let action2 = 'GradeScale25Report-VerifyGradeScaleAfterUpdate'
        let payload
        before(function () {
            payload = {
                gradescalemodal1: {
                    highestgrade: '1',
                    highestgradedesc: '1',
                    lowestgrade: '3',
                    lowestgradedesc: '3',
                    levels: '2'
                },
                gradescalemodal2: {
                    lowestgrade: '2',
                    lowestgradedesc: '2'
                }
            }
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickCreateYourOwnReportGS()
            ReportsPage.selectGradeScaleLevels(payload.gradescalemodal1.levels)
            ReportsPage.setGradesScaleInfo(payload.gradescalemodal1)
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickRunReport()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickReportSettingsEdit()
            ReportsPage.changeLowestGradeLevel(payload.gradescalemodal2)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
})
