import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale14AdminReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gssadmin14.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale14AdminReport-GenerateEMPNReport', () => {
        let action = 'GradeScale14AdminReport-GenerateEMPNReport'
        before(function () {
            HomePage.resetGradeScale('SCHOOL')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickExistingEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('SchA Tab')
            ReportsPage.clickContinueSetup()
            ReportsPage.inputEMPNrangeValues(26, 21, 15)
            ReportsPage.clickNextPageConfigBtn()
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
