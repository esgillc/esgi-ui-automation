import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'
import CreateTestModal from '../../Components/CreateTestModal'
import QuestionEditorModal from '../../Components/QuestionEditorModal'

// import {Login} from '../fixtures/data'

describe('QuestionEditorModalShapesTool - Question Editor Modal Tests', function () {
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
                    describe('When I ClICK the SHAPE icon', function () {
                        before(function () {
                            QuestionEditorModal.clickShapeIcon()
                        })
                        after(function () {
                            QuestionEditorModal.deleteItem()
                        })
                        it('Then a square is added to the default position on the canvas', function () {
                            expect(QuestionEditorModal.canvasShape).toBeDisplayed()
                            expect(QuestionEditorModal.canvasShape).toHaveAttributeContaining('width', '150')
                            expect(QuestionEditorModal.canvasShape).toHaveAttributeContaining('height', '150')
                        })
                        it('And the bold text tool should he displayed', function () {
                            expect(QuestionEditorModal.shapeToolsHeader).toHaveText('STYLES')
                        })
                        it('And the shape fill should he displayed', function () {
                            expect(QuestionEditorModal.shapeFill).toBeDisplayed()
                        })
                        it('And the shape border should he displayed', function () {
                            expect(QuestionEditorModal.shapeBorder).toBeDisplayed()
                        })
                        it('And the shape stroke should he displayed', function () {
                            expect(QuestionEditorModal.stroke).toBeDisplayed()
                        })
                        it('And the stroke width value should he displayed', function () {
                            expect(QuestionEditorModal.strokeWidth).toBeDisplayed()
                        })
                        it('And the shape line arrow up should he displayed', function () {
                            expect(QuestionEditorModal.upArrow).toBeDisplayed()
                        })
                        it('And the shape line arrow down should he displayed', function () {
                            expect(QuestionEditorModal.downArrow).toBeDisplayed()
                        })
                    })
                })
                describe('Given I am on the ADD QUESTION Modal', function () {
                    describe('When I select a Circle from the shape dropdown', function () {
                        before(function () {
                            QuestionEditorModal.selectCirle()
                        })
                        after(function () {
                            QuestionEditorModal.deleteItem()
                        })
                        it('Then a Circle is added to the default position on the canvas', function () {
                            expect(QuestionEditorModal.canvasShape).toBeDisplayed()
                            expect(QuestionEditorModal.canvasShape).toHaveAttributeContaining('cy', '165')
                            expect(QuestionEditorModal.canvasShape).toHaveAttributeContaining('rx', '75')
                        })
                    })
                })
                describe('Given I am on the ADD QUESTION Modal', function () {
                    describe('When I select a Triangle from the shape dropdown', function () {
                        before(function () {
                            QuestionEditorModal.selectTriangle()
                        })
                        after(function () {
                            QuestionEditorModal.deleteItem()
                        })
                        it('Then a Triangle is added to the default position on the canvas', function () {
                            expect(QuestionEditorModal.canvasShape).toBeDisplayed()
                            expect(QuestionEditorModal.canvasShape).toHaveAttributeContaining('d', 'M 355 90 L 430 240 L 280 240 Z')
                        })
                    })
                })
                describe('Given I am on the ADD QUESTION Modal', function () {
                    describe('When I select a Line from the shape dropdown', function () {
                        before(function () {
                            QuestionEditorModal.selectLine()
                        })
                        after(function () {
                            QuestionEditorModal.deleteItem()
                        })
                        it('Then a Line is added to the default position on the canvas', function () {
                            expect(QuestionEditorModal.canvasShape).toHaveAttributeContaining('d', 'M 280 240 L 430 90')
                        })
                    })
                })
                describe('Given I am on the ADD QUESTION Modal', function () {
                    describe('When I select an Arrow from the shape dropdown', function () {
                        before(function () {
                            QuestionEditorModal.selectArrow()
                        })
                        after(function () {
                            QuestionEditorModal.deleteItem()
                        })
                        it('Then an Arrow is added to the default position on the canvas', function () {
                            expect(QuestionEditorModal.canvasShape).toHaveAttributeContaining('d', 'M 280 240 L 418.27 101.73')
                        })
                    })
                })
            })
        })
    })
})
