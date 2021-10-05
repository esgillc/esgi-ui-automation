import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'
import AutoTestCreationModal from '../../Components/AutoTestCreationModal'

describe('SaveAndCloseToCreateTest', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user5.credentials)
        Global.navigateToTestExplorer()
        HomePage.clickAutoTestCreatorLink()
    })
    it('should be on Test Explorer page', function () {
        expect(AutoTestCreationModal.pageTitle).toBe(AutoTestCreationModal.getPageTitle())
    })
    describe('Given I am on the auto test creator modal', function () {
        describe('When I enter a question', function () {
            const question = 'What letter is this?'
            let testName
            before(async function () {
                AutoTestCreationModal.selectTestTopic()
                testName = AutoTestCreationModal.modifyTestName()
                AutoTestCreationModal.addAQuestion(question)
            })
            it('Then the Save and Close Button should be displayed', function () {
                expect(AutoTestCreationModal.saveBtn).toBeDisplayed()
            })
            it('And the Save and Close Button should be clickable', function () {
                expect(AutoTestCreationModal.saveBtn).toBeClickable()
            })
            it('And the Save and Close Button should be', function () {
                expect(AutoTestCreationModal.saveBtn).toBeEnabled()
            })
            describe('When I click the Save and Close button', function () {
                before(async function () {
                    AutoTestCreationModal.saveBtn.click()
                    browser.pause(500)
                })
                it('Then the Add to Subject Modal header should be correct', function () {
                    expect(AutoTestCreationModal.header).toHaveText(AutoTestCreationModal.getSubjectTabModalHeaderText(testName))
                })
                it('And the Add to Subject Modal should be displayed', function () {
                    expect(AutoTestCreationModal.modal).toBeDisplayed()
                })
                it('And the Add to Subject Modal should be clickable', function () {
                    expect(AutoTestCreationModal.modal).toBeClickable()
                })
                it('And the Add to Subject Modal should be enabled', function () {
                    expect(AutoTestCreationModal.modal).toBeEnabled()
                })
                describe(`When I click the ADD Later button`, function () {
                    before(function () {
                        AutoTestCreationModal.addLaterBtn.click()
                        browser.pause(500)
                    })
                    describe(`And search for tests in MyTests`, function () {
                        let createdTestEle
                        before(function () {
                            createdTestEle = $(`.name=${testName}`)
                            AutoTestCreationModal.clickMyTestsLink()
                            AutoTestCreationModal.search(testName)
                        })
                        it('Then the test is created', function () {
                            expect(AutoTestCreationModal.isTestCreated(testName)).toBe(true)
                        })
                        it('And the test is displayed', function () {
                            expect(createdTestEle).toBeDisplayed()
                        })
                        it('And the test is active', function () {
                            expect(createdTestEle).toBeClickable()
                        })
                        it('And the test is enabled', function () {
                            expect(createdTestEle).toBeEnabled()
                        })
                    })
                })
            })
        })
    })
})
