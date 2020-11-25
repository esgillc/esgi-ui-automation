import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('GradeScaleReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach2.credentials)

        // Set the teacher dropdowns
        // const teacherInfo = {
        //     subject: 'SubjectTabTest001',
        //     class: 'Buckhoff\'s Class'
        // }
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScaleReport-Cancel', () => {
        before(function () {
            HomePage.clickClassGradesReport()
        })
        it(`should have grade scale modal displayed`, function () {
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(true)
        })
        it(`should not have grade scale modal displayed`, function () {
            ReportsPage.cancelGSModal()
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(false)
        })
    })
    describe('GradeScaleReport-Close', () => {
        before(function () {
            HomePage.clickClassGradesReport()
        })
        it(`should have grade scale modal displayed`, function () {
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(true)
        })
        it(`should not have grade scale modal displayed`, function () {
            ReportsPage.closeGSModal()
            expect(ReportsPage.reportFirstModal.isDisplayed()).toBe(false)
        })
    })
})
