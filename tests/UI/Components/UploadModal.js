'use strict'
import Modal from './Modal'

class UploadModal extends Modal {
    constructor () {
        super()
        this.name = 'Upload Modal'
        this.pageTitle = 'Test Explorer'
        this.imageReadyForUploadCss = '.card img[src*="blob:https"]'
    }

    get modal () { return $$(this.modalCss)[3] }
    get modalContent () { return $$(this.modalContentCss)[3] }
    get header () { return this.modal.$('.title-container') }
    get imageReadyForUpload () { return $(this.imageReadyForUploadCss) }

    async uploadImage () {
        // find selectors
        const input = $('#file-upload')

    // store test file path
        const filePath = '/Users/dan/development/esgi-ui-automation/tests/UI/resources/images/correct-file-type-01.gif' // path.join(__dirname, '../data/chrome.png')

    // use browser.uploadFile to upload the test file
        const remoteFilePath = browser.uploadFile(filePath)
        const inputDiv = $('input[type="file"]')

        // store test file path
        // const filePath = path.join(__dirname, '../data/chrome.png')

        // change display to block from none for the hidden div
        browser.execute(function () {
            document.querySelector('input[type="file"]').setAttribute('class', 'show')
        })

        // wait for div to be displayed
        inputDiv.waitForDisplayed()

        // set file path value in the input field
        inputDiv.setValue(remoteFilePath)
        // submitBtn.click() // click the submit button

        // temporary pause to see if the file got upload successfully

    // access the test page

    // set file path value in the input field
        input.setValue(remoteFilePath)
        browser.pause(3000)
    }
}

export default new UploadModal()
