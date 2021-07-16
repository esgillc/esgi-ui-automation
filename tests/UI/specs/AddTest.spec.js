import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import {Users} from '../fixtures/data'
import AddTestPage from '../pageobjects/AddTestPage'

describe('Add Test', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user6.credentials)
        HomePage.selectSchoolYear('2021-2022')
    })
    it('should be on Home page', function () {
        expect(HomePage.title).toBe(HomePage.getTitle())
    })
    describe('HomePage - AddTest', function () {
        let payload
        before(function () {
            payload = {
                tab: 'AddTestTab001',
                testname: 'Automation'
            }
            // Clean up before test run. Delete the test if it already exists
            HomePage.deleteTest(payload)
        })
        describe('Before Add', function () {
            it('should not be present', function () {
                expect(HomePage.isTestCardPresent(payload.testname)).toBe(false)
            })
            describe('Add Test', function () {
                before(function () {
                    HomePage.clickAddTestLink(payload.tab)
                    AddTestPage.addTest(payload.testname)
                })
                it('should be present', function () {
                    expect(HomePage.isTestCardPresent(payload.testname)).toBe(true)
                })
                describe('Delete Test', function () {
                    before(function () {
                        HomePage.deleteTest(payload)
                    })
                    it('should not be present', function () {
                        expect(HomePage.isTestCardPresent(payload.testname)).toBe(false)
                    })
                })
            })
        })
    })
})
