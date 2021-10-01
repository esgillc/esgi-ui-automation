'use strict'
import Modal from './Modal'

class ImageGalleryModal extends Modal {
    constructor () {
        super()
        this.name = 'Create Test Modal'
        this.pageTitle = 'Test Explorer'
        this.headerCss = `${this.modalCss} h3`
        this.imageLibrariesCss = '.cards-row .lib-card'
        this.foldersCss = '.folder-name'
        this.esgiStockImagesCss = `${this.imageLibrariesCss}.stock`
        this.myLibraryImagesCss = `${this.imageLibrariesCss}.my-images-link`
        this.breadcrumbsCss = '.breadcrumbs .last'
        this.folderImagesCss = '.content-container .card'
        this.uploadImageCss = '.corner-btn'

        this.questionPanelCss = '.question-panel'
        this.addQuestionButtonCss = `${this.questionPanelCss} .buttons`
        this.closeBtnCss = '.close-btn'
    }

    get modal () { return $$(this.modalCss)[2] }
    get modalContent () { return $$(this.modalContentCss)[2] }

    get header () { return $(this.headerCss) }
    get closeBtn () { return $(this.closeBtnCss) }
    get thirdModal () { return $$(this.modalCss)[2] }
    get backBtn () { return this.thirdModal.$('.back') }

    get stockImages () { return $(this.esgiStockImagesCss) }
    get myLibraryImages () { return $(this.myLibraryImagesCss) }
    get folders () { return $$(this.foldersCss) }
    get folderImages () { return $$(this.folderImagesCss) }
    get firstFolderImage () { return $(this.folderImagesCss) }
    get breadcrumbs () { return $(this.breadcrumbsCss) }
    get uploadImagesBtn () { return $(this.uploadImageCss) }

    clickStockImages () {
        this.stockImages.click()
        browser.pause(1000)
    }
    clickMyLibraryImages () {
        this.myLibraryImages.click()
        browser.pause(1000)
    }
    close () {
        this.thirdModal.$(this.closeBtnCss).click()
    }
    getFolder (name) {
        return $(`${this.foldersCss}=${name}`)
    }
    clickMathFolder () {
        this.getFolder('Math').click()
    }
    clickFractionalImagesFolder () {
        this.getFolder('Fraction Images').click()
    }
    clickFirstFolderImage () {
        this.firstFolderImage.click()
        browser.pause(3000)
    }
    goBack () {
        this.backBtn.click()
        browser.pause(500)
    }
    clickUploadImageButton () {
        this.uploadImagesBtn.click()
        browser.pause(1000)
    }
}

export default new ImageGalleryModal()
