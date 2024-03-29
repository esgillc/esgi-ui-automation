import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users, AutoTestCreation} from '../../fixtures/data'
import AutoTestCreationModal from '../../Components/AutoTestCreationModal'

describe('AutoTestCreationModal', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user7.credentials)
        Global.navigateToTestExplorer()
    })
    it('should be on Test Explorer page', function () {
        expect(AutoTestCreationModal.pageTitle).toBe(AutoTestCreationModal.getPageTitle())
    })
    describe('Given I am on the Test Explorer Page', function () {
        describe('When I CLICK the Auto Test Creation link ', function () {
            before(async function () {
                HomePage.clickAutoTestCreatorLink()
                browser.pause(2000)
            })
            it('Then the Auto Test Creation Modal should open', function () {
                expect(AutoTestCreationModal.isAutoTestCreationModalOpen()).toBe(true)
            })
            it('And Save Button should be displayed', function () {
                expect(AutoTestCreationModal.saveBtn).toBeDisplayed()
            })
            it('And Save Button should be clickable', function () {
                expect(AutoTestCreationModal.saveBtn).toBeClickable()
            })
            it('And Save Button should be enabled', function () {
                expect(AutoTestCreationModal.saveBtn).toBeEnabled()
            })
            it('Then Cancel Button should be displayed', function () {
                expect(AutoTestCreationModal.cancelBtn).toBeDisplayed()
            })
            it('And Cancel Button should be clickable', function () {
                expect(AutoTestCreationModal.cancelBtn).toBeClickable()
            })
            it('And Cancel Button should be enabled', function () {
                expect(AutoTestCreationModal.cancelBtn).toBeEnabled()
            })
            describe('Given I am on the Auto Test Creation Modal', function () {
                describe(`When I expand the topics dropdown`, function () {
                    before(function () {
                        AutoTestCreationModal.expandTestTopicsDropdown()
                    })
                    it('Then the Test Topic dropdown contains all options', function () {
                        expect(AutoTestCreationModal.testTopics).toEqual(AutoTestCreationModal.getDropDownOptions())
                    })
                })
            })
            describe('Given I am on the Auto Test Creation Modal', function () {
                AutoTestCreation.testtopics.forEach(topic => {
                    describe(`When I select the "${topic}" topic`, function () {
                        let metaData
                        let expected
                        before(function () {
                            AutoTestCreationModal.expandTestTopicsDropdown()
                            AutoTestCreationModal.selectItemFromDropDown(topic)
                            metaData = AutoTestCreationModal.getMetaData()
                            if (topic === 'Sight Words') { topic = 'sightwords' }
                            expected = AutoTestCreation.meta[topic.toLowerCase()]
                        })
                        it('Then the Test Topic field is updated correctly', function () {
                            expect(expected.testtopic).toEqual(metaData.testtopic)
                        })
                        it('And the Test Name field is updated correctly', function () {
                            expect(expected.testname).toEqual(metaData.testname)
                        })
                        it('And the Description field is updated correctly', function () {
                            expect(expected.description).toEqual(metaData.description)
                        })
                        it('And the Content Area field is updated correctly', function () {
                            expect(expected.contentarea).toEqual(metaData.contentarea)
                        })
                        it('And the Directions field is updated correctly', function () {
                            expect(expected.directions).toEqual(metaData.directions)
                        })
                    })
                })
            })
            describe('Given I am on the Auto Test Creation Modal', function () {
                describe(`When I enter text into the question text field`, function () {
                    let question = 'Enter text into Question Field'
                    before(function () {
                        AutoTestCreationModal.questionTextField.setValue(question)
                    })
                    it('Then the add question button is displayed', function () {
                        expect(AutoTestCreationModal.addQuestionBtn).toBeDisplayed()
                    })
                    it('And the add question button is active', function () {
                        expect(AutoTestCreationModal.addQuestionBtn).toBeClickable()
                    })
                    it('And the add question button is enabled', function () {
                        expect(AutoTestCreationModal.addQuestionBtn).toBeEnabled()
                    })
                    describe(`Given I click the Add Question buttion`, function () {
                        before(function () {
                            AutoTestCreationModal.addQuestionBtn.click()
                            browser.pause(500)
                        })
                        after(function () {
                            AutoTestCreationModal.deleteLink.click()
                            browser.pause(500)
                        })
                        it('Then the question is added', function () {
                            expect(AutoTestCreationModal.createdQuestion(question)).toBeDisplayed()
                        })
                        it('And the thumbnail view button is displayed', function () {
                            expect(AutoTestCreationModal.thumbnailViewBtn).toBeDisplayed()
                        })
                        it('And the thumbnail view button is active', function () {
                            expect(AutoTestCreationModal.thumbnailViewBtn).toBeClickable()
                        })
                        it('And the thumbnail view button is enabled', function () {
                            expect(AutoTestCreationModal.thumbnailViewBtn).toBeEnabled()
                        })
                    })
                    describe(`Given I enter a list into the questions field`, function () {
                        before(function () {
                            let list = `Question1\nQuestion2\nQuestion3\n`
                            AutoTestCreationModal.questionTextField.setValue(list)
                            browser.pause(500)
                        })
                        after(function () {
                            $$(AutoTestCreationModal.deleteLinkCss).forEach(function (quest) {
                                browser.pause(500)
                                quest.click()
                            })
                        })
                        it('Then the first question is added', function () {
                            expect(AutoTestCreationModal.createdQuestion('Question1')).toBeDisplayed()
                        })
                        it('And the second question is added', function () {
                            expect(AutoTestCreationModal.createdQuestion('Question2')).toBeDisplayed()
                        })
                        it('And the third question is added', function () {
                            expect(AutoTestCreationModal.createdQuestion('Question3')).toBeDisplayed()
                        })
                        it('And the thumbnail view button is displayed', function () {
                            expect(AutoTestCreationModal.thumbnailViewBtn).toBeDisplayed()
                        })
                        it('And the thumbnail view button is active', function () {
                            expect(AutoTestCreationModal.thumbnailViewBtn).toBeClickable()
                        })
                        it('And the thumbnail view button is enabled', function () {
                            expect(AutoTestCreationModal.thumbnailViewBtn).toBeEnabled()
                        })
                        describe(`Given I click the Randomize Link`, function () {
                            let beforeRandomize
                            let afterRandomize
                            before(function () {
                                beforeRandomize = AutoTestCreationModal.getAddedQuestions()
                                AutoTestCreationModal.randomizeQuestions()
                                afterRandomize = AutoTestCreationModal.getAddedQuestions()
                            })
                            it('Then the questions are reordered', function () {
                                expect(AutoTestCreationModal.verifyQuestionsHasBeenReOrdered(beforeRandomize, afterRandomize, true)).toBe(true)
                            })
                        })
                        describe(`Given I drag and drap the questions to reorder`, function () {
                            let beforeRandomize
                            let afterRandomize
                            before(function () {
                                beforeRandomize = AutoTestCreationModal.getAddedQuestions()
                                AutoTestCreationModal.manuallyReOrderQuestions()
                                afterRandomize = AutoTestCreationModal.getAddedQuestions()
                            })
                            it('Then the questions are reordered', function () {
                                expect(AutoTestCreationModal.verifyQuestionsHasBeenReOrdered(beforeRandomize, afterRandomize)).toBe(true)
                            })
                        })
                        describe(`Given I cancel the Randomize action`, function () {
                            let beforeRandomize
                            let afterRandomize
                            before(function () {
                                beforeRandomize = AutoTestCreationModal.getAddedQuestions()
                                AutoTestCreationModal.cancelRandomizeQuestions()
                                browser.pause(500)
                                afterRandomize = AutoTestCreationModal.getAddedQuestions()
                            })
                            describe(`When I click the Clear Button`, function () {
                                it('Then the questions are not reordered', function () {
                                    expect(AutoTestCreationModal.verifyQuestionsHasBeenReOrdered(beforeRandomize, afterRandomize)).toBe(false)
                                })
                            })
                            describe(`Given I click the Clear All Link`, function () {
                                before(function () {
                                    AutoTestCreationModal.clearAllQuestions()
                                })
                                it('Then the first question is cleared', function () {
                                    expect(AutoTestCreationModal.createdQuestion('Question1')).not.toBeDisplayed()
                                })
                                it('And the second question is cleared', function () {
                                    expect(AutoTestCreationModal.createdQuestion('Question2')).not.toBeDisplayed()
                                })
                                it('And the third question is cleared', function () {
                                    expect(AutoTestCreationModal.createdQuestion('Question3')).not.toBeDisplayed()
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
