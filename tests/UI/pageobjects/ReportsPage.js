'use strict'

import Page from './Page'
import Helper from '../support/Helper'

class ReportsPage extends Page {
    constructor () {
        super()
        this.url = ''
        this.title = 'Reports'

        this.parentLetterModalCss = '.parent-letters'
        this.reportTitleCss = '.modal-header h3,.report-name,.total-report-name,.gs-header h3'
        this.closeModalCss = '.modal-header .close,.fa-close,.close-popup'
        this.alertModalCss = '.modal-dialog .alert'
        this.modalDropDownsCss = '.modal-dialog select'
        this.reportBackBtnCss = '.modal-dialog.animate .btn-back'

        // Parent Letter

        // Include in Parent Letter section
        this.questionNotesCss = 'input#_questionNotes'
        this.gradeCss = 'input#_gradeScale'
        this.printInColorCss = 'input#_printInColor'
        this.skippedQuesstionsCss = 'input#_notTestedAsIncorrect'
        this.dateCss = 'input#_showSessionDate'
        this.messageCss = 'input#_letterMessage'
        this.numberOfIncorrectItemsToPrintCss = 'td.max-items-cell.table-block'
        this.showForStudentBtnCss = '.btn-blue'
        this.dropdowns = {
            parentletter: {
                class: 0,
                student: 1,
                subject: 2
            },
            classtotals: {
                class: 0,
                subject: 1
            }
        }
        // Class Totals Report
        this.displayResultsAsScoreCss = '#displayResultsAsScore'
        this.displayResultsAsPercentCss = '#displayResultsAsPercent'
        this.displayNotTestedAsZeroCss = '#zeroDisplayZeroIfNotTestedOption'
        this.displayNotTestedAsNTCss = '#ntDisplayZeroIfNotTestedOption'
        this.currentMarkingCss = '#currentMarkingPeriodOption'
        this.allMarkingPeriodCss = '#allMarkingPeriodOption'
        this.carryScoresForwardCss = '#carryScoresForwardOption'

        // Flashcards
        this.flashCardSettings = {
            printout: {
                incorrectonly: 'Incorrect Only',
                incorrectandskipped: 'Incorrect & Skipped',
                fullset: 'Full Set'
            },
            cardsperpage: {
                six: 'Six',
                nine: 'Nine',
                twelve: 'Twelve'
            }
        }

        this.questionIDs = {
            a: '9491190',
            i: '9491182',
            z: '9491172'
        }
    }
    get parentLetterModal () { return $(this.parentLetterModalCss) }
    get alertModal () { return $(this.alertModalCss) }
    get isAlertModalPresent () { return this.alertModal.isDisplayed() }
    get showForStudentBtn () { return $(this.showForStudentBtnCss) }
    get getDropdowns () { return $$(this.modalDropDownsCss) }
    get reportBackBtn () { return $(this.reportBackBtnCss) }
    get reportModal () { return $$('.modal-dialog')[1] }

    goBack () {
        this.reportBackBtn.click()
    }

    getReportTitle (name) {
        let title
        try {
            this.openReport(name)
            browser.pause(2000)
            title = browser.getText(this.reportTitleCss)
            this.closeModal()
            browser.pause(2000)
        } catch (error) {
            browser.refresh()
            this.waitForLoadingToComplete()
            browser.pause(2000)
        }
        return title
    }

    getReportByName (name) {
        return $(`span=${name}`)
    }

    closeModal () {
        browser.click(this.closeModalCss)
        this.waitForLoadingToComplete()
    }

    closeReport () {
        this.closeModal()
    }

    openReport (name) {
        this.getReportByName(name).click()
        this.waitForLoadingToComplete(null, 30000)
        browser.pause(1000)
    }

    isIncludeInParentLetterCheckboxChecked (checkboxCss) {
        let isChecked = true
        try {
            expect($(checkboxCss)).toBeChecked()
        } catch (error) {
            isChecked = false
        }
        return isChecked
    }

    checkIncludeInParentLetterCheckbox (checkboxCss) {
        if (!this.isIncludeInParentLetterCheckboxChecked(checkboxCss)) {
            this.clickParentLetterCheckbox(checkboxCss)
        }
    }

    unCheckIncludeInParentLetterCheckbox (checkboxCss) {
        if (this.isIncludeInParentLetterCheckboxChecked(checkboxCss)) {
            this.clickParentLetterCheckbox(checkboxCss)
        }
    }
    clickParentLetterCheckbox (checkboxCss) {
        (checkboxCss.includes('_letterMessage')) ? $(checkboxCss).$('..').click({ x: -10, y: -10 }) : $(checkboxCss).$('..').click()
    }

    checkUncheckIncludeParentLetter (css, bool) {
        if (bool === '') return
        bool ? this.checkIncludeInParentLetterCheckbox(css) : this.unCheckIncludeInParentLetterCheckbox(css)
    }

    checkUnCheckQuestionNotes (bool) {
        this.checkUncheckIncludeParentLetter(this.questionNotesCss, bool)
    }

    checkUnCheckGrades (bool) {
        this.checkUncheckIncludeParentLetter(this.gradeCss, bool)
    }

    checkUnCheckSkippedQuestions (bool) {
        this.checkUncheckIncludeParentLetter(this.skippedQuesstionsCss, bool)
    }

    checkUnCheckDate (bool) {
        this.checkUncheckIncludeParentLetter(this.dateCss, bool)
    }

    checkUnCheckMessage (bool) {
        this.checkUncheckIncludeParentLetter(this.messageCss, bool)
    }

