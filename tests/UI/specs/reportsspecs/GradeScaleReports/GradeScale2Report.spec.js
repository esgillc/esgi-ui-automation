import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale2Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach2.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale2Report-GenerateOSNUReport', () => {
        let action = 'GradeScale2Report-GenerateOSNUReport'
        before(function () {
            HomePage.clickClassGradesReport()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickOSNUReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickRunReport()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        after(function () {
            ReportsPage.closeGSReportModal()
            ReportsPage.cancelGSModal()
            ReportsPage.cancelGSModal()
            ReportsPage.closeGSModal()
        })
    })
})
