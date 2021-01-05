import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale16AdminReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gssadmin16.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale16AdminReport-GenerateReport', () => {
        let action = 'GradeScale16AdminReport-GenerateReport'
        before(function () {
            HomePage.resetGradeScale('SCHOOL')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickExistingEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('SchA Tab')
            ReportsPage.clickContinueSetup()
            ReportsPage.inputEMPNrangeValue(26)
            ReportsPage.clickNextPageConfigBtn()
            ReportsPage.clickRunReport()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        after(function () {
            ReportsPage.closeGSReportModal()
            ReportsPage.cancelGSModal()
            ReportsPage.cancelGSModal()
            ReportsPage.closeGSModal()
        })
    })
})
