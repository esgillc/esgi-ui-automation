import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import Global from '../../support/Global'
import {Users, Reports} from '../../fixtures/data'

describe('SchoolAdminAccount - Reports', function () {
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
            LoginPage.login(Users.schooladmin.credentials)
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Reports', function () {
            describe('Types', function () {
                let reports
                const schoolAdminReports = Reports.schooladmin
                before(function () {
                    reports = HomePage.getReports()
                })
                it('should show reports', function () {
                    expect(reports).toStrictEqual(schoolAdminReports.allteachers.types)
                })
                describe('OpenCloseReports', function () {
                    describe('Teacher', function () {
                        let reports
                        before(function () {
                            HomePage.clickTeacher('Justine Baldwin') // Click to show teacher reports
                            reports = HomePage.getReports()
                        })
                        it('should show reports', function () {
                            console.log(reports)
                            expect(reports).toStrictEqual(schoolAdminReports.teacher.types)
                        })
                        let reportTitle
                        schoolAdminReports.teacher.obj.forEach(report => {
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
                                expect(reportTitle).toBe('Setup Grading Scales')
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
                    describe('AllTeachers', function () {
                        let reports
                        before(function () {
                            HomePage.clickAllTeachers() // Click to show All Teachers reports
                            reports = HomePage.getReports()
                        })
                        it('should show reports', function () {
                            expect(reports).toStrictEqual(schoolAdminReports.allteachers.types)
                        })
                        let reportTitle
                        schoolAdminReports.allteachers.objs.forEach(report => {
                            describe(report.name, function () {
                                before(function () {
                                    reportTitle = ReportsPage.getReportTitle(report.name)
                                })
                                it('should be correct', function () {
                                    expect(reportTitle).toBe(report.title)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
