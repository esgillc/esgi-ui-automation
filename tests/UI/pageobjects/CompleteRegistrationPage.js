'use strict'

import Page from './Page'
import Helper from '../support/Helper'

class CompleteRegistrationPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI - One-on-one Assessments Made Easy'
        this.url = '/complete-registration'
        this.firstNameCss = '#firstname'
        this.lastNameCss = '#lastname'
        this.countryDropdownCss = 'select#country'
        this.stateDropdownCss = 'select#state'
        this.schoolNameCss = '#school'
        this.doneButtonCss = 'button.next-btn'

        this.loginButtonCss = '.login-button'

        this.gradeLevels = {
            tk: 'TK',
            prek: 'Pre-K',
            kindergarten: 'K',
            first: '1',
            second: '2',
            thirdplus: '3',
            other: 'Other'
        }
    }

    get firstName () { return $(this.firstNameCss) }
    get lastName () { return $(this.lastNameCss) }
    get countryDropdown () { return $(this.countryDropdownCss) }
    get stateDropdown () { return $(this.stateDropdownCss) }
    get schoolName () { return $(this.schoolNameCss) }
    get doneButton () { return $(this.doneButtonCss) }

    gradeLevelCheckbox (level) {
        return $(`input[value=${level}]`)
    }

    clickGradeLevelCheckbox (level) {
        this.gradeLevelCheckbox(level).click()
    }

    kindergartenCheckbox () {
        return this.gradeLevelCheckbox(this.gradeLevels.kindergarten)
    }

    selectCountry (name) {
        this.countryDropdown.selectByVisibleText(name)
        browser.pause(500)
    }

    selectState (name) {
        this.stateDropdown.selectByVisibleText(name)
        browser.pause(500)
        Helper.triggerChange(this.stateDropdownCss)
    }

    setSchool (name) {
        const prefix = name.slice(0, 8)
        this.schoolName.setValue(prefix)
        browser.pause(500)
        $(`.dropdown-item=${name}`).click()
        browser.pause(500)
    }

    completeRegistration (payload) {
        this.firstName.setValue(payload.firstname)
        this.lastName.setValue(payload.lastname)
        this.selectCountry(payload.country)
        this.selectState(payload.state)
        this.setSchool(payload.school)
        this.clickGradeLevelCheckbox(payload.gradelevel)
        this.doneButton.click()
        this.waitForLoadingToComplete()
        Helper.handleInitialModals()
    }
}

export default new CompleteRegistrationPage()
