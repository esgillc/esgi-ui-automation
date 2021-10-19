import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import Global from '../support/Global'
import {Users} from '../fixtures/data'
const secondaryLogin = process.env.SECONDLOGIN
describe('Navigation', function () {
    let credentials
    if ((browser.config.env === 'PROD')) {
        credentials = browser.config.credentials
    } else {
        credentials = !secondaryLogin ? Users.teacher.user4.credentials : Users.teacher.user4.secondary.credentials
    }
    before(function () {
        LoginPage.navigate()
    })
    after(function () {
        // Global.logout()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).toBe(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(credentials)
            HomePage.selectSchoolYear('2021-2022')
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('HamburgerMenu', function () {
            let hamburgerMenu
            before(function () {
                hamburgerMenu = Global.hamburgerMenu
            })
            it('should be visible', function () {
                expect(hamburgerMenu.isDisplayed()).toBe(true)
            })
            it('should be enabled', function () {
                expect(hamburgerMenu.isEnabled()).toBe(true)
            })
            describe('LeftMenus', function () {
                before(function () {
                    hamburgerMenu = Global.openLeftMenu
                })
                describe('MyAccountsMenu', function () {
                    let myAccountMenu
                    before(function () {
                        myAccountMenu = Global.myAccountMenu
                    })
                    it('should be visible', function () {
                        expect(myAccountMenu.isDisplayed()).toBe(true)
                    })
                    it('should be enabled', function () {
                        expect(myAccountMenu.isEnabled()).toBe(true)
                    })
                })
                describe('SettingsMenu', function () {
                    let settingsMenu
                    before(function () {
                        settingsMenu = Global.settingsMenu
                    })
                    it('should be visible', function () {
                        expect(settingsMenu.isDisplayed()).toBe(true)
                    })
                    it('should be enabled', function () {
                        expect(settingsMenu.isEnabled()).toBe(true)
                    })
                })
                describe('ContactUsMenu', function () {
                    let contactUsMenu
                    before(function () {
                        contactUsMenu = Global.contactUsMenu
                    })
                    it('should be visible', function () {
                        expect(contactUsMenu.isDisplayed()).toBe(true)
                    })
                    it('should be enabled', function () {
                        expect(contactUsMenu.isEnabled()).toBe(true)
                    })
                })
                describe('Click', function () {
                    describe('My Account', function () {
                        before(function () {
                            Global.clickMyAccountMenu()
                        })
                        describe('Header', function () {
                            it('should be correct', function () {
                                expect(Global.menuModalHeader.getText()).toBe('My Account')
                            })
                        })
                        after(function () {
                            Global.closeModal()
                        })
                    })
                    describe('Settings', function () {
                        before(function () {
                            Global.clickSettingsMenu()
                        })
                        describe('Header', function () {
                            it('should be correct', function () {
                                expect(Global.menuModalHeader.getText()).toBe('Settings')
                            })
                        })
                        after(function () {
                            Global.closeModal()
                        })
                    })
                    describe('ContactUsMenu', function () {
                        before(function () {
                            Global.clickContactUsMenu()
                        })
                        describe('Header', function () {
                            it('should be correct', function () {
                                expect(Global.menuModalHeader.getText()).toBe('Contact Us')
                            })
                        })
                        describe('Form', function () {
                            describe('Pre-populated', function () {
                                let inputs
                                before(function () {
                                    inputs = Global.getContactUsModalInputs()
                                })
                                it('should be prepopulated', function () {
                                    expect(Array.isArray(inputs)).toBe(true)
                                })
                            })
                        })
                        after(function () {
                            Global.closeModal()
                        })
                    })
                })
                describe.only('RenewAccount', function () {
                    let renewAccountBtn
                    const isSecondaryLogin = !!secondaryLogin
                    const expected = !isSecondaryLogin
                    before(function () {
                        Global.clickMyAccountMenu()
                        renewAccountBtn = Global.renewAccountBtn
                    })
                    after(function () {
                        Global.closeModal()
                    })
                    it('should be correct', function () {
                        !isSecondaryLogin && expect(renewAccountBtn.getText()).toBe('RENEW')
                    })
                    it('should be visible', function () {
                        // expect(renewAccountBtn.isExisting()).toBe(expected)
                    })
                    it('should be enabled', function () {
                        !isSecondaryLogin && expect(renewAccountBtn.isEnabled()).toBe(expected)
                    })
                })
            })
        })
        describe('TopMenus', function () {
            describe('Student Manager', function () {
                before(function () {
                    Global.navigateToStudentManager()
                })
                it('should be able to navigate', function () {
                    expect(Global.headerTxt()).toBe(Global.menu.studentmanager)
                })
                it('url is correct', function () {
                    expect(browser.getUrl()).toBe(Global.studentManagerUrl())
                })
            })
            describe('ParentConferencer', function () {
                before(function () {
                    Global.navigateToParentConferencer()
                })
                it('should be able to navigate', function () {
                    expect(browser.getUrl()).toBe(Global.parentConferencerUrl())
                })
            })
            describe('Test Explorer', function () {
                before(function () {
                    Global.navigateToTestExplorer()
                })
                it('should be able to navigate', function () {
                    expect(Global.headerTxt()).toBe(Global.menu.testexplorer)
                })
                it('url is correct', function () {
                    expect(browser.getUrl()).toBe(Global.testExplorerUrl())
                })
            })
            describe('Home', function () {
                before(function () {
                    Global.navigateToHome()
                })
                it('should be able to navigate', function () {
                    expect(HomePage.getTitle()).toBe(HomePage.title)
                })
                it('url is correct', function () {
                    expect(browser.getUrl()).toBe(HomePage.absoluteUrl())
                })
            })
        })
    })
})
