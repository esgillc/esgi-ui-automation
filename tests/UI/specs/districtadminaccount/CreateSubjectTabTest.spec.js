import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
// import ManageSubjectsAndTestsPage from '../../pageobjects/ManageSubjectsAndTestsPage'
import {Users} from '../../fixtures/data'

describe('CreateSubjectTab', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.districtadmin.credentials)
    })
    it('should be on Home page', function () {
        expect(HomePage.title).toBe(HomePage.getTitle())
    })
    describe('Subject Tab', function () {
        describe('Add', function () {
            let subjectName
            before(function () {
                subjectName = 'Math Baseline'
                // HomePage.modifySubject()
                // ManageSubjectsAndTestsPage.createSubjectTab(subjectName)
            })
            it('should be added', function () {
                expect(HomePage.isSubjectTabDisplayed(subjectName)).toBe(true)
            })
            describe('Color', function () {
                it('should be purple', function () {
                    expect(HomePage.getSubjectTabColor(subjectName)).to.eql(HomePage.COLORS.districtadmin.subjecttab)
                })
            })
        })
    })
})
