'use strict'
import Modal from './Modal'
import { sample } from 'underscore'
class MyAccountModal extends Modal {
    constructor () {
        super()
        this.name = 'MyAccountModal'
        this.pageTitle = 'ESGI'
        this.showTrackDateRangeCss = '.show-track-range'
        this.firstnameCss = '#text_input_First_Name'
        this.lastnameCss = '#text_input_Last_Name'
        this.usernameCss = '#text_input_User_Name'
        this.passwordCss = '#text_input_Password'
        this.emailCss = '#text_input_Email'
        this.trackTypeCss = '#text_input_Track_Type'
        this.dropdownsCss = 'select'
    }

    get modal () { return this.firstModal }
    get modalContent () { return this.firstModalContent }
    get header () { return this.modal.$('.title-container') }
    get showTrackDateRange () { return $(this.showTrackDateRangeCss) }

    get firstname () { return $(this.firstnameCss) }
    get lastname () { return $(this.lastnameCss) }
    get username () { return $(this.usernameCss) }
    get password () { return $(this.passwordCss) }
    get email () { return $(this.emailCss) }
    get dropdowns () { return $$(this.dropdownsCss) }

    get trackType () { return $(this.trackTypeCss) }

    clickShowTrackDateRange () {
        this.showTrackDateRange.click()
        browser.pause(500)
    }

    getTrackInfo (track) {
        track = track - 1
        return $$('.track-range-info .period.row')[track].getText().split('\n')
    }

    getDropdowns () {
        return {
            title: this.dropdowns[0],
            state: this.dropdowns[1],
            countries: this.dropdowns[2],
            trackname: this.dropdowns[3]
        }
    }

    getSelectedItemFromDropDown (dropdown) {
        return dropdown.$(`option[value="${dropdown.getValue()}"]`).getText()
    }
    getTitle () {
        return this.getSelectedItemFromDropDown(this.getDropdowns().title)
    }
    getState () {
        return this.getSelectedItemFromDropDown(this.getDropdowns().state)
    }
    getCountry () {
        return this.getSelectedItemFromDropDown(this.getDropdowns().countries)
    }
    getTrackName () {
        return this.getSelectedItemFromDropDown(this.getDropdowns().trackname)
    }

    fillFields (payload) {
        payload.title = sample(['Ms.', 'Mrs.', 'Miss', 'Mrs.', 'Dr.'])
        payload.state = sample(
            [
                'Colorado',
                'Alabama',
                'Ohio',
                'California',
                'Iowa',
                'Florida'
            ]
        )
        const dropdowns = this.getDropdowns()
        dropdowns.title.selectByVisibleText(payload.title)
        dropdowns.state.selectByVisibleText(payload.state)
        // dropdowns.countries.selectByVisibleText(payload.country)
        this.firstname.setValue(payload.firstname)
        this.lastname.setValue(payload.lastname)
        this.email.setValue(payload.email)
        // this.username.setValue(payload.username)
        return payload
    }
}

export default new MyAccountModal()
