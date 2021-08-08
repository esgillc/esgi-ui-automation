import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'
import CreateTestModal from '../../Components/CreateTestModal'
// import {Login} from '../fixtures/data'

describe('Create Test Modal Tests', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user6.credentials)
        Global.navigateToTestExplorer()
    })
    it('should be on Test Explorer page', function () {
        expect(CreateTestModal.pageTitle).toBe(CreateTestModal.getPageTitle())
    })
    describe('Given I am on the Test Explorer Page', function () {
        describe('When I CLICK the CREATE TEST link ', function () {
            before(async function () {
                HomePage.clickCreateTestLink()
                browser.pause(2000)
            })
            describe('Then the Create Test Modal...', function () {
                it('should be open', function () {
                    expect(CreateTestModal.isTestEditorOpen()).toBe(true)
                })
                it('should be displayed', function () {
                    expect(CreateTestModal.modal).toBeDisplayed()
                })
            })
            describe('Then Question Button...', function () {
                it('should be displayed', function () {
                    expect(CreateTestModal.questionButton).toBeDisplayed()
                })
                it('should be clickable', function () {
                    expect(CreateTestModal.questionButton).toBeClickable()
                })
                it('should be enabled', function () {
                    expect(CreateTestModal.questionButton).toBeEnabled()
                })
            })
            describe('When I CLICK the ADD QUESTION', function () {
                before(function () {
                    CreateTestModal.clickAddQuestion()
                })
                describe('Then the Question Editor modal...', function () {
                    it('should be displayed', function () {
                        expect(CreateTestModal.questionButton).toBeDisplayed()
                    })
                })
            })
        })
    })
})
