import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale15AdminReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gssadmin15.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale15AdminReport-GenerateReport', () => {
        let action = 'GradeScale15AdminReport-GenerateReport'
        before(function () {
            HomePage.resetGradeScale('SCHOOL')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickExistingEMPNReportGS()
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
