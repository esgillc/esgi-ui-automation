import LoginPage from '../pageobjects/LoginPage'
import ReportsPage from '../pageobjects/ReportsPage'
import HomePage from '../pageobjects/HomePage'
import Global from './Global'
const Helper = require('./Helper')
const WarmUpBuilder = function () {
    return {
        goToLoginPage: function (timeout) {
            try {
                LoginPage.open()
                Helper.waitForLoadingToComplete(false, timeout)
            } catch (e) {
                browser.emit('warmuperror', e)
            }
            return this
        },
        login: function (credentials) {
            try {
                LoginPage.login(credentials)
                HomePage.selectSchoolYear('2020-2021')
            } catch (e) {
                browser.emit('warmuperror', e)
            }
            return this
        },
        navigateToStudentManager: function (timeout) {
            try {
                Global.navigateToStudentManager(timeout)
            } catch (e) {
                browser.emit('warmuperror', e)
            }
            return this
        },
        navigateToTestExplorer: function (timeout) {
            try {
                Global.navigateToTestExplorer(timeout)
            } catch (e) {
                browser.emit('warmuperror', e)
            }
            return this
        },
        navigateToParentConferencer: function (timeout) {
            try {
                Global.navigateToParentConferencer(timeout)
            } catch (e) {
                browser.emit('warmuperror', e)
            }
            return this
        },
        navigateToHome: function (timeout) {
            try {
                Global.navigateToHome(timeout)
            } catch (e) {
                browser.emit('warmuperror', e)
            }
            return this
        },
        runReports: function (timeout) {
            try {
                HomePage.getReports(timeout).forEach(report => {
                    ReportsPage.getReportTitle(report, timeout)
                })
            } catch (e) {
                browser.emit('warmuperror', e)
            }
            return this
        },
        doBingo: function (timeout) {
            try {
                HomePage.clickBingo()
                ReportsPage.clickLetsBegin()
                ReportsPage.clickNextPageBtn()
                browser.pause(2000)
                ReportsPage.clickNextPageBtn()
                browser.pause(2000)
                ReportsPage.clickNextPageBtn()
                browser.pause(2000)
                ReportsPage.clickNextPageBtn()
                browser.pause(2000)
                ReportsPage.clickDownloadGame()
            } catch (e) {
                browser.emit('warmuperror', e)
            }
            return this
        },
        chill: function (timeout) {
            timeout = timeout || 5000
            browser.pause(timeout)
            return this
        },
        logOut: function () {
            Global.logout()
            return this
        },
        onWarmupError: function () {
            browser.on('warmuperror', function (e) {
                console.log(e)
                // browser.refresh()
                // browser.pause(5000)
            })
            return this
        }
    }
}
module.exports = WarmUpBuilder
