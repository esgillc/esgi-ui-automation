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
        this.reportSettingsEditBtnCss = '.settings-cell a'
        this.modalContentCss = '.modal-content'

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

        // Class Grades Report
        this.runReportBtnCss = 'span=Run Report'
        this.continueSetupBtnCss = 'span=Continue Setup'

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

            // Grade Scale
        this.closeGSModalCss = '.modal-dialog .gs-close'
        this.closeGSReportModalCss = '.print-download-buttons .close'
        this.cancelGSModalCss = '.modal-footer .pull-left span'
        this.nextPageGSBtnCss = '.modal-footer .pull-right button'
        this.nextPageConfigBtnCss = '.configure-subject-footer .pull-right'
        this.OSNUReportBtnCss = `h4=O - S - N - U`
        this.EMPNReportBtnCss = `h4=E - M - P - N`
        this.existingEMPNReportBtnCss = '.scroll-content .gs-name'
        this.createYourOwnBtnCss = `h4=Create Your Own`
        this.gradeScaleLevelCss = '.btn=2'
        this.highestGradeRowCss = '.gs-details-row-0'
        this.lowestGradeRowCss = '.gs-details-row-1'
        this.highestGradeNameInputCss = `${this.highestGradeRowCss} .grade-name`
        this.highestGradeDescInputCss = `${this.highestGradeRowCss} [placeholder='e.g. Excellent, Very Good']`
        this.lowestGradeNameInputCss = `${this.lowestGradeRowCss} .grade-name`
        this.lowestGradeDescInputCss = `${this.lowestGradeRowCss} [placeholder='e.g. Excellent, Very Good']`
        this.firstGradeLevelColorCss = '.gs-details-row-0 .btn-colorpicker'
        this.gradeScaleGradeRowCss = '.data-row-right .result-info-cell'
        this.selectTestDropDownCss = '.gs-wizard-configure-tests .select-subjects'
        this.empnErangeFromCss = '//*[@id="modal-inner-control"]/div/div[5]/div/div/div[2]/div/div[2]/div/div/div[2]/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[1]/td/div/div[2]/input'
        this.empnMrangeFromCss = '//*[@id="modal-inner-control"]/div/div[5]/div/div/div[2]/div/div[2]/div/div/div[2]/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[2]/td/div/div[2]/input'
        this.empnPrangeFromCss = '//*[@id="modal-inner-control"]/div/div[5]/div/div/div[2]/div/div[2]/div/div/div[2]/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[3]/td/div/div[2]/input'
        this.empnNrangeToCss = '//*[@id="modal-inner-control"]/div/div[5]/div/div/div[2]/div/div[2]/div/div/div[2]/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[4]/td/div/div[4]/input'
        this.empn1rangeFromCss = '//*[@id="modal-inner-control"]/div/div[5]/div/div/div[2]/div/div[2]/div/div/div[2]/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[1]/td/div/div[2]/input'
        this.empn2rangeToCss = '//*[@id="modal-inner-control"]/div/div[5]/div/div/div[2]/div/div[2]/div/div/div[2]/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[2]/td/div/div[4]/input'
        this.empnEPercentRangeFromCss = '//*[@id="modal-inner-control"]/div/div/div[2]/div/div/div/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[1]/td/div/div[2]/input'
        this.empnMPercentRangeFromCss = '//*[@id="modal-inner-control"]/div/div/div[2]/div/div/div/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[2]/td/div/div[2]/input'
        this.empnPPercentRangeFromCss = '//*[@id="modal-inner-control"]/div/div/div[2]/div/div/div/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[3]/td/div/div[2]/input'
        this.empnNPercentRangeToCss = '//*[@id="modal-inner-control"]/div/div/div[2]/div/div/div/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[4]/td/div/div[4]/input'
        this.empn1PercentRangeFromCss = '//*[@id="modal-inner-control"]/div/div/div[2]/div/div/div/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[1]/td/div/div[2]/input'
        this.empn2PercentRangeToCss = '//*[@id="modal-inner-control"]/div/div/div[2]/div/div/div/div/form/fieldset/div/div/div[2]/div[2]/table/tbody/tr[2]/td/div/div[4]/input'
        this.wizardOkBtnCss = 'span=OK'
        this.sharedRangeBtnCss = '.gs-type-shared-range-button'
        this.defaultPercentBtnCss = '.gs-type-default-percent-button'
        this.useThisScaleBtnCss = '.use-this-btn'
        this.sharedRangeConfigContainerCss = '.range-inner'
        this.percentageConfigContainerCss = '.modal-body'
        this.viewRangeSettingsLinkCss = '.scale-settings'
        this.editScaleBtnCss = '.edit-scale'
        this.editBtnCss = '.edit-button'
        this.okInEditBtnCss = '.pull-right .btn-sm'
        this.createNewGradeScaleLinkCss = '.templates-container .gs-row-create'
        this.dropdownGSCss = '//*[@id="modal-inner-control"]/div/div/div[1]/div[1]/div[3]/select'

        // Chrome
        this.downloadContentDetailsCss = '#details'
        this.detailsTitleCss = 'body/downloads-manager/deep/downloads-item/deep/a[id="file-link"]'

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
    get getDropdownGS () { return $(this.dropdownGSCss) }
    get reportBackBtn () { return $(this.reportBackBtnCss) }
    get reportModal () { return $$('.modal-dialog')[1] }
    get reportEditModalGS () { return $$('.modal-dialog')[2] }
    get reportModalGS () { return $$('.modal-dialog')[3] }
    get reportFirstModal () { return $('.modal-dialog') }
    get firstModalContent () { return $(this.modalContentCss) }
    get secondModalContent () { return $$(this.modalContentCss)[1] }
    get sharedRangeConfigContainer () { return $(this.sharedRangeConfigContainerCss) }
    get percentageConfigContainer () { return $(this.percentageConfigContainerCss) }
    get runReportBtn () { return $(this.runReportBtnCss) }
    get continueSetupBtn () { return $(this.continueSetupBtnCss) }
    get wizardOkBtn () { return $(this.wizardOkBtnCss) }
    get okInEditBtn () { return $$(this.okInEditBtnCss)[1] }
    get letsBeginBtn () { return $(this.letsBeginBtnCss) }
    get nextPageBtn () { return $(this.nextPageBtnCss) }
    get nextPageGSBtn () { return $(this.nextPageGSBtnCss) }
    get nextPageGS2Btn () { return this.reportModalGS.$(this.nextPageGSBtnCss) }
    get nextPageConfigBtn () { return $(this.nextPageConfigBtnCss) }
    get downloadGameBtn () { return $(this.downloadGameBtnCss) }
    get previewQuestionsBtn () { return $(this.previewQuestionsBtnCss) }
    get finishBtn () { return $(this.finishBtnCss) }
    get controlEndBtn () { return $(this.controlEndBtnCss) }
    get OSNUReportBtn () { return $(this.OSNUReportBtnCss) }
    get EMPNReportBtn () { return $(this.EMPNReportBtnCss) }
    get existingEMPNReportBtn () { return $(this.existingEMPNReportBtnCss) }
    get createYourOwnBtn () { return $(this.createYourOwnBtnCss) }
    get OSNUReportBtn2 () { return this.reportModalGS.$(this.OSNUReportBtnCss) }
    get EMPNReportBtn2 () { return this.reportModalGS.$(this.EMPNReportBtnCss) }
    get existingEMPNReportBtn2 () { return this.reportModalGS.$(this.existingEMPNReportBtnCss) }
    get createYourOwnBtn2 () { return this.reportModalGS.$(this.createYourOwnBtnCss) }
    get highestGradeNameInput () { return $(this.highestGradeNameInputCss) }
    get highestGradeDescInput () { return $(this.highestGradeDescInputCss) }
    get lowestGradeNameInput () { return $(this.lowestGradeNameInputCss) }
    get lowestGradeDescInput () { return $(this.lowestGradeDescInputCss) }
    get highestGradeNameInput2 () { return this.reportModalGS.$(this.highestGradeNameInputCss) }
    get highestGradeDescInput2 () { return this.reportModalGS.$(this.highestGradeDescInputCss) }
    get lowestGradeNameInput2 () { return this.reportModalGS.$(this.lowestGradeNameInputCss) }
    get lowestGradeDescInput2 () { return this.reportModalGS.$(this.lowestGradeDescInputCss) }
    get lowestGradeNameInputEditModal () { return this.reportEditModalGS.$(this.lowestGradeNameInputCss) }
    get lowestGradeDescInputEditModal () { return this.reportEditModalGS.$(this.lowestGradeDescInputCss) }
    get uppercaseLettersB () { return $$(this.gradeScaleGradeRowCss)[0] }
    get uppercaseLetters1 () { return $$(this.gradeScaleGradeRowCss)[1] }
    get sharedRangeBtn () { return $(this.sharedRangeBtnCss) }
    get defaultPercentBtn () { return $(this.defaultPercentBtnCss) }
    get useThisScaleBtn () { return $(this.useThisScaleBtnCss) }
    get viewRangeSettingsLink () { return $(this.viewRangeSettingsLinkCss) }
    get editScaleBtn () { return $(this.editScaleBtnCss) }
    get editBtn () { return $(this.editBtnCss) }
    get reportSettingsEditBtn () { return $(this.reportSettingsEditBtnCss) }
    get createNewGradeScaleLink () { return $(this.createNewGradeScaleLinkCss) }

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
        browser.pause(2000)
        // this.waitForLoadingToComplete(null, 20000)
    }

    clickContinueSetup () {
        this.continueSetupBtn.click()
        // this.waitForLoadingToComplete(null, 30000)
    }

    clickWizardOk () {
        this.wizardOkBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickOkInEdit () {
        this.okInEditBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickEdit () {
        this.editBtn.click()
        this.waitForLoadingToComplete()
    }

    clickReportSettingsEdit () {
        this.reportSettingsEditBtn.click()
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

    closeGSModal () {
        browser.click(this.closeGSModalCss)
        browser.pause(2000)
    }

    closeGSReportModal () {
        browser.click(this.closeGSReportModalCss)
        browser.pause(2000)
    }

    cancelGSModal () {
        browser.click(this.cancelGSModalCss)
        browser.pause(2000)
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

    selectItemFromDropDownGS (item) {
        const dropDown = this.getDropdownGS
        if (dropDown.getText('option:checked').toLowerCase() !== item.toLowerCase()) {
            dropDown.selectByVisibleText(item)
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

    selectTestFromDropDown (item) {
        const dropDown = $(this.selectTestDropDownCss)
        if (dropDown.getText('option:checked').toLowerCase() !== item.toLowerCase()) {
            dropDown.selectByVisibleText(item)
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

    selectSubjectGS (name) {
        this.selectItemFromDropDownGS(name)
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

    clickNextPageGSBtn () {
        this.nextPageGSBtn.click()
        browser.pause(2000)
    }

    clickNextPageGS2Btn () {
        this.nextPageGS2Btn.click()
        browser.pause(2000)
    }

    clickNextPageConfigBtn () {
        this.nextPageConfigBtn.click()
        browser.pause(2000)
    }

    clickDownloadGame () {
        this.downloadGameBtn.click()
        this.waitForLoadingToComplete(null, 2000)
    }

    clickPreviewQuestions () {
        this.previewQuestionsBtn.click()
        this.waitForLoadingToComplete()
    }

    clickFinish () {
        this.finishBtn.click()
    }

    // Grade Scale
    clickOSNUReportGS () {
        this.OSNUReportBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickEMPNReportGS () {
        this.EMPNReportBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickExistingEMPNReportGS () {
        this.existingEMPNReportBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickCreateYourOwnReportGS () {
        this.createYourOwnBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickOSNUReportGS2 () {
        this.OSNUReportBtn2.click()
        Helper.waitForLoadingToComplete()
    }

    clickEMPNReportGS2 () {
        this.EMPNReportBtn2.click()
        Helper.waitForLoadingToComplete()
    }

    clickExistingEMPNReportGS2 () {
        this.existingEMPNReportBtn2.click()
        Helper.waitForLoadingToComplete()
    }

    clickCreateYourOwnReportGS2 () {
        this.createYourOwnBtn2.click()
        Helper.waitForLoadingToComplete()
    }

    setGradesScaleInfo (payload) {
        this.inputHighestGradeName(payload.highestgrade)
        this.inputHighestGradeDesc(payload.highestgradedesc)
        this.inputLowestGradeName(payload.lowestgrade)
        this.inputLowestGradeDesc(payload.lowestgradedesc)
    }

    inputHighestGradeName (highestgrade) {
        this.highestGradeNameInput.setValue(highestgrade)
    }

    inputHighestGradeDesc (highestgradedesc) {
        this.highestGradeDescInput.setValue(highestgradedesc)
    }

    inputLowestGradeName (lowestgrade) {
        this.lowestGradeNameInput.setValue(lowestgrade)
    }

    inputLowestGradeDesc (lowestgradedesc) {
        this.lowestGradeDescInput.setValue(lowestgradedesc)
    }

    inputHighestGradeName2 (highestgrade) {
        this.highestGradeNameInput2.setValue(highestgrade)
    }

    inputHighestGradeDesc2 (highestgradedesc) {
        this.highestGradeDescInput2.setValue(highestgradedesc)
    }

    inputLowestGradeName2 (lowestgrade) {
        this.lowestGradeNameInput2.setValue(lowestgrade)
    }

    inputLowestGradeDesc2 (lowestgradedesc) {
        this.lowestGradeDescInput2.setValue(lowestgradedesc)
    }

    getLevelByNumber (number) {
        return $(`.btn=${number}`)
    }

    selectGradeScaleLevels (number) {
        this.getLevelByNumber(number).click()
        Helper.waitForLoadingToComplete()
    }

    clickFirstGradeLevelColor () {
        $(this.firstGradeLevelColorCss).click()
    }

    selectOrangeColorLevel () {
        $(`[data-color="#ffcc80"]`).click()
    }

    changeGradeLevelColorToOrange () {
        this.clickFirstGradeLevelColor()
        browser.pause(1000)
        this.selectOrangeColorLevel(this.firstGradeLevelColorCss)
    }

    getUppercaseLettersRowColor () {
        const uppercaseLettersBColor = this.uppercaseLettersB.getCSSProperty('background-color')
        const uppercaseLetters1Color = this.uppercaseLetters1.getCSSProperty('background-color')

        return {
            uppercaseLettersBColor: uppercaseLettersBColor.parsed.hex,
            uppercaseLetters1Color: uppercaseLetters1Color.parsed.hex
        }
    }

    inputEMPNrangeValues (eValue, mValue, pValue) {
        $(this.empnErangeFromCss).setValue(eValue)
        browser.pause(1000)
        $(this.empnMrangeFromCss).setValue(mValue)
        browser.pause(1000)
        $(this.empnPrangeFromCss).setValue(pValue)
        browser.pause(1000)
        $(this.empnNrangeToCss).click()
        browser.pause(1000)
    }

    inputEMPNpercentValues (eValue, mValue) {
        $(this.empnEPercentRangeFromCss).setValue(eValue)
        browser.pause(1000)
        $(this.empnMPercentRangeFromCss).setValue(mValue)
        browser.pause(1000)
        $(this.empnNPercentRangeToCss).click()
        browser.pause(1000)
    }

    inputEMPNpercentValue (eValue) {
        $(this.empn1PercentRangeFromCss).setValue(eValue)
        browser.pause(1000)
        $(this.empn2PercentRangeToCss).click()
        browser.pause(1000)
    }

    inputEMPNrangeValue (eValue) {
        $(this.empn1rangeFromCss).setValue(eValue)
        browser.pause(1000)
        $(this.empn2rangeToCss).click()
        browser.pause(1000)
    }

    clickSharedRange () {
        this.sharedRangeBtn.click()
    }

    clickDefaultPercent () {
        this.defaultPercentBtn.click()
    }

    clickUseThisScale () {
        this.useThisScaleBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickViewRangeSettings () {
        this.viewRangeSettingsLink.click()
        Helper.waitForLoadingToComplete()
    }

    clickEditScaleConfig () {
        this.editScaleBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickCreateNewGradeScale () {
        this.createNewGradeScaleLink.click()
        Helper.waitForLoadingToComplete()
    }

    createNewGradeScaleOSNU () {
        this.clickCreateNewGradeScale()
        this.clickNextPageGS2Btn()
        this.clickOSNUReportGS2()
        this.clickNextPageGS2Btn()
        this.clickWizardOk()
    }

    createNewGradeScaleEMPN () {
        this.clickCreateNewGradeScale()
        this.clickNextPageGS2Btn()
        this.clickEMPNReportGS2()
        this.clickNextPageGS2Btn()
        this.clickWizardOk()
    }

    createNewGradeScaleCreateYourOwn (payload) {
        this.clickCreateNewGradeScale()
        this.clickNextPageGS2Btn()
        this.clickCreateYourOwnReportGS2()
        this.selectGradeScaleLevels(payload.levels)
        this.inputHighestGradeName2(payload.highestgrade)
        this.inputHighestGradeDesc2(payload.highestgradedesc)
        this.inputLowestGradeName2(payload.lowestgrade)
        this.inputLowestGradeDesc2(payload.lowestgradedesc)
        this.clickNextPageGS2Btn()
        this.clickWizardOk()
    }

    changeLowestGradeLevel (payload) {
        this.lowestGradeNameInputEditModal.setValue(payload.lowestgrade)
        this.lowestGradeDescInputEditModal.setValue(payload.lowestgradedesc)
        this.clickWizardOk()
    }

    moveGradeLevelRowUpOrDown (gradeLevelRow, direction) {
        browser.execute((gradeLevelRow, direction) => {
            $(`.gs-details-row-${gradeLevelRow} .row-caption .drag-handle .fa-arrow-${direction}`).click()
        }, gradeLevelRow, direction)
    }

    downloadPDF (reportName, action) {
        browser.pause(2000)
        $('.download').click()
        browser.pause(2000)
        $$('.download .dropdown-menu')[0].$('li').click()
        Helper.waitForLoadingToComplete()
        browser.pause(3000)
        // eslint-disable-next-line no-undef
        this.renameFile(`${downloadDir}/${reportName}`, `${downloadDir}/${action}.pdf`)
    }
}

export default new ReportsPage()
