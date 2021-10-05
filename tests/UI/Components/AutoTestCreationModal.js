'use strict'
import Modal from './Modal'
import Helper from '../support/Helper'
import _ from 'lodash'

class AutoTestCreationModal extends Modal {
    constructor () {
        super()
        this.name = 'Auto Test Creator'
        this.pageTitle = 'Test Explorer'
        this.testTopicsDropdownCss = '.topic .dropdown-container .text'
        this.testNameCss = '#text_input_form-control'
        this.addedQuestionsCss = '#text_input_question-name-input'
        this.descriptionCss = '.description #text_area_'
        this.questionTextFieldCss = '.question-name .form-control'
        this.addQuestionBtnCss = '.question-adder .btn-link'
        this.questionLinksCss = '.question-container .btn-link'
        this.questionsDragHandlesCss = '.question-row .drag'
        this.directionsCss = '.directions #text_area_'
        this.contentAreaDropdownCss = '.content-area-dropdown-container .text'
        this.colorPickerCss = '.react-color-picker'
        this.colorDialogCss = '.color-dialog'
        this.colorPickerInputCss = '.color-picker-input'
        this.gradeCss = '.grade .checkbox-dropdown'
        this.cancelCss = '.btn-cancel'
        this.saveCss = '.btn-save'
        this.dropdownWrapperCss = '.dropdown-wrapper'
        this.deleteLinkCss = '.delete-link'
        this.thumbnailViewBtnCss = '.btn-thumbnail-view'

        this.addLaterBtnCss = 'footer .btn-primary'
        this.confirmSubjectTabBtnCss = 'footer . btn-secondary'

        // Test Explorer
        this.myTestsCss = '[data-name="My Tests"]'
        this.searchBoxCss = '.search-input'
    }
    isAutoTestCreationModalOpen () {
        return this.modal.isDisplayed()
    }
    get testTopics () {
        return [
            'Computation',
            'Letters',
            'Numbers',
            'Observation',
            'Sight Words',
            'Sounds',
            'Vocabulary'
        ]
    }
    get colorCodes () {
        return {
            gray: {
                r: '205',
                g: '205',
                b: '205'
            },
            green: {
                r: '128',
                g: '203',
                b: '196'
            },
            purple: {
                r: '206',
                g: '147',
                b: '216'
            },
            blue: {
                r: '144',
                g: '202',
                b: '249'
            },
            red: {
                r: '239',
                g: '154',
                b: '154'
            }
        }
    }

    get modal () { return this.firstModal }
    get modalContent () { return this.firstModalContent }
    get header () { return this.modal.$('.title-container') }
    get dropdownWrapper () { return $(this.dropdownWrapperCss) }
    get testTopicsDropdown () { return $(this.testTopicsDropdownCss) }
    get testName () { return $(this.testNameCss) }
    get description () { return $(this.descriptionCss) }
    get directions () { return $(this.directionsCss) }
    get addQuestionBtn () { return $(this.addQuestionBtnCss) }
    get addedQuestions () { return $$(this.addedQuestionsCss) }
    get questionTextField () { return $(this.questionTextFieldCss) }
    get questionLinks () { return $$(this.questionLinksCss) }
    get questionsDragHandles () { return $$(this.questionsDragHandlesCss) }
    get randomizeLink () { return this.questionLinks[0] }
    get clearAllLink () { return this.questionLinks[1] }
    get contentAreaDropdown () { return $(this.contentAreaDropdownCss) }
    get font () { return $$('.dropdown-container')[2] }
    get saveBtn () { return $(this.saveCss) }
    get cancelBtn () { return $(this.cancelCss) }
    get deleteLink () { return $(this.deleteLinkCss) }
    get thumbnailViewBtn () { return $(this.thumbnailViewBtnCss) }

    // Add Subject Modal
    get addLaterBtn () { return $(this.addLaterBtnCss) }
    get confirmSubjectTabBtn () { return $(this.confirmSubjectTabBtnCss) }

    // Test Explorer
    get myTests () { return $(this.myTestsCss) }
    get searchBox () { return $(this.searchBoxCss) }

    getMetaData () {
        return {
            testtopic: this.testTopicsDropdown.getText(),
            testname: this.testName.getValue(),
            description: this.description.getText(),
            contentarea: this.contentAreaDropdown.getText(),
            directions: this.directions.getText()
        }
    }

