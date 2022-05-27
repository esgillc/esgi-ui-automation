'use strict'
import Helper from '../support/Helper'
class Global {
    constructor () {
        this.hamburgerMenuCss = '.hamburger'
        this.leftMenucCss = '.left-menu'
        this.myAccountMenuCss = 'span.text=My Account' // `${this.leftMenucCss} .item-test-explorer`
        this.renewAccountBtnCss = '.renew-button'
        this.accoutRenewalHeaderCss = 'h1.title'
        this.settingsMenuCss = `${this.leftMenucCss} .item-settings`
        this.contactUsMenuCss = `${this.leftMenucCss} .item-contact-us`
        this.menuModalHeaderCss = '.modal-header h3'
        this.modalCloseCss = '.modal-header .close'

        this.headerCss = '.page-title, .header h1, .title2'
        this.navBarCss = '.navigation-inner'
        this.topMenuCss = `${this.navBarCss} .menu`
        this.topMenuItemsCss = `${this.topMenuCss}  .menu-item`
        this.contactUsModalInputCss = '#dropbox_content input'
        this.renewalPageExistBtnCss = '.exit'

        this.rightNavbarCss = '.navbar-right'
        this.rightNavImgCss = `${this.rightNavbarCss} #btnProfileDropDown .material-icons`
        this.logoutCss = `${this.rightNavbarCss} #btnLogout_Sign_out_0`
        this.menu = {
            home: 'Home',
            testexplorer: 'Test Explorer',
            studentmanager: 'Student Manager',
            parentconferencer: 'Parent Conferencer'
        }
        // Settings
        this.customYesAndNoCss = '.variants-input input'
        this.testButtonCustomizeRadioCss = '#customizeEnabled'
        this.showPieChartCheckboxCss = '[data-name="Show pie chart results"] input'
        this.testResultsCustomRadioCss = '#testResultsVerbiages_custom'
        this.testResultsVerbiageCss = '.custom_verbiage input'

        // Student Manager
        this.studentManagerSearchboxCss = '#text_input_student-by-name-filter'
    }

    get hamburgerMenu () { return $(this.hamburgerMenuCss) }
    get myAccountMenu () { return $(this.myAccountMenuCss) }
    get settingsMenu () { return $(this.settingsMenuCss) }
    get contactUsMenu () { return $(this.contactUsMenuCss) }
    get menuModalHeader () { return $(this.menuModalHeaderCss) }
    get modalClose () { return $(this.modalCloseCss) }
    get contactUsModalInput () { return $$(this.contactUsModalInputCss) }
    get renewAccountBtn () { return $(this.renewAccountBtnCss) }
    get accoutRenewalHeader () { return $(this.accoutRenewalHeaderCss) }
    get renewalPageExistBtn () { return $(this.renewalPageExistBtnCss) }

    get accountRenewalUrl () { return `${browser.config.baseUrl}/Renewal` }

    // Student Manager
    get studentManagerSearchbox () { return $(this.studentManagerSearchboxCss) }

    // Settings
    get testButtonCustomizeRadio () { return $(this.testButtonCustomizeRadioCss) }
    get customYesAndNo () { return $$(this.customYesAndNoCss) }
    get customYes () { return this.customYesAndNo[0] }
    get customNo () { return this.customYesAndNo[1] }
    get showPieChartCheckbox () { return $(this.showPieChartCheckboxCss) }
    get testResultsCustomRadio () { return $(this.testResultsCustomRadioCss) }
    get testResultsVerbiage () { return $$(this.testResultsVerbiageCss) }
    get customMastered () { return this.testResultsVerbiage[0] }
    get customNotMastered () { return this.testResultsVerbiage[1] }

    getContactUsModalInputs () {
        // Helper.switchToFrame()
        return browser.getValue(this.contactUsModalInputCss)
    }

    isLeftMenuOpened () {
        return browser.isExisting(`${this.leftMenucCss}.open`)
    }

    closeModal () {
        this.modalClose.click()
        Helper.waitForLoadingToComplete()
    }

    clickRenewalPageExistBtn () {
        this.renewalPageExistBtn.click()
        browser.pause(250)
        // $('span=OK').click()
        Helper.waitForLoadingToComplete()
        browser.pause(2000)
    }

    clickHamburgerMenu () {
        this.hamburgerMenu.click()
        browser.pause(500)
    }

    openLeftMenu () {
        !this.isLeftMenuOpened() && this.clickHamburgerMenu()
        browser.pause(1000)
    }

    clickMyAccountMenu () {
        this.openLeftMenu()
        this.myAccountMenu.click()
        Helper.waitForLoadingToComplete()
    }

    clickRenewAccountBtn () {
        this.renewAccountBtn.click()
        Helper.waitForLoadingToComplete()
    }

    clickSettingsMenu () {
        this.openLeftMenu()
        this.settingsMenu.click()
        Helper.waitForLoadingToComplete()
    }

    clickContactUsMenu () {
        this.openLeftMenu()
        this.contactUsMenu.click()
        Helper.waitForLoadingToComplete()
    }

