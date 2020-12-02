import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale13TeacherReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach13.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale13TeacherReport-GenerateEMPNReport', () => {
        let action = 'GradeScale13TeacherReport-GenerateEMPNReport'
        before(function () {
            HomePage.clickClassGradesReport()
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
