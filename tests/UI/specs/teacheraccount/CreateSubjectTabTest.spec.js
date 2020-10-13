import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ManageSubjectsAndTestsPage from '../../pageobjects/ManageSubjectsAndTestsPage'
import {Users} from '../../fixtures/data'

describe('CreateSubjectTabTest', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    it('should be on Home page', function () {
        expect(HomePage.title).toBe(HomePage.getTitle())
    })
    describe('Subject Tab', function () {
        let payload
        before(function () {
            payload = {
                subjectname: 'Teacher0001',
                testname: 'Nouns - Identify'
            }
            HomePage.modifySubject()
            ManageSubjectsAndTestsPage.deleteSubjectTab(payload.subjectname)
        })
        describe('Add', function () {
            before(function () {
                HomePage.modifySubject()
                ManageSubjectsAndTestsPage.createSubjectTab(payload)
            })
            it('should be added', function () {
                expect(HomePage.isSubjectTabDisplayed(payload.subjectname)).toBe(true)
            })
            describe('Color', function () {
                it('should be gray', function () {
                    expect(HomePage.getSubjectTabColor(payload.subjectname)).toStrictEqual(HomePage.COLORS.teacher.subjecttab)
                })
            })
        })
    })
})
