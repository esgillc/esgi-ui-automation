'use strict'

import Page from './Page'
import Helper from '../support/Helper'

class TestResultsPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/esgi#'
        this.modalCss = '.modal'
        this.closeModalCss = '.modal-header .close,.fa-close'

        this.successlabelCss = '.success-label'
        // @TODO: extract into a graph component
        this.graphObjCss = {
            correctpiecss: `${this.modalCss} .highcharts-series-group path[fill="#00BF96"]`,
            correctpercentagecss: '.highcharts-label.highcharts-data-label:nth-child(1) tspan:nth-child(2)',
            incorrectpercentagecss: '.highcharts-label.highcharts-data-label:nth-child(2) tspan:nth-child(2)',
            resultlabelcss: '.main .data'
        }
    }
    get successlabel () { return $(this.successlabelCss) }

    closeModal () {
        browser.click(this.closeModalCss)
        browser.pause(1000)
    }
    graphObj () {
        const objCss = this.graphObjCss
        return {
            correctpie: $(objCss.correctpiecss),
            correctpercentage: $(objCss.correctpercentagecss),
            incorrectpercentage: $(objCss.incorrectpercentagecss),
            resultlabel: $(objCss.resultlabelcss)
        }
    }

    graphTextObj () {
        const obj = this.graphObj()
        return {
            correctpercentage: Helper.getText(obj.correctpercentage),
            incorrectpercentage: Helper.getText(obj.incorrectpercentage),
            resultlabel: obj.resultlabel.getText()
        }
    }

    isSuccessModalPresent () {
        return this.successlabel.isDisplayed()
    }
}

export default new TestResultsPage()
