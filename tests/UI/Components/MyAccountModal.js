'use strict'
import Modal from './Modal'

class MyAccountModal extends Modal {
    constructor () {
        super()
        this.name = 'MyAccountModal'
        this.pageTitle = 'ESGI'
        this.showTrackDateRangeCss = '.show-track-range'
    }

    get modal () { return this.firstModal }
    get modalContent () { return this.firstModalContent }
    get header () { return this.modal.$('.title-container') }
    get showTrackDateRange () { return $(this.showTrackDateRangeCss) }

    clickShowTrackDateRange () {
        this.showTrackDateRange.click()
        browser.pause(500)
    }

    getTrackInfo (track) {
        track = track - 1
        return $$('.track-range-info .period.row')[track].getText().split('\n')
    }
}

export default new MyAccountModal()
