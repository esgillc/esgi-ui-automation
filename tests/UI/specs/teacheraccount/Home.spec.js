import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import {Users} from '../../fixtures/data'

describe('HomePage', function () {
    before(function () {
        LoginPage.navigate()
    })
    after(function () {
       //  Global.logout()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).toBe(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(Users.teacher.credentials)
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
                        name: 'Testing123',
                        students: ['Ella Ayvazian', 'Emily Charkhchyan']
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
                            name: 'Testing123',
                            newname: 'NewClass123',
                            students: ['Emily Charkhchyan']
                        }
                        HomePage.editClass(payload)
                    })
                    it('should edit a class', function () {
                        expect(HomePage.isClassPresent(payload.newname)).toBe(true)
                    })
                    describe('DeleteClass', function () {
                        before(function () {
                            let className = 'NewClass123'
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
                        classname: 'Buckhoff\'s Class',
                        name: 'Group123',
                        students: ['Sofia Boghozian', 'Janet Dermenjyan']
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
                        classname: 'Buckhoff\'s Class',
                        name: 'Group123',
                        newname: 'NewGroup123',
                        students: ['Sofia Boghozian', 'Janet Dermenjyan']
                    }
                    HomePage.editGroup(payload)
                })
                it('should edit a group', function () {
                    expect(HomePage.isGroupPresent(payload.newname)).toBe(true)
                })
                describe('DeleteGroup', function () {
                    let payload = {
                        classname: 'Buckhoff\'s Class',
                        groupname: 'NewGroup123'
                    }
                    before(function () {
                        HomePage.deleteGroup(payload)
                    })
                    it('should delete a group', function () {
                        expect(HomePage.isGroupPresent(payload.groupname)).toBe(false)
                    })
                })
            })
        })
        describe('AllStudents', function () {
            let payload
            before(function () {
                payload = {
                    classname: 'Buckhoff\'s Class',
                    firstname: '00firstTemp',
                    lastname: '00lastTemp'
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
                            name: '00firstTemp 00lastTemp',
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
                                classname: 'Buckhoff\'s Class',
                                firstname: '00NewFirst',
                                lastname: '00Newlast'
                            }
                            HomePage.deleteStudent(payload)
                        })
                        it('should delete a student', function () {
                            browser.pause(1000)
                        })
                    })
                })
            })
        })
    })
})
