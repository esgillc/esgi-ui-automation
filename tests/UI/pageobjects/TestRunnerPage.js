'use strict'

import Page from './Page'

class TestRunnerPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = ''
        this.headerCss = '.modal .row-header'
        this.directionCss = '.test-runner .direction'
        this.footerCss = '.modal .question-slider-footer'
        this.closeModalCss = '.modal-header .close,.fa-close'
        this.testIntroCss = '.modal .test-intro'
        this.testIntroStartBtnCss = '.test-intro-footer .btn-start'
        this.testIntroCancelBtnCss = '.test-intro-footer .btn-cancel'

        this.controlsObjCss = {
            backcss: '.btn-back',
            skipcss: '.btn-skip',
            yescss: '.btn-yes',
            nocss: '.btn-no',
            currentquestioncss: '.current-question',
            totalquestionscss: '.total-questions',
            notescss: '.comment'
        }
    }

    get header () { return $(this.headerCss) }
    get footer () { return $(this.footerCss) }
    get testIntro () { return $(this.testIntroCss) }

    get headerObj () {
        const obj = this.header
        return {
            studentname: obj.$('.student-name'),
            testname: obj.$('.test-name')
        }
    }

    isTestIntroPresent () {
        return this.testIntro.isDisplayed()
    }

    clickTestIntroStartButton () {
        this.isTestIntroPresent() && browser.click(this.testIntroStartBtnCss)
    }

    get controlsObj () {
        const objCss = this.controlsObjCss
        const obj = this.footer
        return {
            back: obj.$(objCss.backcss),
            skip: obj.$(objCss.skipcss),
            yes: obj.$(objCss.yescss),
            no: obj.$(objCss.nocss),
            currentquestion: obj.$(objCss.currentquestioncss),
            totalquestions: obj.$(objCss.totalquestionscss),
            notes: obj.$(objCss.notescss)

        }
    }

    // @TODO: Move to a modal component
    closeModal () {
        browser.click(this.closeModalCss)
        this.waitForLoadingToComplete()
    }
    addComment (comment) {
        this.footer.$(this.controlsObjCss.comment).setValue(comment)
    }

    clickBack () {
        this.clickControl(this.controlsObjCss.backcss)
    }

    clickSkip () {
        this.clickControl(this.controlsObjCss.skipcss)
    }

    clickYes () {
        this.clickControl(this.controlsObjCss.yescss)
    }

    clickNo () {
        this.clickControl(this.controlsObjCss.nocss)
    }

    clickControl (css) {
        this.footer.$(css).click()
    }

    studentName () {
        return this.headerObj.studentname.getText()
    }

    testName () {
        return this.headerObj.testname.getText()
    }

    runTest (responses) {
        this.clickTestIntroStartButton() // click the start button if test intro exists
        responses.forEach(res => {
            browser.pause(2000)
            res.toLowerCase() === 'yes' ? this.clickYes() : this.clickNo()
        })
        this.closeModal()
    }
}

export default new TestRunnerPage()
