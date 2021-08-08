'use strict'
import Modal from './Modal'

class CreateTestModal extends Modal {
    constructor () {
        super()
        this.name = 'Create Test Modal'
        this.pageTitle = 'Test Explorer'
        this.headerCss = `${this.modalCss} .create-title`

        this.questionPanelCss = '.question-panel'
        this.addQuestionButtonCss = `${this.questionPanelCss} .buttons`
    }

    get modal () { return this.firstModal }
    get modalContent () { return this.firstModalContent }
    get addQuestionButton () { return $(this.addQuestionButtonCss) }
    get header () { return $(this.headerCss) }

    isTestEditorOpen () {
        return this.modal.isDisplayed()
    }
    clickAddQuestion () {
        this.addQuestionButton.click()
        browser.pause(1000)
    }
}

export default new CreateTestModal()
