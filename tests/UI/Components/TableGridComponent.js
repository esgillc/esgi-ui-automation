'use strict'

import Component from './Component'
import Helper from '../support/Helper'

class TableGridComponent extends Component {
    constructor () {
        super()
        this.name = 'TableGridComponent'

        this.gridContainerCss = '.gridHeader'
        this.gridActionsCss = `${this.gridContainerCss} .gridActions`
        this.pageHelpLinkCss = `${this.gridActionsCss} .page-help-link`
        this.actionsDropdownCss = `${this.gridActionsCss} select`
        this.tableCss = `${this.gridContainerCss} table`
        this.headersCss = `${this.tableCss} thead th`
        this.checkAllCheckboxesCss = `${this.tableCss} thead th>input`
        this.gridCheckboxesCss = '.gridHeader td [type="checkbox"]'
    }

    selectOption (option) {
        browser.selectByVisibleText(this.actionsDropdownCss, option)
        browser.pause(2000)  // @TODO wait for transition and form to be ready
    }

    checkCheckAllCheckbox () {
        Helper.setFieldValues(this.checkAllCheckboxesCss, true)
    }

    unCheckCheckAllCheckbox () {
        Helper.setFieldValues(this.checkAllCheckboxesCss, false)
    }

    getCorrespondingStartDateByLookupTerm (lookupTerm) {
        let columnNumber = this.getColumnNumByName('Start Date')
        return this.getCorrespondingElement(lookupTerm, columnNumber)
    }

    // Returns the visible headers
    getHeaders () {
        return $$(this.headersCss).filter(function (header) {
            return header.isDisplayed()
        }).map(function (ele) {
            return ele.getText()
        })
    }

    getCorrespondingElement (lookupTerm, columnNum) {
        browser.pause(3000)
        let eleCss = 'td=' + lookupTerm
        let elementPresent = this.isGridDataPresent(lookupTerm)
        if (elementPresent) {
            let parent = $(eleCss).$('..')
            return parent.$('td:nth-child(' + columnNum + ')')
        } else {
            console.log(lookupTerm + ' not found.')
            return false
        }
    }
    // using the first item it finds and ignores all other matches
    getCorrespondingRowInfoByLookupTerm (lookupTerm) {
        let eleCss = 'td=' + lookupTerm
        if (!this.isGridDataPresent(lookupTerm)) {
            console.log(lookupTerm + ' not found.')
            return false
        }
        let tableHeaders = this.getHeaders()
        let parent = $(eleCss).$('..')
        let correspondingElements = parent.$$('td')
        let map = new Map()
        tableHeaders.forEach((value, index) => {
            if (value !== '') {
                map.set(value, correspondingElements[index])
            } else {
                if (correspondingElements[index].$('input').isExisting()) {
                    map.set('Checkbox', correspondingElements[index].$('input'))
                } else {
                    map.set('Checkbox', parent.$('input'))
                }
            }
        })
        return map
    }

    getCorrespoindRowInfoText (lookupterm) {
        let map = new Map()
        this.getCorrespondingRowInfoByLookupTerm(lookupterm).forEach((value, key) => {
            if (key !== 'Checkbox') { map.set(key, value.getText()) }
        })
        return map
    }

    isGridDataPresent (lookupterm) {
        browser.pause(1000)
        return browser.isExisting('td=' + lookupterm)
    }

    getColumnNumByName (name) {
        if (!this.isTableHeaderPresent(name)) {
            console.log('The table header ' + name + ' not found. ')
            return false
        }
        return this.getHeaders().indexOf(name) + 1
    }

    isTableHeaderPresent (name) {
        return this.getHeaders().includes(name)
    }

    selectRecord (lookupterm) {
        this.getCorrespondingRowInfoByLookupTerm(lookupterm).get('Checkbox').click()
    }
}

export default new TableGridComponent()
