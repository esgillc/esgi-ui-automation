import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import {Users} from '../fixtures/data'
import AddTestPage from '../pageobjects/AddTestPage'

describe('Add Test', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.credentials)
    })
    it('should be on Home page', function () {
        expect(HomePage.title).to.equal(HomePage.getTitle())
    })
    describe('HomePage - AddTest', function () {
        let testName
        before(function () {
            testName = 'Identify Shapes as Flat or 3D (K.G.3)'
            // Clean up before test run. Delete the test if it already exists
            HomePage.deleteTest(testName)
        })
        describe('Before Add', function () {
            it('should not be present', function () {
                expect(HomePage.isTestCardPresent(testName)).to.equal(false)
            })
            describe('Add Test', function () {
                before(function () {
                    HomePage.clickAddTestLink()
                    AddTestPage.addTest(testName)
                })
                it('should be present', function () {
                    expect(HomePage.isTestCardPresent(testName)).to.equal(true)
                })
                describe('Delete Test', function () {
                    before(function () {
                        HomePage.deleteTest(testName)
                    })
                    it('should not be present', function () {
                        expect(HomePage.isTestCardPresent(testName)).to.equal(false)
                    })
                })
            })
        })
    })
})
