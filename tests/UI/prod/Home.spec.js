import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import Global from '../support/Global'
import {Users} from '../fixtures/data'

describe('Prod-HomePage', function () {
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
            LoginPage.login(Users.legacy.teacheradmin.credentials)
            HomePage.selectSchoolYear('2019-2020')
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('LeftMenu', function () {
            describe('Default', function () {
                it('should be expanded', function () {
                    expect(HomePage.isLeftMenuExpanded()).toBe(true)
                })
            })
            describe('Collaspe', function () {
                before(function () {
                    HomePage.collapseLeftMenu()
                })
                it('should be collasped', function () {
                    expect(HomePage.isLeftMenuExpanded()).toBe(false)
                })
            })
            describe('Expand', function () {
                before(function () {
                    HomePage.expandLeftMenu()
                })
                it('should be expanded', function () {
                    expect(HomePage.isLeftMenuExpanded()).toBe(true)
                })
            })
        })
        describe('AllClasses', function () {
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
                        // expect(title.getText()).toContain('All Classes (')
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
            describe('AddClass', function () {
                let payload
                before(function () {
                    payload = {
                        name: 'TempClass123',
                        students: ['Student001 Student', 'Student002 Student']
                    }
                    HomePage.addClass(payload)
                })
                it('should add a class', function () {
                    expect(HomePage.isClassPresent(payload.name)).toBe(true)
                })
                describe('EditClass', function () {
                    let payload
                    before(function () {
                        payload = {
                            name: 'TempClass123',
                            newname: 'NewTempClass123',
                            students: ['Student001 Student']
                        }
                        HomePage.editClass(payload)
                    })
                    it('should edit a class', function () {
                        expect(HomePage.isClassPresent(payload.newname)).toBe(true)
                    })
                    describe('DeleteClass', function () {
                        before(function () {
                            let className = 'NewTempClass123'
                            HomePage.deleteClass(className)
                        })
                        it('should delete a class', function () {
                            expect(HomePage.isClassPresent(payload.newname)).toBe(false)
                        })
                    })
                })
            })
        })
        describe('AllGroups', function () {
            // First select what class you want to work with to show the All Groups component
            describe('AddGroup', function () {
                let payload
                before(function () {
                    payload = {
                        classname: 'Class001',
                        name: 'TempGroup123',
                        students: ['Student003 Student', 'Student004 Student']
                    }
                    HomePage.addGroup(payload)
                })
                it('should add a group', function () {
                    expect(HomePage.isGroupPresent(payload.name)).toBe(true)
                })
            })
            describe('EditGroup', function () {
                let payload
                before(function () {
                    payload = {
                        classname: 'Class001',
                        name: 'TempGroup123',
                        newname: 'NewTempGroup123',
                        students: ['Student003 Student']
                    }
                    HomePage.editGroup(payload)
                })
                it('should edit a group', function () {
                    expect(HomePage.isGroupPresent(payload.newname)).toBe(true)
                })
            })
            describe('DeleteGroup', function () {
                let payload = {
                    classname: 'Class001',
                    groupname: 'NewTempGroup123'
                }
                before(function () {
                    HomePage.deleteGroup(payload)
                })
                it('should delete a group', function () {
                    expect(HomePage.isGroupPresent(payload.groupname)).toBe(false)
                })
            })
        })
        describe('AllStudents', function () {
            let payload
            before(function () {
                payload = {
                    classname: 'Class001',
                    firstname: '01first123',
                    lastname: '01last123'
                }
                HomePage.deleteStudent(payload)
            })
            describe('AddStudent', function () {
                before(function () {
                    HomePage.addStudent(payload)
                })
                it('should add a student', function () {
                    expect(HomePage.isStudentPresent(`${payload.firstname} ${payload.lastname}`)).toBe(true)
                })
                describe('EditStudent', function () {
                    let payload
                    before(function () {
                        payload = {
                            name: '01first123 01last123',
                            firstname: '00NewFirst',
                            lastname: '00Newlast'
                        }
                        HomePage.editStudent(payload)
                    })
                    it('should edit a student', function () {
                        expect(HomePage.isStudentPresent(`${payload.firstname} ${payload.lastname}`)).toBe(true)
                    })
                    describe('DeleteStudent', function () {
                        let payload
                        before(function () {
                            payload = {
                                classname: 'Class001',
                                firstname: '01NewFirst',
                                lastname: '01Newlast'
                            }
                            HomePage.deleteStudent(payload)
                        })
                        it('should delete a student', function () {
                            expect(HomePage.isStudentPresent(`${payload.firstname} ${payload.lastname}`)).toBe(false)
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
