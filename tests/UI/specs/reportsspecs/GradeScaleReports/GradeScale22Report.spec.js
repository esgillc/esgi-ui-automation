import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale22Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach22.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale22Report-VerifyGradeScaleKMath_VerifyGradeScaleKELA', () => {
        let action = 'GradeScale22Report-VerifyGradeScaleKMath'
        let action2 = 'GradeScale22Report-VerifyGradeScaleKELA'
        let payload
        before(function () {
            payload = {
                gradescalemodal1: {
                    highestgrade: '1',
                    highestgradedesc: '1',
                    lowestgrade: '2',
                    lowestgradedesc: '2',
                    levels: '2'
                },
                gradescalemodal2: {
                    highestgrade: 'A',
                    highestgradedesc: 'A',
                    lowestgrade: 'B',
                    lowestgradedesc: 'B',
                    levels: '2'
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
            ReportsPage.selectSubjectGS('K - Math')
            ReportsPage.clickReportSettingsEdit()
            ReportsPage.createNewGradeScaleCreateYourOwn(payload.gradescalemodal2)
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