    getColorEle () {
        const codes = this.colorCodes
        return {
            gray: $(this.getColorCss(codes.gray)),
            green: $(this.getColorCss(codes.green)),
            purple: $(this.getColorCss(codes.purple)),
            blue: $(this.getColorCss(codes.blue)),
            red: $(this.getColorCss(codes.red))
        }
    }

    getColorCss (rgb) {
        rgb = rgb || this.colorCodes.gray
        return `${this.colorDialogCss} [style="background-color: rgb(${rgb.r}, ${rgb.g}, ${rgb.b});"]`
    }

    clickTestTopicsDropdown () {
        this.testTopicsDropdown.click()
        browser.pause(500)
    }
    expandTestTopicsDropdown () {
        this.clickTestTopicsDropdown()
        !this.isTestTopicsDropdownExpanded() && this.clickTestTopicsDropdown()
    }
    getDropDownOptions () {
        return browser.getText(`${this.dropdownWrapperCss} .option`)
    }
    isTestTopicsDropdownExpanded () {
        return this.dropdownWrapper.isDisplayed()
    }
    selectItemFromDropDown (item) {
        $(`.option=${item}`).click()
        browser.pause(1000)
    }
    addAQuestion (question) {
        this.questionTextField.setValue(question)
        browser.pause(500)
        this.addQuestionBtn.isDisplayed() && this.addQuestionBtn.click()
        browser.pause(500)
    }
    isQuestionCreated () {
        this.createdQuestion().isDisplayed()
    }
    createdQuestion (question) {
        return $(`input[value="${question}"]`)
    }
    randomizeQuestions () {
        this.randomizeLink.click()
        browser.pause(250)
        $(`span=Yes, Randomize`).click()
        browser.pause(1000)
    }
    clearAllQuestions () {
        this.clearAllLink.click()
        browser.pause(250)
        $(`span=Yes, Clear All`).click()
        browser.pause(250)
    }
    cancelRandomizeQuestions () {
        this.randomizeLink.click()
        browser.pause(250)
        $(`span=Cancel`).click()
        browser.pause(250)
    }
    clickCancelRandomizeBtn () {
        $(`span=Cancel`).click()
        browser.pause(250)
    }
    clickThumbnailViewBtn () {
        this.thumbnailViewBtn.click()
        browser.pause(1000)
    }
    selectTestTopic (topic = this.testTopics[1]) {
        this.expandTestTopicsDropdown()
        this.selectItemFromDropDown(topic)
    }
    search (item) {
        this.searchBox.setValue(item)
        Helper.waitForLoadingToComplete()
        browser.keys('Enter')
    }
    clickMyTestsLink () {
        this.myTests.click()
        Helper.waitForLoadingToComplete()
    }
    modifyTestName (pre = 'Sample') {
        const originalValue = this.testName.getValue()
        if (originalValue) { pre = originalValue }
        const newValue = `${pre}-${new Date().getTime()}`
        this.testName.setValue(newValue)
        return newValue
    }
    isTestCreated (test) {
        return $(`.name=${test}`).isDisplayed()
    }
    getSubjectTabModalHeaderText (testName) {
        return `Add ${testName} to a Subject Tab`
    }
    getAddedQuestions () {
        const addedQuestions = []
        this.addedQuestions.forEach(function (question) {
            addedQuestions.push(question.getValue())
        })
        return addedQuestions
    }
    verifyQuestionsHasBeenReOrdered (beforeRandomized, afterRandomized, retry) {
        if (retry) {
            let isEqual = _.isEqual(beforeRandomized, afterRandomized)
            if (isEqual) {
                this.randomizeQuestions()
                afterRandomized = this.getAddedQuestions()
            }
        }
        return !_.isEqual(beforeRandomized, afterRandomized)
    }
    manuallyReOrderQuestions () {
        let randomNum = Helper.getRandomNumber(3)
        // eslint-disable-next-line no-const-assign
        if (randomNum === 0) { randomNum = 1 }
        this.questionsDragHandles[0].dragAndDrop(this.questionsDragHandles[randomNum])
        browser.pause(500)
    }
}

export default new AutoTestCreationModal()
