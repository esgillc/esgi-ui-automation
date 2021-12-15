import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import { Users } from '../../fixtures/data'
import SpecialistPage from '../../pageobjects/SpecialistPage'

describe('DistrictAdminHomePage', function () {
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
            it('And I can toggle the hieracy list', function () {
                SpecialistPage.toggleHierachyTabs()
            })
        })
        describe('Given I Select ‘District Specialist’', function () {
            before(function () {
                SpecialistPage.clickSpecialistByName('District Specialists')
                browser.pause(1000)
            })
            it('Then District Specialists list should be displayed', function () {
                expect(SpecialistPage.allDistrictSpecialists).toBeDisplayed()
            })
            it('And District Specialists list should be clickable', function () {
                expect(SpecialistPage.allDistrictSpecialists).toBeClickable()
            })
            it('And District Specialists list should be enabled', function () {
                expect(SpecialistPage.allDistrictSpecialists).toBeEnabled()
            })
            it('And District Specialists list should have correct text', function () {
                expect(SpecialistPage.allDistrictSpecialists).toHaveTextContaining('District Specialists')
            })
            it('And School list should be displayed', function () {
                expect(SpecialistPage.allSchools).toBeDisplayed()
            })
            it('And School list should be clickable', function () {
                expect(SpecialistPage.allSchools).toBeClickable()
            })
            it('And School list should be enabled', function () {
                expect(SpecialistPage.allSchools).toBeEnabled()
            })
            it('And School list should have correct text', function () {
                expect(SpecialistPage.allSchools).toHaveTextContaining('School')
            })
            describe('Given I Select a ‘District Specialist’ (IS D) from the list', function () {
                before(function () {
                    SpecialistPage.clickDistrictSpecialistByName('IS D')
                    browser.pause(1000)
                })
                it('Then District Specialists list should be displayed', function () {
                    expect(SpecialistPage.allDistrictSpecialists).toBeDisplayed()
                })
                it('And District Specialists list should be clickable', function () {
                    expect(SpecialistPage.allDistrictSpecialists).toBeClickable()
                })
                it('And District Specialists list should be enabled', function () {
                    expect(SpecialistPage.allDistrictSpecialists).toBeEnabled()
                })
                it('And District Specialists list should have correct text', function () {
                    expect(SpecialistPage.allDistrictSpecialists).toHaveTextContaining('District Specialists')
                })
                it('And School list should be displayed', function () {
                    expect(SpecialistPage.allSchools).toBeDisplayed()
                })
                it('And School list should be clickable', function () {
                    expect(SpecialistPage.allSchools).toBeClickable()
                })
                it('And School list should be enabled', function () {
                    expect(SpecialistPage.allSchools).toBeEnabled()
                })
                it('And School list should have correct text', function () {
                    expect(SpecialistPage.allSchools).toHaveTextContaining('School')
                })
                it('And Specialist Groups list should be displayed', function () {
                    expect(SpecialistPage.allSpecialistGroup).toBeDisplayed()
                })
                it('And Specialist Groups list should be clickable', function () {
                    expect(SpecialistPage.allSpecialistGroup).toBeClickable()
                })
                it('And Specialist Groups list should be enabled', function () {
                    expect(SpecialistPage.allSpecialistGroup).toBeEnabled()
                })
                it('And Specialist Groups list should have correct text', function () {
                    expect(SpecialistPage.allSpecialistGroup).toHaveTextContaining('Specialist Groups')
                })
                it('And Teachers list should be displayed', function () {
                    expect(SpecialistPage.allTeachers).toBeDisplayed()
                })
                it('And Teachers list should be clickable', function () {
                    expect(SpecialistPage.allTeachers).toBeClickable()
                })
                it('And Teachers list should be enabled', function () {
                    expect(SpecialistPage.allTeachers).toBeEnabled()
                })
                it('And Teachers list should have correct text', function () {
                    expect(SpecialistPage.allTeachers).toHaveTextContaining('All Teachers')
                })
                it('And All Students list should be displayed', function () {
                    expect(SpecialistPage.allStudents).toBeDisplayed()
                })
                it('And All Students list should be clickable', function () {
                    expect(SpecialistPage.allStudents).toBeClickable()
                })
                it('And All Students list should be enabled', function () {
                    expect(SpecialistPage.allStudents).toBeEnabled()
                })
                it('And All Students list should have correct text', function () {
                    expect(SpecialistPage.allStudents).toHaveTextContaining('All Students')
                })
            })
        })
        describe('Given I Select School Specialist’', function () {
            before(function () {
                SpecialistPage.clickSpecialistByName('School Specialists')
                browser.pause(1000)
            })
            it('Then School Specialists list should be displayed', function () {
                expect(SpecialistPage.allSchoolSpecialists).toBeDisplayed()
            })
            it('And School Specialists list should be clickable', function () {
                expect(SpecialistPage.allSchoolSpecialists).toBeClickable()
            })
            it('And School Specialists list should be enabled', function () {
                expect(SpecialistPage.allSchoolSpecialists).toBeEnabled()
            })
            it('And School Specialists list should have correct text', function () {
                expect(SpecialistPage.allSchoolSpecialists).toHaveTextContaining('School Specialists')
            })
            describe('Given I Select a "School Specialist" (Jennifer Gustafson) from the list', function () {
                before(function () {
                    SpecialistPage.clickSchoolSpecialistByName('Jennifer Gustafson')
                    browser.pause(1000)
                })
                it('Then School Specialists list should be displayed', function () {
                    expect(SpecialistPage.allSchoolSpecialists).toBeDisplayed()
                })
                it('And School Specialists list should be clickable', function () {
                    expect(SpecialistPage.allSchoolSpecialists).toBeClickable()
                })
                it('And School Specialists list should be enabled', function () {
                    expect(SpecialistPage.allSchoolSpecialists).toBeEnabled()
                })
                it('And School Specialists list should have correct text', function () {
                    expect(SpecialistPage.allSchoolSpecialists).toHaveTextContaining('School Specialists')
                })
                it('And School list should be displayed', function () {
                    expect(SpecialistPage.allSchools).toBeDisplayed()
                })
                it('And School list should be clickable', function () {
                    expect(SpecialistPage.allSchools).toBeClickable()
                })
                it('And School list should be enabled', function () {
                    expect(SpecialistPage.allSchools).toBeEnabled()
                })
                it('And School list should have correct text', function () {
                    expect(SpecialistPage.allSchools).toHaveTextContaining('School')
                })
                it('And Specialist Groups list should be displayed', function () {
                    expect(SpecialistPage.allSpecialistGroup).toBeDisplayed()
                })
                it('And Specialist Groups list should be clickable', function () {
                    expect(SpecialistPage.allSpecialistGroup).toBeClickable()
                })
                it('And Specialist Groups list should be enabled', function () {
                    expect(SpecialistPage.allSpecialistGroup).toBeEnabled()
                })
                it('And Specialist Groups list should have correct text', function () {
                    expect(SpecialistPage.allSpecialistGroup).toHaveTextContaining('Specialist Groups')
                })
                it('And Teachers list should be displayed', function () {
                    expect(SpecialistPage.allTeachers).toBeDisplayed()
                })
                it('And Teachers list should be clickable', function () {
                    expect(SpecialistPage.allTeachers).toBeClickable()
                })
                it('And Teachers list should be enabled', function () {
                    expect(SpecialistPage.allTeachers).toBeEnabled()
                })
                it('And Teachers list should have correct text', function () {
                    expect(SpecialistPage.allTeachers).toHaveTextContaining('All Teachers')
                })
                it('And All Students list should be displayed', function () {
                    expect(SpecialistPage.allStudents).toBeDisplayed()
                })
                it('And All Students list should be clickable', function () {
                    expect(SpecialistPage.allStudents).toBeClickable()
                })
                it('And All Students list should be enabled', function () {
                    expect(SpecialistPage.allStudents).toBeEnabled()
                })
                it('And All Students list should have correct text', function () {
                    expect(SpecialistPage.allStudents).toHaveTextContaining('All Students')
                })
            })
        })
    })
})
