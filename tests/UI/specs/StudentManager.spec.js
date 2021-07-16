import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import Global from '../support/Global'
import {Users} from '../fixtures/data'

describe('StudentManager', function () {
    before(function () {
        LoginPage.navigate()
    })
    after(function () {
        Global.logout()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).toBe(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(Users.teacher.credentials)
            HomePage.selectSchoolYear('2021-2022')
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('StudentManager', function () {
            before(function () {
                Global.navigateToStudentManager()
            })
            it('should be able to navigate', function () {
                expect(Global.headerTxt()).toBe(Global.menu.studentmanager)
            })
            it('url is correct', function () {
                expect(browser.getUrl()).toBe(Global.studentManagerUrl())
            })
            describe('Search', function () {
                let searchTerm
                before(function () {
                    searchTerm = 'Ella Ayvazian'
                    Global.searchStudent(searchTerm)
                })
                describe('Results', function () {
                    it('should return one item', function () {
                        expect(Global.searchResultsCount()).toBe(1)
                    })
                    it('should be correct student ', function () {
                        expect(Global.isSearchResultPresent(searchTerm)).toBe(true)
                    })
                })
            })
        })
    })
})
