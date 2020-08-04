import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import {Users} from '../fixtures/data'

describe('LoadPieCharts', function () {
    let threshold = 2
    before(function () {
        LoginPage.navigate()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).toBe(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(Users.teacher.user1.credentials)
            HomePage.selectSchoolYear('2020-2021')
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Switch Between SubjectTabs', function () {
            describe('Language Arts', function () {
                describe('Gragh', function () {
                    let payload = {
                        subjecttabname: 'Language Arts',
                        testname1: 'Uppercase Letters',
                        testname2: 'Lowercase Letters'
                    }
                    before(function () {
                        HomePage.clickAllClasses()
                        HomePage.clickSubjectTab(payload.subjecttabname)
                    })
                    describe(`${payload.testname1}`, function () {
                        it(`${payload.subjecttabname}_${payload.testname1}Graph-should be correct`, function () {
                            expect(browser.checkElement(HomePage.getTestCardByName(payload.testname1), this.test.title)).toBeLessThanOrEqual(threshold)
                        })
                    })
                    describe(`${payload.testname2}`, function () {
                        it(`${payload.subjecttabname}_${payload.testname2}Graph-should be correct`, function () {
                            expect(browser.checkElement(HomePage.getTestCardByName(payload.testname2), this.test.title)).toBeLessThanOrEqual(threshold)
                        })
                    })
                })
                describe('Phonics 1', function () {
                    describe('Gragh', function () {
                        let payload = {
                            subjecttabname: 'Phonics 1',
                            testname1: 'CVC Words',
                            testname2: 'Final e'
                        }
                        before(function () {
                            HomePage.clickAllClasses()
                            HomePage.clickSubjectTab(payload.subjecttabname)
                        })
                        describe(`${payload.testname1}`, function () {
                            it(`${payload.subjecttabname}_${payload.testname1}Graph-should be correct`, function () {
                                expect(browser.checkElement(HomePage.getTestCardByName(payload.testname1), this.test.title)).toBeLessThanOrEqual(threshold)
                            })
                        })
                        describe(`${payload.testname2}`, function () {
                            it(`${payload.subjecttabname}_${payload.testname2}Graph-should be correct`, function () {
                                expect(browser.checkElement(HomePage.getTestCardByName(payload.testname2), this.test.title)).toBeLessThanOrEqual(threshold)
                            })
                        })
                    })
                })
            })
        })
        describe('Switch Between Students', function () {
            describe('Language Arts', function () {
                describe('Gragh', function () {
                    let payload = {
                        classname: 'Class001',
                        subjecttabname: 'Language Arts',
                        testname1: 'Uppercase Letters',
                        testname2: 'Lowercase Letters',
                        students: ['student001 student001', 'student002 student002', 'student003 student003']
                    }
                    before(function () {
                        HomePage.clickClass(payload.classname)
                        HomePage.clickSubjectTab(payload.subjecttabname)
                    })
                    payload.students.forEach(function (student) {
                        describe(`${payload.testname1}`, function () {
                            before(function () {
                                HomePage.clickStudentByName(student)
                            })
                            it(`${student}${payload.subjecttabname}_${payload.testname1}Graph-should be correct`, function () {
                                expect(browser.checkElement(HomePage.getTestCardByName(payload.testname1), this.test.title)).toBeLessThanOrEqual(threshold)
                            })
                        })
                    })
                    payload.students.forEach(function (student) {
                        describe(`${payload.testname2}`, function () {
                            before(function () {
                                HomePage.clickStudentByName(student)
                            })
                            it(`${student}${payload.subjecttabname}_${payload.testname2}Graph-should be correct`, function () {
                                expect(browser.checkElement(HomePage.getTestCardByName(payload.testname2), this.test.title)).toBeLessThanOrEqual(threshold)
                            })
                        })
                    })
                })
            })
        })
    })
})
