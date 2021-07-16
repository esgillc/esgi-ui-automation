import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import Global from '../support/Global'
import {Users} from '../fixtures/data'

describe('TestExplorer', function () {
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
            LoginPage.login(Users.teacher.user5.credentials)
            HomePage.selectSchoolYear('2021-2022')
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('TestExplorer', function () {
            before(function () {
                Global.navigateToTestExplorer()
            })
            it('should be able to navigate', function () {
                expect(Global.headerTxt()).toBe(Global.menu.testexplorer)
            })
            it('url is correct', function () {
                expect(browser.getUrl()).toBe(Global.testExplorerUrl())
            })
            it('paging info is not present', function () {
                expect(Global.getPagingInfo().isDisplayed()).toBe(false)
            })
            describe('Search', function () {
                let searchTerm
                before(function () {
                    searchTerm = '1st Grade Sight Word List A'
                    Global.searchTest(searchTerm)
                })
                it('paging info is not present', function () {
                    expect(Global.getPagingInfo().isDisplayed()).toBe(true)
                })
                describe('Results', function () {
                    let searchResult1
                    before(function () {
                        searchResult1 = Global.testResults()
                    })
                    it('should return one item', function () {
                        expect(Global.isSearchResultEqual(searchResult1, '')).toBe(false)
                    })
                    describe('ClearSearch', function () {
                        let searchResult2
                        before(function () {
                            Global.clearSearchBox()
                            searchResult2 = Global.testResults()
                        })
                        it('should return all items', function () {
                            expect(Global.isSearchResultEqual(searchResult2, searchResult1)).toBe(false)
                        })
                    })
                })
            })
        })
    })
})
