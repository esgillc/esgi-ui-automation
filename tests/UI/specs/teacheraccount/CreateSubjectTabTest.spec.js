import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ManageSubjectsAndTestsPage from '../../pageobjects/ManageSubjectsAndTestsPage'
import {Users} from '../../fixtures/data'

describe('CreateSubjectTab', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.credentials)
    })
    it('should be on Home page', function () {
        expect(HomePage.title).to.equal(HomePage.getTitle())
    })
    describe('Subject Tab', function () {
        describe('Add', function () {
            let payload
            before(function () {
                payload = {
                    subjectname: 'Subject1234',
                    testname: 'Drag drop test'
                }
                HomePage.modifySubject()
                ManageSubjectsAndTestsPage.createSubjectTab(payload)
            })
            it('should be added', function () {
                expect(HomePage.isSubjectTabDisplayed(payload.subjectname)).to.equal(true)
            })
            describe('Color', function () {
                it('should be purple', function () {
                    expect(HomePage.getSubjectTabColor(payload.subjectname)).to.eql(HomePage.COLORS.teacher.subjecttab)
                })
            })
        })
    })
})
