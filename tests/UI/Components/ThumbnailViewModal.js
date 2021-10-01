'use strict'
import Modal from './Modal'

class ThumbnailViewModal extends Modal {
    constructor () {
        super()
        this.name = 'Thumbnail View'
        this.pageTitle = 'Test Explorer'
        this.questionTilesCss = '.question-container .tile'

        this.thumbnailMenuIconsCss = '.tile .menu-icon'
        this.tileDropdownCss = '.tile .dropdown-menu'
        this.tileMenuItemsCss = '.tile li'
    }

    get modal () { return this.secondModal }
    get modalContent () { return this.secondModalContent }
    get header () { return this.modal.$('.title-container') }
    get questionTiles () { return $$(this.questionTilesCss) }
    get tileDropdown () { return $(this.tileDropdownCss) }
    get tileMenuItems () { return $$(this.tileMenuItemsCss) }
    get tileMenu () {
        return {
            edit: this.tileMenuItems[0],
            delete: this.tileMenuItems[1],
            setasthumbnail: this.tileMenuItems[2],
            addstatestandard: this.tileMenuItems[3]
        }
    }

    get thumbnailMenuIcons () { return $$(this.thumbnailMenuIconsCss) }
    get firstThumbnailMenuIcon () { return this.thumbnailMenuIcons[0] }

    isTileDropDownVisible () {
        return this.tileDropdown.isDisplayed()
    }
    expandTileDropDown () {
        !this.isTileDropDownVisible() && this.firstThumbnailMenuIcon.click()
    }
    editQuestion () {
        this.expandTileDropDown()
        this.tileMenu.edit.click()
    }
}

export default new ThumbnailViewModal()
