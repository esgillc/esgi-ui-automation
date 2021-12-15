import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import { Users } from '../../fixtures/data'
import SpecialistPage from '../../pageobjects/SpecialistPage'
import StudentManager from '../../pageobjects/StudentManager'

describe('DistrictAdminHomePage_Add', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.speacialist.user0.credentials)
    })
    after(function () {
        Global.logout()
    })
    it('should be on HomePage', function () {
        expect(HomePage.title).toBe(HomePage.getTitle())
    })
    describe('Given I am on the Home Page', function () {
        before(function () {
            SpecialistPage.clickDataLink()
        })
        describe('And I click on the Data Tab', function () {
            it('Then the standard list should be displayed', function () {
                expect(SpecialistPage.standardList).toBeDisplayed()
            })
            it('And the standard list should be clickable', function () {
                expect(SpecialistPage.standardList).toBeClickable()
            })
            it('And the standard list should be enabled', function () {
                expect(SpecialistPage.standardList).toBeEnabled()
            })
            it('And the standard list should have correct text', function () {
                expect(SpecialistPage.standardList).toHaveText(SpecialistPage.hierachyTabs.standard)
            })
            it('And the specialist list should be displayed', function () {
                expect(SpecialistPage.specialistsList).toBeDisplayed()
            })
            it('And the specialist list should be clickable', function () {
                expect(SpecialistPage.specialistsList).toBeClickable()
            })
            it('And the specialist list should be enabled', function () {
                expect(SpecialistPage.specialistsList).toBeEnabled()
            })
            it('And the specialist list should have correct text', function () {
                expect(SpecialistPage.specialistsList).toHaveText(SpecialistPage.hierachyTabs.specialists)
            })
        })
        describe('Given I Select ‘District Specialist’', function () {
            before(function () {
                SpecialistPage.clickSpecialistByName('District Specialists')
                browser.pause(1000)
            })
            describe('And I Select a ‘District Specialist’ (IS D) from the list', function () {
                before(function () {
                    SpecialistPage.clickDistrictSpecialistByName('IS D')
                    browser.pause(1000)
                })
                describe('When I click the Add button on Specialist Groups', function () {
                    before(function () {
                        SpecialistPage.addSpecialistGroupBtn.click()
                        browser.pause(1000)
                    })
                    it('Then the ‘Add New Specialist Group’ modal should be displayed', function () {
                        expect(SpecialistPage.specialistGroupModal).toBeDisplayed()
                    })
                    it('And the ‘Add New Specialist Group’ Modal should be enabled', function () {
                        expect(SpecialistPage.specialistGroupModal).toBeEnabled()
                    })
                    it('And modal header should have correct text', function () {
                        expect($('.modal-dialog h3')).toHaveText('Add New Specialist Group:')
                    })
                    describe('When I enter a group name an click ‘Save and Add Students’ buton', function () {
                        let specialistgroupname
                        before(function () {
                            specialistgroupname = `GroupName${new Date().getTime()}`
                            $('#text_input_Group_Name').setValue(specialistgroupname)
                            browser.pause(1000)
                            $('.save-and-add-button').click()
                            browser.pause(1000)
                        })
                        after(function () {
                            SpecialistPage.deleteSpecialistGroup({specialistgroupname})
                        })
                        it('Then user is directed to Student Manager', function () {
                            expect(browser).toHaveUrlContaining(StudentManager.url)
                        })
                        it('And specialist group is created', function () {
                            SpecialistPage.clickDataLink()
                            expect(SpecialistPage.isSpecialistGroupPresent(specialistgroupname)).toBe(true)
                        })
                    })
                })
            })
        })
        describe('Given I Select School Specialist’', function () {
            before(function () {
                SpecialistPage.clickSpecialistByName('School Specialists')
                browser.pause(1000)
            })
            describe('And I Select a ‘School Specialist’ (Jennifer Gustafson) from the list', function () {
                before(function () {
                    SpecialistPage.clickSchoolSpecialistByName('Jennifer Gustafson')
                    browser.pause(1000)
                })
                describe('When I click the Add button on Specialist Groups', function () {
                    before(function () {
                        SpecialistPage.addSpecialistGroupBtn.click()
                        browser.pause(1000)
                    })
                    it('Then the ‘Add New Specialist Group’ modal should be displayed', function () {
                        expect(SpecialistPage.specialistGroupModal).toBeDisplayed()
                    })
                    it('And the ‘Add New Specialist Group’ Modal should be enabled', function () {
                        expect(SpecialistPage.specialistGroupModal).toBeEnabled()
                    })
                    it('And modal header should have correct text', function () {
                        expect($('.modal-dialog h3')).toHaveText('Add New Specialist Group:')
                    })
                    describe('When I enter a group name an click ‘Save and Add Students’ buton', function () {
                        let specialistgroupname
                        before(function () {
                            specialistgroupname = `GroupName${new Date().getTime()}`
                            $('#text_input_Group_Name').setValue(specialistgroupname)
                            browser.pause(1000)
                            $('.save-and-add-button').click()
                            browser.pause(1000)
                        })
                        after(function () {
                            SpecialistPage.deleteSpecialistGroup({specialistgroupname})
                        })
                        it('Then user is directed to Student Manager', function () {
                            expect(browser).toHaveUrlContaining(StudentManager.url)
                        })
                        it('And specialist group is created', function () {
                            SpecialistPage.clickDataLink()
                            expect(SpecialistPage.isSpecialistGroupPresent(specialistgroupname)).toBe(true)
                        })
                    })
                })
            })
        })
    })
})
