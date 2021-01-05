import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale13AdminReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gssadmin13.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale13AdminReport-GenerateReport', () => {
        let action = 'GradeScale13AdminReport-GenerateReport'
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
