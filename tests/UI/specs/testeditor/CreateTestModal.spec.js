import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'
import CreateTestModal from '../../Components/CreateTestModal'
import QuestionEditorModal from '../../Components/QuestionEditorModal'
// import {Login} from '../fixtures/data'

describe('CreateTestModal Tests', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user7.credentials)
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
                    expect(CreateTestModal.addQuestionButton).toBeDisplayed()
                })
                it('should be clickable', function () {
                    expect(CreateTestModal.addQuestionButton).toBeClickable()
                })
                it('should be enabled', function () {
                    expect(CreateTestModal.addQuestionButton).toBeEnabled()
                })
            })
            describe('When I CLICK the ADD QUESTION', function () {
                before(function () {
                    CreateTestModal.clickAddQuestion()
                })
                describe('Then the Question Editor modal...', function () {
                    it('Then the question editor modal should be displayed', function () {
                        expect(QuestionEditorModal.modal).toBeDisplayed()
                    })
                    it('And the question editor modal should be enabled', function () {
                        expect(QuestionEditorModal.modal).toBeEnabled()
                    })
                    it('And the question editor modal header should be correct', function () {
                        expect(QuestionEditorModal.modal.$('.title-container')).toHaveText('Add Question')
                    })
                })
            })
        })
    })
})