    clickShowForStudentBtn () {
        this.showForStudentBtn.click()
        Helper.waitForLoadingToComplete()
    }

    selectItemFromDropDown (index, item) {
        const drowpDown = this.getDropdowns[index]
        if (drowpDown.getText('option:checked').toLowerCase() !== item.toLowerCase()) {
            drowpDown.selectByVisibleText(item)
            this.waitForLoadingToComplete()
        }
    }

    // Parent Letter Settings
    selectClass (name) {
        this.selectItemFromDropDown(this.dropdowns.parentletter.class, name)
    }

    selectStudent (name) {
        this.selectItemFromDropDown(this.dropdowns.parentletter.student, name)
        this.waitForLoadingToComplete()
    }

    selectSubject (index, name) {
        this.selectItemFromDropDown(index, name)
    }

    setReportInfo (payload) {
        this.selectClass(payload.class)
        this.selectStudent(payload.student)
        this.selectSubject(this.dropdowns.parentletter.subject, payload.subject)
    }
    verifyReport (payload) {
        this.selectClass(payload.class)
        this.selectStudent(payload.student)
        this.selectSubject(this.dropdowns.parentletter.subject, payload.subject)
        this.checkUnCheckQuestionNotes(payload.questionnotes)
        this.checkUnCheckGrades(payload.grades)
        this.checkUnCheckSkippedQuestions(payload.skippedquestions)
        this.checkUnCheckDate(payload.date)
        this.checkUnCheckMessage(payload.message)
        this.clickShowForStudentBtn()
    }

    generateReport () {
        this.clickShowForStudentBtn()
        browser.pause(5000) // @TODO wait for questions to fully display
    }
    // Class Totals Report

    setDisplayResultsAsScore (bool) {
        bool && Helper.clickElement(this.displayResultsAsScoreCss)
    }

    setDisplayResultsAsPercent (bool) {
        bool && Helper.clickElement(this.displayResultsAsPercentCss)
    }

    setDisplayNotTestedAsZero (bool) {
        bool && Helper.clickElement(this.displayNotTestedAsZeroCss)
    }

    setDisplayNotTestedAsNT (bool) {
        bool && Helper.clickElement(this.displayNotTestedAsNTCss)
    }

    setCurrentMarking (bool) {
        bool && Helper.clickElement(this.currentMarkingCss)
    }

    setAllMarkingPeriod (bool) {
        bool && Helper.clickElement(this.allMarkingPeriodCss)
    }

    checkUnCarryScoresForward (bool) {
        this.checkUncheckIncludeParentLetter(this.carryScoresForwardCss, bool)
    }
    verifyClassTotalsReport (payload) {
        this.selectClass(payload.class)
        this.selectSubject(this.dropdowns.classtotals.subject, payload.subject)

        this.setDisplayResultsAsScore(payload.score)
        this.setDisplayResultsAsPercent(payload.percent)
        this.setDisplayNotTestedAsZero(payload.zero)
        this.setDisplayNotTestedAsNT(payload.nt)
        this.checkUnCarryScoresForward(payload.carryforward)
        this.setCurrentMarking(payload.currentmarking)
        this.setAllMarkingPeriod(payload.allmarking)
    }

    parentLetterReportTemplate () {
        const reportModal = this.reportModal
        const results = reportModal.$('.test-results')
        return {
            title: reportModal.$('.report-name').getText(),
            header: reportModal.$('.parent-letter-header').getText(),
            studentname: reportModal.$('.student-name').getText(),
            letter: reportModal.$('.letter').isDisplayed() && reportModal.$('.letter').getText(),
            legend: reportModal.$('.grade-scale-legend').isDisplayed() && reportModal.$('.grade-scale-legend').getText(),
            results: results.isDisplayed(),
            table: {
                header: {
                    name: results.$('th=Test name').isDisplayed(),
                    session: results.$('th=Test session date').isDisplayed(),
                    grade: results.$('th=Grade').isDisplayed()
                },
                body: results.$('tbody').getText()
            }
        }
    }

    // Flash cards
    setRadioButtons (name) {
        $(`label=${name}`).click()
        browser.pause(1000)
    }

    clickInCorrectOnly () {
        this.setRadioButtons(this.flashCardSettings.printout.incorrectonly)
    }

    clickIncorrectAndSkipped () {
        this.setRadioButtons(this.flashCardSettings.printout.incorrectandskipped)
    }

    clickFullSet () {
        this.setRadioButtons(this.flashCardSettings.printout.fullset)
    }

    clickCardsPerPageSix () {
        this.setRadioButtons(this.flashCardSettings.cardsperpage.six)
    }

    clickCardsPerPageNine () {
        this.setRadioButtons(this.flashCardSettings.cardsperpage.nine)
    }

    clickCardsPerPageTwelve () {
        this.setRadioButtons(this.flashCardSettings.cardsperpage.twelve)
    }

    hideDates () {
        Helper.hideElements()
    }

    getQuestion (id) {
        return $(`.card-image [alt="${id}"]`)
    }

    scrollToQuestion (id) {
        // this.getQuestion(id).scrollIntoView()
        this.getQuestion(id).click()
        this.waitForLoadingToComplete()
        browser.pause(5000)
    }

    scrollToQuestionZ () {
        this.scrollToQuestion(this.questionIDs.z)
    }

    scrollToQuestionA () {
        this.scrollToQuestion(this.questionIDs.a)
    }

    scrollToQuestionI () {
        this.scrollToQuestion(this.questionIDs.i)
    }
}

export default new ReportsPage()
