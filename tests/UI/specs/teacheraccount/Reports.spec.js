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
            LoginPage.login(Users.teacher.credentials)
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Reports', function () {
            describe('Types', function () {
                let reports
                before(function () {
                    reports = HomePage.getReports()
                })
                it('should show reports', function () {
                    expect(reports).to.eql(Reports.types)
                })
                describe('OpenCloseReports', function () {
                    describe('Class', function () {
                        before(function () {
                            HomePage.clickClass('Buckhoff\'s Class')
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
                                expect(reportTitle).toBe('Class Grade Report')
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
                    describe('AllClasses', function () {
                        before(function () {
                            HomePage.clickAllClasses()
                        })
                        let reportTitle
                        Reports.class.forEach(report => {
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
