import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'

describe('TeacherAccountPageTest', function () {
    before(function () {
        LoginPage.navigate()
    })
    after(function () {
        Global.logout()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).toBe(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(Users.teacher.credentials)
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Controls', function () {
            describe('Header', function () {
                let header
                before(function () {
                    header = HomePage.header
                })
                it('should show the correct text', function () {
                    expect(header.getText()).toMatch(/Suzanne Buckhoff/)
                })
                it('should be visible', function () {
                    expect(header.isDisplayed()).toBe(true)
                })
                it('should be enabled', function () {
                    expect(header.isEnabled()).toBe(true)
                })
            })
            describe('Track Name', function () {
                let trackName
                before(function () {
                    trackName = HomePage.trackName
                })
                it('should show the correct text', function () {
                    expect(trackName.getText()).toBe('Track Name: Glendale')
                })
                it('should be visible', function () {
                    expect(trackName.isDisplayed()).toBe(true)
                })
                it('should be enabled', function () {
                    expect(trackName.isEnabled()).toBe(true)
                })
            })
            describe('TrackLink', function () {
                let trackNameLink
                before(function () {
                    trackNameLink = HomePage.trackNameLink
                })
                it('should be visible', function () {
                    expect(trackNameLink.isDisplayed()).toBe(true)
                })
                it('should be enabled', function () {
                    expect(trackNameLink.isEnabled()).toBe(true)
                })
            })
            describe('School Year', function () {
                let schoolYear
                before(function () {
                    schoolYear = HomePage.schoolYear
                })
                it('should show the correct text', function () {
                    expect(schoolYear.getText()).toContain('School Year:')
                })
                it('should be visible', function () {
                    expect(schoolYear.isDisplayed()).toBe(true)
                })
                it('should be enabled', function () {
                    expect(schoolYear.isEnabled()).toBe(true)
                })
            })
            describe('Add, Edit, and Organize Subjects Link', function () {
                let addEditSubjects
                before(function () {
                    addEditSubjects = HomePage.organizeEditCreateNewSubjectLink
                })
                it('should show the correct text', function () {
                    expect(addEditSubjects.getText()).toContain('Add, Edit, and Organize Subjects')
                })
                it('should be visible', function () {
                    expect(addEditSubjects.isDisplayed()).toBe(true)
                })
                it('should be enabled', function () {
                    expect(addEditSubjects.isEnabled()).toBe(true)
                })
            })
            describe('Create SubjectTab Link', function () {
                let createSubjectTab
                before(function () {
                    createSubjectTab = HomePage.createSubjectTab
                })
                it('should show the correct text', function () {
                    expect(createSubjectTab.getText()).toContain('Add Subject Tab')
                })
                it('should be visible', function () {
                    expect(createSubjectTab.isDisplayed()).toBe(true)
                })
                it('should be enabled', function () {
                    expect(createSubjectTab.isEnabled()).toBe(true)
                })
            })
        })
        describe('Given I am on the login page', function () {
            describe('when I click the AllClasses Link', function () {
                before(function () {
                    HomePage.clickAllClasses()
                })
                describe('Then the App should have the following properties', () => {
                    describe('AllClassesBox', () => {
                        let allClassesObj
                        before(function () {
                            allClassesObj = HomePage.getAllClassesObj()
                        })
                        it('should be present', function () {
                            expect(allClassesObj.component.isDisplayed()).toBe(true)
                        })
                        describe('Controls', function () {
                            describe('Title', function () {
                                let title
                                before(function () {
                                    title = allClassesObj.title
                                })
                                it('should show the correct text', function () {
                                    // expect(title.getText()).toMatch(/All Classes/)
                                })
                                it('should be visible', function () {
                                    expect(title.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(title.isEnabled()).toBe(true)
                                })
                            })
                            describe('AddButton', function () {
                                let add
                                before(function () {
                                    add = allClassesObj.add
                                })
                                it('should be visible', function () {
                                    expect(add.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(add.isEnabled()).toBe(true)
                                })
                            })
                            describe('ExpandCollaspeButton', function () {
                                let expandCollaspe
                                before(function () {
                                    expandCollaspe = allClassesObj.expandcollapse
                                })
                                it('should be visible', function () {
                                    expect(expandCollaspe.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(expandCollaspe.isEnabled()).toBe(true)
                                })
                            })
                        })
                    })
                    describe('AllStudentsBox', () => {
                        let allStudentsObj
                        before(function () {
                            allStudentsObj = HomePage.getAllStudentsObj()
                        })
                        it('should be present', function () {
                            expect(allStudentsObj.component.isDisplayed()).toBe(true)
                        })
                        describe('Controls', function () {
                            describe('Title', function () {
                                let title
                                before(function () {
                                    title = allStudentsObj.title
                                })
                                it('should show the correct text', function () {
                                    // expect(title.getText()).toMatch(/All Students/)
                                })
                                it('should be visible', function () {
                                    expect(title.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(title.isEnabled()).toBe(true)
                                })
                            })
                            describe('AddButton', function () {
                                let add
                                before(function () {
                                    add = allStudentsObj.add
                                })
                                it('should be visible', function () {
                                    expect(add.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(add.isEnabled()).toBe(true)
                                })
                            })
                            describe('ExpandCollaspeButton', function () {
                                let expandCollaspe
                                before(function () {
                                    expandCollaspe = allStudentsObj.expandcollapse
                                })
                                it('should be visible', function () {
                                    expect(expandCollaspe.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(expandCollaspe.isEnabled()).toBe(true)
                                })
                            })
                        })
                    })
                    describe('AllGroupsBox', () => {
                        let allGroups
                        before(function () {
                            allGroups = HomePage.allGroups
                        })
                        it('should not be present', function () {
                            expect(allGroups.isDisplayed()).toBe(false)
                        })
                    })
                })
            })
        })
        describe('Given I am on the login page', function () {
            describe('when I click a specific Class', function () {
                before(function () {
                    HomePage.clickClass('Buckhoff\'s Class')
                })
                describe('Then the App should have the following properties', () => {
                    describe('AllClassesBox', () => {
                        let allClassesObj
                        before(function () {
                            allClassesObj = HomePage.getAllClassesObj()
                        })
                        it('should be present', function () {
                            expect(allClassesObj.component.isDisplayed()).toBe(true)
                        })
                        describe('Controls', function () {
                            describe('Title', function () {
                                let title
                                before(function () {
                                    title = allClassesObj.title
                                })
                                it('should show the correct text', function () {
                                   // expect(title.getText()).toMatch(/All Classes/)
                                })
                                it('should be visible', function () {
                                    expect(title.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(title.isEnabled()).toBe(true)
                                })
                            })
                            describe('AddButton', function () {
                                let add
                                before(function () {
                                    add = allClassesObj.add
                                })
                                it('should be visible', function () {
                                    expect(add.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(add.isEnabled()).toBe(true)
                                })
                            })
                            describe('ExpandCollaspeButton', function () {
                                let expandCollaspe
                                before(function () {
                                    expandCollaspe = allClassesObj.expandcollapse
                                })
                                it('should be visible', function () {
                                    expect(expandCollaspe.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(expandCollaspe.isEnabled()).toBe(true)
                                })
                            })
                        })
                    })
                    describe('AllStudentsBox', () => {
                        let allStudentsObj
                        before(function () {
                            allStudentsObj = HomePage.getAllStudentsObj()
                        })
                        it('should be present', function () {
                            expect(allStudentsObj.component.isDisplayed()).toBe(true)
                        })
                        describe('Controls', function () {
                            describe('Title', function () {
                                let title
                                before(function () {
                                    title = allStudentsObj.title
                                })
                                it('should show the correct text', function () {
                                    // expect(title.getText()).toMatch(/All Students/i)
                                })
                                it('should be visible', function () {
                                    expect(title.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(title.isEnabled()).toBe(true)
                                })
                            })
                            describe('AddButton', function () {
                                let add
                                before(function () {
                                    add = allStudentsObj.add
                                })
                                it('should be visible', function () {
                                    expect(add.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(add.isEnabled()).toBe(true)
                                })
                            })
                            describe('ExpandCollaspeButton', function () {
                                let expandCollaspe
                                before(function () {
                                    expandCollaspe = allStudentsObj.expandcollapse
                                })
                                it('should be visible', function () {
                                    expect(expandCollaspe.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(expandCollaspe.isEnabled()).toBe(true)
                                })
                            })
                        })
                    })
                    describe('AllGroupsBox', () => {
                        let allGroupsObj
                        before(function () {
                            allGroupsObj = HomePage.getAllGroupsObj()
                        })
                        it('should be present', function () {
                            expect(allGroupsObj.component.isDisplayed()).toBe(true)
                        })
                        describe('Controls', function () {
                            describe('Title', function () {
                                let title
                                before(function () {
                                    title = allGroupsObj.title
                                })
                                it('should show the correct text', function () {
                                    // expect(title.getText()).toMatch(/All Groups/i)
                                })
                                it('should be visible', function () {
                                    expect(title.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(title.isEnabled()).toBe(true)
                                })
                            })
                            describe('AddButton', function () {
                                let add
                                before(function () {
                                    add = allGroupsObj.add
                                })
                                it('should be visible', function () {
                                    expect(add.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(add.isEnabled()).toBe(true)
                                })
                            })
                            describe('ExpandCollaspeButton', function () {
                                let expandCollaspe
                                before(function () {
                                    expandCollaspe = allGroupsObj.expandcollapse
                                })
                                it('should be visible', function () {
                                    expect(expandCollaspe.isDisplayed()).toBe(true)
                                })
                                it('should be enabled', function () {
                                    expect(expandCollaspe.isEnabled()).toBe(true)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
