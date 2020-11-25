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
        this.closeModalCss = '.modal-header .close,.fa-close,.close-popup,.close:first-child'
        this.alertModalCss = '.modal-dialog .alert'
        this.modalDropDownsCss = '.modal-dialog select'
        this.reportBackBtnCss = '.modal-dialog.animate .btn-back'
        this.runReportBtnCss = 'span=Run Report'

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
            },
            studentdetail: {
                class: 1,
                student: 2,
                subject: 3
            },
            studentprogress: {
                class: 1,
                student: 2,
                subject: 3
            },
            itemanalysis: {
                class: 0,
                subject: 1,
                test: 2
            },
            piecharts: {
                class: 0,
                student: 1,
                subject: 2
            }
        }
        // Student Detail Report
        this.gradesShowCss = 'input#_includeGradeScore'
        this.displayNotTestedAsZeroSDCss = '#_displayZeroIfNotTested_on'
        this.displayNotTestedAsNTSDCss = '#_displayZeroIfNotTested_off'
        this.carryScoresForwardSDCss = '#_carryScoresForward'

        // Student Progress Report
        this.showGradeColorsCss = '#showGradeColors'
        this.displayResultsAsModeGradeCss = '#displayResultsModeGrade'
        this.displayResultsAsModeScoreCss = '#displayResultsModeScore'
        this.displayResultsAsModePercentCss = '#displayResultsModePercent'
        this.carryScoresForwardSPCss = '#carryScoresForward'

        // Class Totals Report
        this.displayResultsAsScoreCss = '#displayResultsAsScore'
        this.displayResultsAsPercentCss = '#displayResultsAsPercent'
        this.displayNotTestedAsZeroCss = '#zeroDisplayZeroIfNotTestedOption'
        this.displayNotTestedAsNTCss = '#ntDisplayZeroIfNotTestedOption'
        this.currentMarkingCss = '#currentMarkingPeriodOption'
        this.allMarkingPeriodCss = '#allMarkingPeriodOption'
        this.carryScoresForwardCss = '#carryScoresForwardOption'

        // Item Analysis Report
        this.sortOptionLeastKnownCss = '#sortOptionLeastKnown'
        this.sortOptionMostKnownCss = '#sortOptionMostKnown'
        this.sortOptionQuestionOrderCss = '#sortOptionQuestionOrder'
        this.sortOptionAlphabeticalCss = '#sortOptionAlphabetical'
        this.displayNotTestedAsIncorrect = '#displayNotTestedAsIncorrect'

        // Pie Charts Report
        this.showEachStudentCss = '#showEachStudent'
        this.printInColorPieChartCss = '#printInColor'

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

        // Bingo
        this.letsBeginBtnCss = '.bingo-footer .btn'
        this.nextPageBtnCss = '.step-slider .next'
        this.downloadGameBtnCss = 'button=DOWNLOAD GAME'
        this.previewQuestionsBtnCss = 'button=PREVIEW QUESTIONS'
        this.finishBtnCss = '.bingo-footer .finish'
        this.x3cardSizeCss = '#x3cardSize'
        this.x5cardSizeCss = '#x5cardSize'
        this.cardPrint1Css = '#card-print-1'
        this.cardPrintPerPageCss = '#card-print-per-page'
        this.difficultyEasyCss = '#difficulty-easy'
        this.difficultyMediumCss = '#difficulty-medium'
        this.difficultyHardCss = '#difficulty-hard'
        this.playerSelectorInClassroomCss = '#player-selector-in-classroom'
        this.playerSelectorAtHomeCss = '#player-selector-at-student'
        this.controlEndBtnCss = '.subjects-container .end'

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
    get reportModal () { return $$('.modal-content')[1] }
    get reportFirstModal () { return $('.modal-content') }
    get runReportBtn () { return $(this.runReportBtnCss) }
    get letsBeginBtn () { return $(this.letsBeginBtnCss) }
    get nextPageBtn () { return $(this.nextPageBtnCss) }
    get downloadGameBtn () { return $(this.downloadGameBtnCss) }
    get previewQuestionsBtn () { return $(this.previewQuestionsBtnCss) }
    get finishBtn () { return $(this.finishBtnCss) }
    get controlEndBtn () { return $(this.controlEndBtnCss) }

    goBack () {
        this.reportBackBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickLetsBegin () {
        this.letsBeginBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickRunReport () {
        this.runReportBtn.click()
        Helper.waitForLoadingToComplete()
    }

    getReportTitle (name, timeout = 20000) {
        let title
        try {
            this.openReport(name)
            browser.pause(2000)
            title = browser.getText(this.reportTitleCss)
            this.closeModal()
            browser.pause(2000)
        } catch (error) {
            browser.refresh()
            this.waitForLoadingToComplete(null, timeout)
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
            Helper.waitForLoadingToComplete()
        }
    }

    unCheckIncludeInParentLetterCheckbox (checkboxCss) {
        if (this.isIncludeInParentLetterCheckboxChecked(checkboxCss)) {
            this.clickParentLetterCheckbox(checkboxCss)
            Helper.waitForLoadingToComplete()
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

    checkUnCheckGradesShow (bool) {
        this.checkUncheckIncludeParentLetter(this.gradesShowCss, bool)
    }

    checkUnCheckShowColors (bool) {
        this.checkUncheckIncludeParentLetter(this.printInColorCss, bool)
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

    selectItemFromDropDownRunReport (item) {
        const drowpDown = $(this.modalDropDownsCss)
        if (drowpDown.getText('option:checked').toLowerCase() !== item.toLowerCase()) {
            drowpDown.selectByVisibleText(item)
            this.waitForLoadingToComplete()
        }
    }

    selectItemFromSubjectPanel (name) {
        $('.tiles-container').$(`.inner=${name}`).click()
    }

    selectItemFromTestPanel (name) {
        $('.bingo-tests-panel .bingo-tile').$(`.inner=${name}`).click()
    }

    selectStudentDetailsClass (name) {
        this.selectItemFromDropDown(this.dropdowns.studentdetail.class, name)
    }

    selectStudentDetailsStudent (name) {
        this.selectItemFromDropDown(this.dropdowns.studentdetail.student, name)
    }

    // Parent Letter Settings
    selectClass (idx, name) {
        idx = idx || this.dropdowns.parentletter.class
        this.selectItemFromDropDown(idx, name)
    }

    selectStudent (idx, name) {
        idx = idx || this.dropdowns.parentletter.student
        this.selectItemFromDropDown(idx, name)
        this.waitForLoadingToComplete()
    }

    selectSubject (index, name) {
        this.selectItemFromDropDown(index, name)
    }

    selectTest (index, name) {
        this.selectItemFromDropDown(index, name)
    }

    setReportInfo (payload) {
        this.selectClass(null, payload.class)
        this.selectStudent(null, payload.student)
        this.selectSubject(this.dropdowns.parentletter.subject, payload.subject)
    }

    setItemAnalysisInfo (payload) {
        this.selectClass(null, payload.class)
        this.selectSubject(this.dropdowns.itemanalysis.subject, payload.subject)
        this.selectTest(this.dropdowns.itemanalysis.test, payload.test)
    }

    setClassTotalsReportInfo (payload) {
        this.selectClass(null, payload.class)
        this.selectSubject(this.dropdowns.classtotals.subject, payload.subject)
    }

    verifyReport (payload) {
        this.selectClass(null, payload.class)
        this.selectStudent(null, payload.student)
        this.selectSubject(this.dropdowns.parentletter.subject, payload.subject)
        this.checkUnCheckQuestionNotes(payload.questionnotes)
        this.checkUnCheckGrades(payload.grades)
        this.checkUnCheckSkippedQuestions(payload.skippedquestions)
        this.checkUnCheckDate(payload.date)
        this.checkUnCheckMessage(payload.message)
        this.clickShowForStudentBtn()
        this.waitForLoadingToComplete()
    }

        // Item Analysis Report
    verifyItemAnalysisReport (payload) {
        this.setSortOptionAsLeastKnown(payload.leastknown)
        this.setSortOptionAsMostKnown(payload.mostknown)
        this.setSortOptionAsQuestionOrder(payload.questionorder)
        this.setSortOptionAsAlphabetical(payload.alphabetical)
        this.checkUncheckDisplayNotTestedAsIncorrect(payload.nottestedasincorrect)
    }

    setSortOptionAsLeastKnown (bool) {
        bool && Helper.clickElement(this.sortOptionLeastKnownCss)
    }

    setSortOptionAsMostKnown (bool) {
        bool && Helper.clickElement(this.sortOptionMostKnownCss)
    }

    setSortOptionAsQuestionOrder (bool) {
        bool && Helper.clickElement(this.sortOptionQuestionOrderCss)
    }

    setSortOptionAsAlphabetical (bool) {
        bool && Helper.clickElement(this.sortOptionAlphabeticalCss)
    }

    checkUncheckDisplayNotTestedAsIncorrect (bool) {
        this.checkUncheckIncludeParentLetter(this.displayNotTestedAsIncorrect, bool)
    }

    setPieChartsReportInfo (payload) {
        this.selectClass(null, payload.class)
        this.selectStudent(null, payload.student)
        this.selectSubject(this.dropdowns.piecharts.subject, payload.subject)
    }

    setStudentDetailReportInfo (payload) {
        this.selectStudentDetailsClass(payload.class) // refactor
        this.selectStudentDetailsStudent(payload.student) // refactor
        this.selectSubject(this.dropdowns.studentdetail.subject, payload.subject)
    }

    setStudentProgressReportInfo (payload) {
        this.selectClass(this.dropdowns.studentprogress.class, payload.class)
        this.selectStudent(this.dropdowns.studentprogress.student, payload.student)
        this.selectSubject(this.dropdowns.studentprogress.subject, payload.subject)
    }

    selectSubjectRunReport (payload) {
        this.selectItemFromDropDownRunReport(payload.subject)
        this.waitForLoadingToComplete()
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
        this.setDisplayResultsAsScore(payload.score)
        this.setDisplayResultsAsPercent(payload.percent)
        this.setDisplayNotTestedAsZero(payload.zero)
        this.setDisplayNotTestedAsNT(payload.nt)
        this.checkUnCarryScoresForward(payload.carryforward)
        this.setCurrentMarking(payload.currentmarking)
        this.setAllMarkingPeriod(payload.allmarking)
        Helper.waitForLoadingToComplete()
    }

    // Student Details Report
    verifyStudentDetailReport (payload) {
        this.checkUnCheckGradesShow(payload.gradesshow)
        this.setDisplayNotTestedAsZeroSD(payload.zero)
        this.setDisplayNotTestedAsNTSD(payload.nt)
        this.checkUnCarryScoresForwardSD(payload.carryforward)
        this.setCurrentMarking(payload.currentmarking)
        this.setAllMarkingPeriod(payload.allmarking)
        this.checkUnCheckQuestionNotes(payload.questionnotes)
        this.checkUnCheckShowColors(payload.showcolors)
    }

    // Student Progress Report
    verifyStudentProgressReport (payload) {
        this.setDisplayResultsAsModeScore(payload.score)
        this.setDisplayResultsAsModePercent(payload.percent)
        this.setDisplayResultsAsModeGrade(payload.grade)
        this.setDisplayNotTestedAsZero(payload.zero)
        this.setDisplayNotTestedAsNT(payload.nt)
        this.checkUnCarryScoresForwardSP(payload.carryforward)
        if (payload.grade) this.checkUnCheckShowGradeColors(payload.showgradecolors)
    }

    checkUnCheckShowGradeColors (bool) {
        this.checkUncheckIncludeParentLetter(this.showGradeColorsCss, bool)
    }

    setDisplayResultsAsModeScore (bool) {
        bool && Helper.clickElement(this.displayResultsAsModeScoreCss)
    }

    setDisplayResultsAsModePercent (bool) {
        bool && Helper.clickElement(this.displayResultsAsModePercentCss)
    }

    setDisplayResultsAsModeGrade (bool) {
        bool && Helper.clickElement(this.displayResultsAsModeGradeCss)
    }

    checkUnCarryScoresForwardSP (bool) {
        this.checkUncheckIncludeParentLetter(this.carryScoresForwardSPCss, bool)
    }

    checkUnCarryScoresForwardSD (bool) {
        this.checkUncheckIncludeParentLetter(this.carryScoresForwardSDCss, bool)
    }

    setDisplayNotTestedAsZeroSD (bool) {
        bool && Helper.clickElement(this.displayNotTestedAsZeroSDCss)
    }

    setDisplayNotTestedAsNTSD (bool) {
        bool && Helper.clickElement(this.displayNotTestedAsNTSDCss)
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

       // Pie Charts Report
    verifyPieChartsReport (payload) {
        this.checkUncheckShowEachStudent(payload.showeachstudent)
        this.checkUnCheckPrintInColor(payload.printcolor)
    }

    checkUncheckShowEachStudent (bool) {
        this.checkUncheckIncludeParentLetter(this.showEachStudentCss, bool)
    }

    checkUnCheckPrintInColor (bool) {
        this.checkUncheckIncludeParentLetter(this.printInColorPieChartCss, bool)
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

    // Bingo Report
    setBingoPlayers (payload) {
        this.setClass(payload.class)
        this.setGroup(payload.group)
        // uncomment when there's more than one student in the class
        // this.unselectAllStudents()
        // this.setStudent(payload.student)
        this.unselectAllStudents()
        this.setStudent(payload.student)
    }

    setBingoInfo (payload) {
        this.selectSubjectBingo(payload.subject)
        this.selectTestBingo(payload.test)
    }

    verifyBingoCardSizeAndDifficulty (payload) {
        this.setCardSizeAs3x3(payload.cardsize3x3)
        this.setCardSizeAs5x5(payload.cardsize5x5)
        this.setDifficultyAsEasy(payload.easy)
        this.setDifficultyAsMedium(payload.medium)
        this.setDifficultyAsHard(payload.hard)
        if (payload.cardsize3x3) {
            this.setPrint1(payload.print1)
            this.setPrintPerPage(payload.printperpage)
        }
    }

    verifyBingoPlay (payload) {
        this.setPlayAsInClassroom(payload.inclassroom)
        this.setPlayAsAtStudentHome(payload.atstudenthome)
    }

    verifyBingoPreviewQuestions () {
        this.clickPreviewQuestions()
        this.clickDownloadGame()
    }

    verifyBingoDownloadTitle () {
        this.clickPreviewQuestions()
        this.clickDownloadGame()
        browser.pause(7000)
        browser.navigateTo('chrome://downloads/')
        const bingoFileDownload = $('body > downloads-manager').shadow$('#mainContainer').shadow$('.no-outline').shadow$('#file-link')
        return bingoFileDownload.getText()
    }

    selectSubjectBingo (subject) {
        // click button to make subject visible
        this.controlEndBtn.click()
        this.selectItemFromSubjectPanel(subject)
        this.waitForLoadingToComplete()
    }

    selectTestBingo (test) {
        this.selectItemFromTestPanel(test)
        this.waitForLoadingToComplete()
    }
    setClass (classSelected) {
        this.setRadioButtons(classSelected)
    }

    setGroup (group) {
        this.setRadioButtons(group)
    }

    unselectAllStudents () {
        this.setRadioButtons('Select All')
    }

    setStudent (student) {
        this.setRadioButtons(student)
    }

    setCardSizeAs3x3 (bool) {
        bool && Helper.clickElement(this.x3cardSizeCss)
    }

    setPrint1 (bool) {
        bool && Helper.clickElement(this.cardPrint1Css)
    }

    setPrintPerPage (bool) {
        bool && Helper.clickElement(this.cardPrintPerPageCss)
    }

    setCardSizeAs5x5 (bool) {
        bool && Helper.clickElement(this.x5cardSizeCss)
    }

    setDifficultyAsEasy (bool) {
        bool && Helper.clickElement(this.difficultyEasyCss)
    }

    setDifficultyAsMedium (bool) {
        bool && Helper.clickElement(this.difficultyMediumCss)
    }

    setDifficultyAsHard (bool) {
        bool && Helper.clickElement(this.difficultyHardCss)
    }

    setPlayAsInClassroom (bool) {
        bool && Helper.clickElement(this.playerSelectorInClassroomCss)
    }

    setPlayAsAtStudentHome (bool) {
        bool && Helper.clickElement(this.playerSelectorAtHomeCss)
    }

    clickNextPageBtn () {
        this.nextPageBtn.click()
    }

    clickDownloadGame () {
        this.downloadGameBtn.click()
    }

    clickPreviewQuestions () {
        this.previewQuestionsBtn.click()
        this.waitForLoadingToComplete()
    }

    clickFinish () {
        this.finishBtn.click()
    }
}

export default new ReportsPage()
