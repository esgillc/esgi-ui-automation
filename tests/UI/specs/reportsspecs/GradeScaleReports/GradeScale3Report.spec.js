import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale3Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach3.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale3Report-CreateYourOwn_Verify_Grades', () => {
        let action = 'GradeScale3Report-CreateYourOwn'
        let action2 = 'GradeScale3Report-Verify_Grades'
        let payload
        before(function () {
            payload = {
                highestgrade: 'A',
                highestgradedesc: 'A',
                lowestgrade: 'S',
                lowestgradedesc: 'S',
                levels: '2'
            }
            HomePage.clickClassGradesReport()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickCreateYourOwnReportGS()
            ReportsPage.selectGradeScaleLevels(payload.levels)
            ReportsPage.setGradesScaleInfo(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageGSBtn()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
            ReportsPage.cancelGSModal()
        })
        after(function () {
            ReportsPage.cancelGSModal()
            ReportsPage.closeGSModal()
        })
    })
})
