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
            LoginPage.login(Users.teacher.user7.credentials)
            HomePage.selectSchoolYear('2021-2022')
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Reports', function () {
            const reports = Reports.teacher
            describe('Types', function () {
                describe('Run Reports', function () {
                    describe('Click a specific Group', function () {
                        let groupReports
                        before(function () {
                            HomePage.clickGroup('Class001', 'Group001')
                            groupReports = HomePage.getReports()
                        })
                        it('Initial Reports: should be correct', function () {
                            expect(groupReports).toStrictEqual(reports.group.types)
                        })
                        let reportTitle
                        reports.group.props.forEach(report => {
                            describe(report.name, function () {
                                before(function () {
                                    reportTitle = ReportsPage.getReportTitle(report.name)
                                })
                                it('should be correct', function () {
                                    expect(reportTitle).toStrictEqual(report.title)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
