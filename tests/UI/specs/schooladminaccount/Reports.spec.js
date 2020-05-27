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
                            let specificTeacher = reports.teacher
                            before(function () {
                                HomePage.clickTeacher('Suzanne Buckhoff')
                            })
                            it.only('specific Teacher Reports: should be correct', function () {
                                console.log('specificTeacher Reports: ', specificTeacher)
                                expect(specificTeacher).toStrictEqual(specificTeacher.types)
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
                            describe('Class Grades', function () {
                                before(function () {
                                    reportTitle = ReportsPage.getReportTitle('Class Grades')
                                })
                                it('should be correct', function () {
                                    expect(reportTitle).toBe('Class Grade Report')
                                })
                            })
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
                            describe('Click a specific Group', function () {
                                let groupReports
                                before(function () {
                                    HomePage.clickGroup('Buckhoff\'s Class', 'Group123')
                                    groupReports = HomePage.getReports()
                                })
                                it('Initial Reports: should be correct', function () {
                                    expect(groupReports).toStrictEqual(reports.group.types)
                                })
                                // let reportTitle
                                // reports.group.props.forEach(report => {
                                //     describe(report.name, function () {
                                //         before(function () {
                                //             reportTitle = ReportsPage.getReportTitle(report.name)
                                //         })
                                //         it('should be correct', function () {
                                //             expect(reportTitle).toBe(report.title)
                                //         })
                                //     })
                                // })
                            })
                        })
                    })
                })
            })
        })
    })
})
