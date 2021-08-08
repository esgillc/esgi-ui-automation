'use strict'
import Modal from './Modal'

class QuestionEditorModal extends Modal {
    constructor () {
        super()
        this.name = 'Question Editor Modal'
        this.pageTitle = 'Test Explorer'
        this.headerCss = `${this.modalCss} .create-title`

        this.imageIconCss = `${this.modalCss} .image-item`
    }

    get modal () { return this.secondModal }
    get modalContent () { return this.secondModalContent }
    get imageIcon () { return $(this.imageIconCss) }
    get header () { return $(this.headerCss) }

    isTestEditorOpen () {
        return this.modal.isDisplayed()
    }
    clickImageIcon () {
        this.imageIcon.click()
        browser.pause(1000)
    }
}

export default new QuestionEditorModal()
