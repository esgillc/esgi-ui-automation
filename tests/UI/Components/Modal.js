'use strict'

export default class Modal {
    constructor () {
        // super()
        this.name = 'Modal'

        this.modalCss = '.modal-dialog.animate'

        this.modalBodyCss = `${this.modalCss} .modal-body`

        this.modalHeaderSectionCss = `${this.modalCss} .modal-header`
        this.modalHeaderCss = `${this.modalHeaderSectionCss} h3`

        this.modalContentCss = '.modal-content'
        this.closeModalCss = '.modal-header .close,.fa-close,.close-popup,.close:first-child'
    }

    get firstModal () { return $(this.modalCss) }
    get secondModal () { return $$(this.modalCss)[1] }
    get firstModalContent () { return $(this.modalContentCss) }
    get secondModalContent () { return $$(this.modalContentCss)[1] }

    closeModal () {
        browser.click(this.closeModalCss)
        this.waitForLoadingToComplete()
    }

    getPageTitle () {
        return browser.getTitle()
    }
}
