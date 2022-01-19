'use strict'

export default class Modal {
    constructor () {
        // super()
        this.name = 'Modal'

        this.modalCss = '.modal-dialog'

        this.modalBodyCss = `${this.modalCss} .modal-body`
        this.modalHeaderSectionCss = `${this.modalCss} .modal-header`
        this.modalHeaderCss = `${this.modalHeaderSectionCss} h3`
        this.cancelCss = '.modal-footer :not(.btn-primary)'
        this.saveCss = '.modal-footer .btn-primary'

        this.modalContentCss = '.modal-content'
        this.closeModalCss = '.modal-header .close,.fa-close,.close-popup,.close:first-child'
    }
    get modals () { return $$(this.modalCss) }
    get firstModal () { return $(this.modalCss) }
    get secondModal () { return this.modals[1] }
    get thirdModal () { return this.modals[2] }
    get modalContents () { return $$(this.modalContentCss) }
    get firstModalContent () { return $(this.modalContentCss) }
    get secondModalContent () { return this.modalContents[1] }
    get thirdModalContent () { return this.modalContents[2] }

    get cancelBtn () { return $(this.cancelCss) }
    get saveBtn () { return $(this.saveCss) }

    cancel () {
        this.cancelBtn.click()
    }

    save () {
        this.saveBtn.click()
    }

    closeModal () {
        browser.click(this.closeModalCss)
        this.waitForLoadingToComplete()
    }

    getPageTitle () {
        return browser.getTitle()
    }
}
