'use strict'
import Modal from './Modal'
import Helper from '../support/Helper'

class QuestionEditorModal extends Modal {
    constructor () {
        super()
        this.name = 'Question Editor Modal'
        this.pageTitle = 'Test Explorer'
        this.headerCss = `${this.modalCss} .create-title`

        this.imageIconCss = `${this.modalCss} .image-item`
        this.textIconCss = '.mx-question-editor-toolbar-menu > .toolbar-item'
        this.shapeIconCss = '.mx-question-editor-rectangle-selector'
        this.shapesMenuItemsCss = '.menu-item-svg'
        this.textToolsContainerCss = '.mx-question-editor-text-toolbar'
        this.shapeToolsContainerCss = '.mx-question-editor-vertex-toolbar'
        this.colorPickerCss = '.mx-question-editor-color-picker'

         // Canvas
        this.canvasCss = '.mx-graph-canvas'
        this.textObjectCss = '.mxCellEditor.mxPlainTextEditor'
        this.canvasHeaderCss = '.mx-graph-canvas-header'
    }
    get sampleColors () {
        return {
            red: { hex: 'C20010', rgb: 'rgb(194, 0, 16)' },
            blue: { hex: '0022FB', rgb: 'rgb(0, 34, 251)' },
            green: { hex: '135B0E', rgb: 'rgb(19, 91, 14)' }
        }
    }
    get shapesDropdownItems () {
        return {
            rectangle: 0,
            circle: 1,
            triangle: 2,
            line: 3,
            arrow: 4
        }
    }
    get modal () { return this.secondModal }
    get editModal () { return this.thirdModal }
    get modalContent () { return this.secondModalContent }
    get imageIcon () { return $(this.imageIconCss) }
    get textIcon () { return $(this.textIconCss) }
    get shapeIcon () { return $(this.shapeIconCss) }
    get shapeIconDropDown () { return $('.triangle-arrow-container') }
    get textToolsContainer () { return $(this.textToolsContainerCss) }
    get shapeToolsContainer () { return $(this.shapeToolsContainerCss) }
    get header () { return $(this.headerCss) }

     // Canvas
    get canvas () { return $(this.canvasCss) }
    get canvasImages () { return this.canvas.$('image') }
    get canvasText () { return this.canvas.$(this.textObjectCss) }
    get canvasShape () { return this.canvas.$('svg > g [stroke-width]') }
    get canvasHeader () { return $(this.canvasHeaderCss) }
    get canvasHeaderItems () { return this.canvasHeader.$$('.header-item') }

    get undo () { return this.canvasHeaderItems[0] }
    get redo () { return this.canvasHeaderItems[1] }
    get delete () { return this.canvasHeaderItems[2] }

    // Text Toobar header
    get textToolsHeader () { return this.textToolsContainer.$('.text-toolbar-header') }
    get fontFamilyDropDown () { return this.textToolsContainer.$('.font-family-toolbar-dropdown') }
    get fontSizeDropDown () { return this.textToolsContainer.$('.font-size-toolbar-dropdown') }
    get textFormat () { return this.textToolsContainer.$$('.toolbar-item') }
    get bold () { return this.textFormat[0] }
    get italics () { return this.textFormat[1] }
    get underline () { return this.textFormat[2] }
    get alignLeft () { return this.textFormat[3] }
    get center () { return this.textFormat[4] }
    get alignRight () { return this.textFormat[5] }
    get colorTool () { return this.textFormat[6] }
    get colorPicker () { return $(this.colorPickerCss) }
    get colorPickerInput () { return this.colorPicker.$('.color-picker-hex-input input') }

    get shapeToolsHeader () { return this.shapeToolsContainer.$('.text-toolbar-header') }
    get shapesAttr () { return this.shapeToolsContainer.$$('.toolbar-item') }
    get shapeFill () { return this.shapesAttr[0] }
    get shapeBorder () { return this.shapesAttr[1] }
    get stroke () { return this.shapeToolsContainer.$('.stroke-selector-toolbars-container') }
    get strokeWidth () { return this.stroke.$('.stroke-width-value') }
    get lineArrows () { return this.stroke.$$('.arrow-svg') }
    get upArrow () { return this.lineArrows[0] }
    get downArrow () { return this.lineArrows[1] }

    isTestEditorOpen () {
        return this.modal.isDisplayed()
    }
    clickImageIcon () {
        this.imageIcon.click()
        browser.pause(1000)
    }
    clickTextIcon () {
        this.textIcon.click()
        browser.pause(1000)
    }
    clickShapeIcon () {
        this.shapeIcon.click()
        browser.pause(1000)
    }
    close () {
        this.modal.$('.close').click()
    }
    addTextToCanvas (text) {
        this.canvasText.setValue(text)
        browser.pause(1000)
    }
    selectFontType (type) {
        this.fontFamilyDropDown.click()
        browser.pause(1000)
        $(`.option=${type}`).click()
        browser.pause(1000)
    }
    selectCirle () {
        this.shapeIconDropDown.click()
        Helper.clickElementAtIndex(this.shapesMenuItemsCss, this.shapesDropdownItems.circle)
        browser.pause(1000)
    }
    selectTriangle () {
        this.shapeIconDropDown.click()
        Helper.clickElementAtIndex(this.shapesMenuItemsCss, this.shapesDropdownItems.triangle)
        browser.pause(1000)
    }
    selectLine () {
        this.shapeIconDropDown.click()
        Helper.clickElementAtIndex(this.shapesMenuItemsCss, this.shapesDropdownItems.line)
        browser.pause(1000)
    }
    selectArrow () {
        this.shapeIconDropDown.click()
        Helper.clickElementAtIndex(this.shapesMenuItemsCss, this.shapesDropdownItems.arrow)
        browser.pause(1000)
    }
    selectFontSize (size) {
        this.fontSizeDropDown.click()
        browser.pause(1000)
        $(`.option=${size}pt`).click()
        browser.pause(1000)
    }
    changeTextColor (color) {
        color = color || this.sampleColors.red.hex
        this.colorTool.click()
        browser.pause(500)
        this.colorPickerInput.setValue(color)
        browser.pause(1000)
    }
    deleteItem () {
        this.delete.click()
        browser.pause(1000)
    }
}

export default new QuestionEditorModal()
