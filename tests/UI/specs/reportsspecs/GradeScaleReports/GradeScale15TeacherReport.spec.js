import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale15TeacherReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach15.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale15TeacherReport-Verify_Grades_GenerateReport', () => {
        let action = 'GradeScale15TeacherReport-Verify_Grades'
        let action2 = 'GradeScale15TeacherReport-GenerateReport'
        before(function () {
            HomePage.clickClassGradesReport()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickExistingEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickRunReport()
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
