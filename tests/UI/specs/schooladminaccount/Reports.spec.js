import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import Global from '../../support/Global'
import {Users, Reports} from '../../fixtures/data'

describe('SchoolAccount - Reports', function () {
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
            HomePage.selectSchoolYear('2021-2022')
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Reports', function () {
            const reports = Reports.schooladmin
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
                        describe('Click Specific Teacher', function () {
                            let specificTeacherReports
                            let specificTeacher = reports.teacher
                            before(function () {
                                HomePage.clickTeacher('Suzanne Buckhoff')
                                specificTeacherReports = HomePage.getReports()
                            })
                            it('specific Teacher Reports: should be correct', function () {
                                expect(specificTeacherReports).toStrictEqual(specificTeacher.types)
                            })
                            let reportTitle
                            specificTeacher.props.forEach(report => {
                                describe(report.name, function () {
                                    before(function () {
                                        reportTitle = ReportsPage.getReportTitle(report.name)
                                    })
                                    it('should be correct', function () {
                                        expect(reportTitle).toBe(report.title)
                                    })
                                })
                            })
                            describe('ClickAllClasses', function () {
                                let allClasses = reports.classes
                                let allClassesReports
                                before(function () {
                                    HomePage.clickAllClasses()
                                    allClassesReports = HomePage.getReports()
                                })
                                it('AllClasses Reports should be correct', function () {
                                    expect(allClassesReports).toStrictEqual(allClasses.types)
                                })
                            })
                            describe('Click a specific Group', function () {
                                let specificGroupReports = reports.group
                                let groupReports
                                before(function () {
                                    HomePage.clickGroup('Buckhoff\'s Class', 'Group002')
                                    groupReports = HomePage.getReports()
                                })
                                it('Initial Reports: should be correct', function () {
                                    expect(groupReports).toStrictEqual(specificGroupReports.types)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
