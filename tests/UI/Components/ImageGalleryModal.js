'use strict'
import Modal from './Modal'

class ImageGalleryModal extends Modal {
    constructor () {
        super()
        this.name = 'Create Test Modal'
        this.pageTitle = 'Test Explorer'
        this.headerCss = `${this.modalCss} h3`
        this.imageLibrariesCss = '.cards-row .lib-card'
        this.foldersCss = '.cards .content'
        this.esgiStockImagesCss = `${this.imageLibrariesCss}.stock`
        this.breadcrumbsCss = '.breadcrumbs .last'

        this.questionPanelCss = '.question-panel'
        this.addQuestionButtonCss = `${this.questionPanelCss} .buttons`
    }

    get modal () { return $$(this.modalCss)[2] }
    get modalContent () { return $$(this.modalContentCss)[2] }

    get header () { return $(this.headerCss) }

    get stockImages () { return $(this.esgiStockImagesCss) }
    get folders () { return $$(this.foldersCss) }
    get breadcrumbs () { return $(this.breadcrumbsCss) }

    clickStockImages () {
        this.stockImages.click()
        browser.pause(1000)
    }
}

export default new ImageGalleryModal()
