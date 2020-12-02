import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale5Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsadmin9.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale9Report-GenerateEMPNReport', () => {
        let action = 'GradeScale9Report-GenerateEMPNReport'
        before(function () {
            HomePage.clickDistrictGradesReport()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickEMPNReportGS()
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