    closedLeftMenu () {
        this.isLeftMenuOpened() && this.clickHamburger()
    }

    configureTestCompletedDisplay (payload) {
        payload = payload || {
            y: 'Y',
            n: 'N',
            showpiechart: true
        }
        this.clickSettingsMenu()
        this.testButtonCustomizeRadio.click()
        browser.pause(1000)
        this.customYes.setValue(payload.y)
        this.customNo.setValue(payload.n)

        this.testResultsCustomRadio.click()
        this.customMastered.setValue('correct')
        this.customNotMastered.setValue('incorrect')

        payload.showpiechart ? this.checkShowPieChartCheckbox() : this.unCheckShowPieChartCheckbox()
        $('.modal-footer .btn-primary').click()
        Helper.waitForLoadingToComplete()
    }

    isShowPieChartCheckboxChecked () {
        let isChecked = true
        try {
            expect(this.showPieChartCheckbox).toBeChecked()
        } catch (error) {
            isChecked = false
        }
        return isChecked
    }

    checkShowPieChartCheckbox () {
        if (!this.isShowPieChartCheckboxChecked()) {
            Helper.clickElement(this.showPieChartCheckboxCss)
            browser.pause(250)
        }
    }

    unCheckShowPieChartCheckbox () {
        if (this.isShowPieChartCheckboxChecked()) {
            Helper.clickElement(this.showPieChartCheckboxCss)
            browser.pause(250)
        }
    }
    get header () { return $(this.headerCss) }

    logout () {
        // perform direct logout
        browser.url(`${browser.options.baseUrl}/ESGI/API/Login/Logout`)
        // this.clickRightNavBar()
        // browser.click(this.logoutCss)
    }

    topMenus () {
        return browser.getText(this.topMenuItemsCss)
    }

    topMenuUrl (name) {
        return `${browser.options.baseUrl}/esgi/${name
            .toLowerCase()
            .split(' ')
            .join('-')}`
    }
    parentConferencerUrl () {
        return this.topMenuUrl(this.menu.parentconferencer)
    }
    testExplorerUrl () {
        return this.topMenuUrl(this.menu.testexplorer)
    }
    studentManagerUrl () {
        return this.topMenuUrl(this.menu.studentmanager)
    }
    getTopMenu (name) {
        let cssPre = '.navigation a[href="/esgi'
        if (name.toLowerCase() === 'home') { return $(`${cssPre}/"]`) }
        return $(`${cssPre}/${name
            .toLowerCase()
            .split(' ')
            .join('-')}"]`)
    }
    homeMenu () {
        return this.getTopMenu(this.menu.home)
    }

    testExplorerMenu () {
        return this.getTopMenu(this.menu.testexplorer)
    }

    parentConferencerMenu () {
        return this.getTopMenu(this.menu.parentconferencer)
    }

    studentManagerMenu () {
        return this.getTopMenu(this.menu.studentmanager)
    }

    headerTxt () {
        return this.header.getText()
    }

    // Navigation to the Menus

    navigateToHome (timeout = 20000) {
        this.homeMenu().click() // Bug where you have to click the home button twice
        Helper.waitForLoadingToComplete(null, timeout)
        browser.pause(1000)
    }

    navigateToStudentManager (timeout = 20000) {
        this.studentManagerMenu().click()
        Helper.waitForLoadingToComplete(null, timeout)
        browser.pause(1000)
    }

    navigateToTestExplorer (timeout = 20000) {
        this.testExplorerMenu().click()
        Helper.waitForLoadingToComplete(null, timeout)
    }

    navigateToParentConferencer (timeout = 20000) {
        this.parentConferencerMenu().click()
        Helper.waitForLoadingToComplete(null, timeout)
    }

    clickRightNavBar () {
        browser.isVisible(this.rightNavImgCss) && browser.click(this.rightNavImgCss)
        browser.pause(1000) // Wait for the menu to fully load
    }

    // Student Manager
    searchStudent (name) {
        Helper.setValue(this.studentManagerSearchboxCss, name)
        this.studentManagerSearchbox.click()
        // Workaround for triggering the search
        browser.keys(' ')
        browser.keys('Backspace')
        Helper.waitForLoadingToComplete()
    }

    searchResults () {
        return $$('tr [data-name]')
    }

    searchResultsCount () {
        return this.searchResults().length
    }

    isSearchResultPresent (searchterm) {
        return $(`tbody [data-name="${searchterm}"]`).isDisplayed()
    }

    // Test Explorer
    testSearchBox () {
        return $('.form-control.search-input')
    }

    clearSearchBox () {
        $('.input-group-addon.clear-icon').click()
        Helper.waitForLoadingToComplete()
    }
    searchTest (name) {
        this.testSearchBox().setValue(name)
        browser.keys('Enter')
        Helper.waitForLoadingToComplete()
    }

    getPagingInfo () {
        return $('.paging-info')
    }

    testResults () {
        return this.getPagingInfo().getText()
    }

    isSearchResultEqual (x, y) {
        return x === y
    }
}

export default new Global()
