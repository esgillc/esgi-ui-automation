import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import Global from '../../support/Global'
import {Users, Reports} from '../../fixtures/data'
import SpecialistPage from '../../pageobjects/SpecialistPage'

describe('ReportsSchoolSpecialist - Reports', function () {
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
            LoginPage.login(Users.speacialist.user0.credentials)
            SpecialistPage.clickDataLink()
            HomePage.selectSchoolYear('2021-2022')
            SpecialistPage.clickSpecialistsList()
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Reports', function () {
            const reports = Reports.specialists
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
                    })
                })
                describe('Click School Specialists', function () {
                    before(function () {
                        SpecialistPage.clickSpecialistByName('School Specialists')
                        browser.pause(1000)
                    })
                    it('Reports should be correct', function () {
                        expect(initialReports).toStrictEqual(reports.initial.types)
                    })
                    describe('Run Reports', function () {
                        let reportTitle
                        reports.schoolspecialists.props.forEach(report => {
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
                    describe('Click Specific School (Jennifer Gustafson)  Specialists', function () {
                        before(function () {
                            SpecialistPage.clickSchoolSpecialistByName('Jennifer Gustafson')
                            browser.pause(1000)
                        })
                        it('Reports should be correct', function () {
                            expect(initialReports).toStrictEqual(reports.initial.types)
                        })
                        describe('Run Reports', function () {
                            let reportTitle
                            reports.specificschoolspecialist.props.forEach(report => {
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
                        describe('Click Specialist Groups', function () {
                            before(function () {
                                SpecialistPage.allSpecialistGroup.click()
                                browser.pause(1000)
                            })
                            it('Reports should be correct', function () {
                                expect(initialReports).toStrictEqual(reports.initial.types)
                            })
                            describe('Run Reports', function () {
                                let reportTitle
                                reports.specialistgroups.props.forEach(report => {
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
