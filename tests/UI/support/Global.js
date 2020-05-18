'use strict'
import Helper from '../support/Helper'
class Global {
    constructor () {
        this.headerCss = '.page-title, .header h1'
        this.navBarCss = '.navigation-inner'
        this.topMenuCss = `${this.navBarCss} .menu`
        this.topMenuItemsCss = `${this.topMenuCss}  .menu-item`

        this.rightNavbarCss = '.navbar-right'
        this.rightNavImgCss = `${this.rightNavbarCss} #btnProfileDropDown .material-icons`
        this.logoutCss = `${this.rightNavbarCss} #btnLogout_Sign_out_0`

        this.menu = {
            home: 'Home',
            testexplorer: 'Test Explorer',
            studentexplorer: 'Student Explorer',
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

    getTopMenu (name) {
        let cssPre = '.menu-item a[href="/esgi'
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

    studentExplorerMenu () {
        return this.getTopMenu(this.menu.studentexplorer)
    }

    parentConferencerMenu () {
        return this.getTopMenu(this.menu.parentconferencer)
    }

    headerTxt () {
        return this.header.getText()
    }

    // Navigation to the Menus

    navigateToHome () {
        this.homeMenu().click()
        Helper.waitForLoadingToComplete()
    }

    navigateToStudentExplorer () {
        this.studentExplorerMenu().click()
        Helper.waitForLoadingToComplete()
    }

    navigateToTestExplorer () {
        this.testExplorerMenu().click()
        Helper.waitForLoadingToComplete()
    }

    navigateToParentConferencer () {
        this.parentConferencerMenu().click()
    }

    clickRightNavBar () {
        browser.isVisible(this.rightNavImgCss) && browser.click(this.rightNavImgCss)
        browser.pause(1000) // Wait for the menu to fully load
    }
}

export default new Global()
