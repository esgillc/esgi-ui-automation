import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import Global from '../../support/Global'
import {Users, Reports} from '../../fixtures/data'

describe('TeacherAccount - Reports', function () {
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
            LoginPage.login(Users.teacher.user2.credentials)
            HomePage.selectSchoolYear('2020-2021')
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Reports', function () {
            const reports = Reports.teacher
            describe('Types', function () {
                let initialReports
                before(function () {
                    initialReports = HomePage.getReports()
                })
                it('Initial Reports: should be correct', function () {
                    expect(initialReports).toStrictEqual(reports.initial.types)
                })
                describe('Run Reports', function () {
                    describe('Initial', function () {
                        let reportTitle
                        reports.initial.props.forEach(report => {
                            describe(report.name, function () {
                                before(function () {
                                    reportTitle = ReportsPage.getReportTitle(report.name)
                                })
                                it('should be correct', function () {
                                    expect(reportTitle).toBe(report.title)
                                })
                            })
                        })
                        describe('Bingo', function () {
                            before(function () {
                                ReportsPage.openReport('Bingo')
                            })
                            after(function () {
                                ReportsPage.closeModal()
                            })
                            it('should be opened', function () {
                                expect(browser.isVisible('.bingo.preview')).toBe(true)
                            })
                        })
                        describe('Click Specific Class', function () {
                            before(function () {
                                browser.pause(5000)
                                HomePage.clickClass('Class001')
                            })
                            it.only('testing', function () {
                            })
                            let reportTitle
                            Reports.allclasses.forEach(report => {
                                describe(report.name, function () {
                                    before(function () {
                                        reportTitle = ReportsPage.getReportTitle(report.name)
                                    })
                                    it('should be correct', function () {
                                        expect(reportTitle).toBe(report.title)
                                    })
                                })
                            })
                            describe('Class Grades', function () {
                                before(function () {
                                    reportTitle = ReportsPage.getReportTitle('Class Grades')
                                })
                                it('should be correct', function () {
                                    expect(reportTitle).toBe('Setup Grade Scales')
                                })
                            })
                            describe('Bingo', function () {
                                before(function () {
                                    ReportsPage.openReport('Bingo')
                                })
                                after(function () {
                                    browser.click('.close-popup')
                                })
                                it('should be opened', function () {
                                    expect(browser.isVisible('.bingo.preview')).toBe(true)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
