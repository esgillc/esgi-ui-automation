'use strict'

import Page from '../Page'

class HomePage extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/login'

        this.allClassesCss = '#BoxClasses'
        this.allStudentsCss = '#BoxStudents'

        this.closeModalCss = '.modal-header .close,.fa-close'

        // Remind Password Modal
        this.remindPassEmailAddressCss = '#email-address'
        this.remindPassusernameCss = '#user-name'
        this.remindPassSuccessAlertCss = '.SuccessfulTextEmail.alert.alert-success'
    }

    get allClasses () { return $(this.allClassesCss) }
    get allStudents () { return $(this.allStudentsCss) }

    getClassByName (name) {
        return this.allClasses.$(`span=${name}`)
    }

    clickClassByName (name) {
        this.getClassByName(name).click()
        browser.pause(3000)
    }

    getStudentByName (name) {
        return this.allStudents.$(`span=${name}`)
    }

    clickStudentByName (name) {
        this.allStudents.$('.hierarchyBoxLabel span').click()
        browser.pause(3000)
        // this.getStudentByName(name).click()
    }

    getTestByName (payload) {
        this.clickClassByName(payload.classname)
        this.clickStudentByName(payload.studentname)
        return $(`.test-results-title=${payload.testname}`).$('..')
    }

    getTestObjs (payload) {
        let obj = this.getTestByName(payload)
        return {
            test: obj.$('button=Test'),
            details: obj.$('button=Details'),
            graph: obj.$('.pc'),
            resultlabel: obj.$$('.test-result-stats')[1]
        }
    }

    runTest (payload) {
        this.getTestObjs(payload).test.click()
        browser.pause(1000)
    }

    getGraphByName (payload) {
        return this.getTestObjs(payload).graph
    }

    getGraphClassAttribute (payload) {
        return this.getGraphByName(payload).getAttribute('class')
    }

    graphTextObj (payload) {
        let att = this.getGraphClassAttribute(payload)
        const correct = att.split(' ')[1].split('-')[1]
        const incorrect = 100 - parseInt(correct)
        return {
            correctpercentage: `${correct}%`,
            incorrectpercentage: `${incorrect}%`,
            resultlabel: this.fixGraphResultText(this.getTestByName(payload).$$('.test-result-stats')[1].getText())
        }
    }

    fixGraphResultText (text) {
        const parts = text.split('\n')[1].split('/')
        return `Correct answers: ${parts[0].trim()}/${parts[1].trim()}`
    }

    deleteAllPastTestDetails (payload) {
        this.getTestObjs(payload).details.click()
        if ($('select.form-control option').getText() !== '') {
            $$('select.form-control option').forEach(() => {
                $('button.btn-delete').click()
                browser.pause(3000)
            })
        }
        this.closeModal()
    }

    closeModal () {
        browser.click(this.closeModalCss)
    }

    isModalVisible () {
        return browser.isVisible('.modal-dialog')
    }

    clickLostPasswordLink () {
        this.lostPasswordLink.click()
        browser.pause(2000) // @TODO: wait for modal to popup
    }

    passwordReminder (email) {
        this.clickLostPasswordLink()
        $(this.remindPassEmailAddressCss).setValue(email)
        $('button=Submit').click()
        browser.pause(3000)
    }

    isPasswordReminderSent () {
        return browser.isVisible(this.remindPassSuccessAlertCss)
    }
}

export default new HomePage()
