import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'
import CreateTestModal from '../../Components/CreateTestModal'
import QuestionEditorModal from '../../Components/QuestionEditorModal'

// import {Login} from '../fixtures/data'

describe('QuestionEditorModalTextTool - Question Editor Modal Tests', function () {
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
                it('Then the Question Editor modal should be displayed', function () {
                    expect(QuestionEditorModal.modal).toBeDisplayed()
                })
                describe('Given I am on the ADD QUESTION Modal', function () {
                    describe('When I ClICK the TEXT icon', function () {
                        before(function () {
                            QuestionEditorModal.clickTextIcon()
                        })
                        it('Then the Text Tool box container should he displayed', function () {
                            expect(QuestionEditorModal.textToolsContainer).toBeDisplayed()
                        })
                        it('And the Text Tool header should he displayed', function () {
                            expect(QuestionEditorModal.textToolsHeader).toBeDisplayed()
                        })
                        it('And the font family dropdown should he displayed', function () {
                            expect(QuestionEditorModal.fontFamilyDropDown).toBeDisplayed()
                        })
                        it('And the font size dropdown should he displayed', function () {
                            expect(QuestionEditorModal.fontSizeDropDown).toBeDisplayed()
                        })
                        it('And the bold text tool should he displayed', function () {
                            expect(QuestionEditorModal.bold).toBeDisplayed()
                        })
                        it('And the italics text tool should he displayed', function () {
                            expect(QuestionEditorModal.italics).toBeDisplayed()
                        })
                        it('And the underline text tool should he displayed', function () {
                            expect(QuestionEditorModal.underline).toBeDisplayed()
                        })
                        it('And the align left text tool should he displayed', function () {
                            expect(QuestionEditorModal.alignLeft).toBeDisplayed()
                        })
                        it('And the align right text tool should he displayed', function () {
                            expect(QuestionEditorModal.alignRight).toBeDisplayed()
                        })
                        it('And the center text tool should he displayed', function () {
                            expect(QuestionEditorModal.center).toBeDisplayed()
                        })
                        it('And the color text tool should he displayed', function () {
                            expect(QuestionEditorModal.colorTool).toBeDisplayed()
                        })
                        it('And the text is displayed on the canvas', function () {
                            expect(QuestionEditorModal.canvasText).toBeDisplayed()
                        })
                        describe('Given I have a text field on the canvas', function () {
                            describe('When I enter a text', function () {
                                let text
                                before(function () {
                                    text = 'Text on the canvas'
                                    QuestionEditorModal.addTextToCanvas(text)
                                })
                                it('Then the text should be shown on the canvas', function () {
                                    expect(QuestionEditorModal.canvasText).toHaveText(text)
                                })
                                describe('Given I have a text on the canvas', function () {
                                    describe('When I change the font type to Arial', function () {
                                        let fontType
                                        before(function () {
                                            fontType = 'Arial'
                                            QuestionEditorModal.selectFontType(fontType)
                                        })
                                        it('Then the font type of the text should be changed to Arial', function () {
                                            expect(QuestionEditorModal.canvasText).toHaveAttributeContaining('style', 'font-family: Arial')
                                        })
                                    })
                                })
                                describe('Given I have a text on the canvas', function () {
                                    describe('When I change the font size to 24', function () {
                                        let fontSize
                                        before(function () {
                                            fontSize = '24'
                                            QuestionEditorModal.selectFontSize(fontSize)
                                        })
                                        it('Then the font size of the text should be changed to 24', function () {
                                            expect(QuestionEditorModal.canvasText).toHaveAttributeContaining('style', 'font-size: 32px')
                                        })
                                    })
                                })
                                describe('Given I have a text on the canvas', function () {
                                    describe('When I click the bold tool', function () {
                                        before(function () {
                                            QuestionEditorModal.bold.click()
                                        })
                                        it('Then the text should be bold', function () {
                                            expect(QuestionEditorModal.canvasText).toHaveAttributeContaining('style', 'font-weight: bold')
                                        })
                                    })
                                })
                                describe('Given I have a text on the canvas', function () {
                                    describe('When I click the italize tool', function () {
                                        before(function () {
                                            QuestionEditorModal.italics.click()
                                        })
                                        it('Then the text should be italized', function () {
                                            expect(QuestionEditorModal.canvasText).toHaveAttributeContaining('style', 'font-style: italic')
                                        })
                                    })
                                })
                                describe('Given I have a text on the canvas', function () {
                                    describe('When I select a different color from the color picker', function () {
                                        let red = QuestionEditorModal.sampleColors.red
                                        before(function () {
                                            QuestionEditorModal.changeTextColor(red.hex)
                                        })
                                        it('Then the color picker should he displayed', function () {
                                            expect(QuestionEditorModal.colorPicker).toBeDisplayed()
                                        })
                                        it('And the color of the text is updated with the new color', function () {
                                            expect(QuestionEditorModal.canvasText).toHaveAttributeContaining('style', `color: ${red.rgb}`)
                                        })
                                    })
                                })
                                describe.only('Given I have a text on the canvas', function () {
                                    describe('When I click the trash can on the text', function () {
                                        before(function () {
                                            QuestionEditorModal.delete.click()
                                            browser.pause(500)
                                        })
                                        it('Then the text is deleted', function () {
                                            expect(QuestionEditorModal.canvasText).not.toBeDisplayed()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
