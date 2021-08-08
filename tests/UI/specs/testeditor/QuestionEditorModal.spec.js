import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'
import CreateTestModal from '../../Components/CreateTestModal'
import QuestionEditorModal from '../../Components/QuestionEditorModal'

// import {Login} from '../fixtures/data'

describe('Question Editor Modal Tests', function () {
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
            describe('And I Click the ADD QUESTION', function () {
                before(function () {
                    CreateTestModal.clickAddQuestion()
                })
                describe('Then the Question Editor modal...', function () {
                    it('should be displayed', function () {
                        expect(QuestionEditorModal.modal).toBeDisplayed()
                    })
                })
            })
        })
    })
})
