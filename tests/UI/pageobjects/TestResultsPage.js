'use strict'

import Page from './Page'

class TestResultsPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/esgi#'
        this.modalCss = '.modal'
        this.closeModalCss = '.modal-header .close,.fa-close'
        // @TODO: extract into a graph component
        this.graphObjCss = {
            correctpiecss: `${this.modalCss} .highcharts-series-group path[fill="#00BF96"]`,
            correctpercentagecss: `${this.modalCss} .highcharts-data-label-color-0 .highcharts-text-outline`,
            incorrectpercentagecss: `${this.modalCss} .highcharts-data-label-color-1 .highcharts-text-outline`,
            resultlabelcss: '.result div.data'
        }
    }

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
            correctpercentage: obj.correctpercentage.getText(),
            incorrectpercentage: obj.incorrectpercentage.getText(),
            resultlabel: obj.resultlabel.getText()
        }
    }
}

export default new TestResultsPage()
