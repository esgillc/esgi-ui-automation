import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import Global from '../support/Global'
import {Users} from '../fixtures/data'

describe('Navigation', function () {
    let credentials
    if ((browser.config.env === 'PROD')) {
        credentials = browser.config.credentials
    } else {
        credentials = !process.env.SECONDLOGIN ? Users.teacher.user4.credentials : Users.teacher.user4.secondary.credentials
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
                        describe('GET CODE', function () {
                            describe('Click', function () {
                                before(function () {
                                    $('.code-button').isDisplayed() && $('.code-button').click()
                                })
                                it('should generate code', function () {
                                    expect($('.code').isDisplayed()).toBe(true)
                                })
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
                describe('RenewAccount', function () {
                    let renewAccountBtn
                    before(function () {
                        Global.clickMyAccountMenu()
                        renewAccountBtn = Global.renewAccountBtn
                    })
                    it('should be correct', function () {
                        expect(renewAccountBtn.getText()).toBe('RENEW')
                    })
                    it('should be visible', function () {
                        expect(renewAccountBtn.isDisplayed()).toBe(true)
                    })
                    it('should be enabled', function () {
                        expect(renewAccountBtn.isEnabled()).toBe(true)
                    })
                    describe('RenewalPage', function () {
                        before(function () {
                            Global.clickRenewAccountBtn()
                        })
                        it('header should be correct', function () {
                            expect(Global.accoutRenewalHeader.getText()).toBe('Account Management')
                        })
                        it('url should be correct', function () {
                            expect(browser.getUrl()).toBe(Global.accountRenewalUrl)
                        })
                        describe('ExitRenewalPage', function () {
                            before(function () {
                                Global.clickRenewalPageExistBtn()
                            })
                            it('should be back on Home Page', function () {
                                expect(HomePage.title).toBe(HomePage.getTitle())
                            })
                            it('url should be correct', function () {
                                expect(browser.getUrl()).toBe(HomePage.absoluteUrl())
                            })
                        })
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
