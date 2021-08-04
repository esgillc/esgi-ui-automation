import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'
// import TestEditorPage from '../pageobjects/TestEditorPage'
// import {Login} from '../fixtures/data'

describe('Login page', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user6.credentials)
        Global.navigateToTestExplorer()
    })
    it('should be on login page', function () {
        // expect(LoginPage.title).toBe(LoginPage.getTitle())
    })
    describe('HomePage', function () {
        before(async function () {
            HomePage.clickCreateTestLink()
        })
        it('should be present', function () {
            browser.pause(5000)
            // expect(LoginPage.lostPasswordLink.isDisplayed()).toBe(true)
        })
    })
})
