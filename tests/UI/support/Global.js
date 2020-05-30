'use strict'
import Helper from '../support/Helper'
class Global {
    constructor () {
        this.headerCss = '.page-title, .header h1, .title2'
        this.navBarCss = '.navigation-inner'
        this.topMenuCss = `${this.navBarCss} .menu`
        this.topMenuItemsCss = `${this.topMenuCss}  .menu-item`

        this.rightNavbarCss = '.navbar-right'
        this.rightNavImgCss = `${this.rightNavbarCss} #btnProfileDropDown .material-icons`
        this.logoutCss = `${this.rightNavbarCss} #btnLogout_Sign_out_0`

        this.menu = {
            home: 'Home',
            testexplorer: 'Test Explorer',
            studentmanager: 'Student Manager',
            parentconferencer: 'Parent Conferencer'
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
        if (name.toLowerCase() === 'home') { return $(`${cssPre}"]`) }
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

    navigateToHome () {
        this.homeMenu().click()
        browser.pause(1000)
        this.homeMenu().click() // Bug where you have to click the home button twice
        Helper.waitForLoadingToComplete()
        browser.pause(1000)
    }

    navigateToStudentManager () {
        this.studentManagerMenu().click()
        Helper.waitForLoadingToComplete()
        browser.pause(1000)
    }

    navigateToTestExplorer () {
        this.testExplorerMenu().click()
        browser.pause(1000)
        this.testExplorerMenu().click()
        Helper.waitForLoadingToComplete()
    }

    navigateToParentConferencer () {
        this.parentConferencerMenu().click()
        Helper.waitForLoadingToComplete()
    }

    clickRightNavBar () {
        browser.isVisible(this.rightNavImgCss) && browser.click(this.rightNavImgCss)
        browser.pause(1000) // Wait for the menu to fully load
    }
}

export default new Global()
