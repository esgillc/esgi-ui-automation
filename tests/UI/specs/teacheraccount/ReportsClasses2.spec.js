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
            LoginPage.login(Users.teacher.user8.credentials)
            HomePage.selectSchoolYear('2019-2020')
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
                        describe('ClickAllClasses', function () {
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
                                    ReportsPage.closeModal()
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
