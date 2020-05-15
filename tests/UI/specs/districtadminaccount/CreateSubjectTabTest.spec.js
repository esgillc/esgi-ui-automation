import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ManageSubjectsAndTestsPage from '../../pageobjects/ManageSubjectsAndTestsPage'
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
            let payload
            before(function () {
                payload = {
                    subjectname: 'Math Baseline1',
                    testname: 'Drag drop test'

                }
                HomePage.modifySubject()
                ManageSubjectsAndTestsPage.createSubjectTab(payload)
            })
            it('should be added', function () {
                expect(HomePage.isSubjectTabDisplayed(payload.subjectname)).toBe(true)
            })
            describe('Color', function () {
                it('should be purple', function () {
                    expect(HomePage.getSubjectTabColor(payload.subjectname)).toStrictEqual(HomePage.COLORS.districtadmin.subjecttab)
                })
            })
        })
    })
})
