import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'

describe('TeacherAccountPageTest', function () {
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
            browser.refresh()
            LoginPage.waitForLoadingToComplete()
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Controls', function () {
            describe('Track Name', function () {
                let trackName
                before(function () {
                    trackName = HomePage.trackName
                })
                it('should show the correct text', function () {
                    expect(trackName.getText()).toBe('Track Name: Glendale')
                })
                it('should be visible', function () {
                    expect(trackName.isDisplayed()).toBe(true)
                })
                it('should be enabled', function () {
                    expect(trackName.isEnabled()).toBe(true)
                })
            })
            describe('TrackLink', function () {
                let trackNameLink
                before(function () {
                    trackNameLink = HomePage.trackNameLink
                })
                it('should be visible', function () {
                    expect(trackNameLink.isDisplayed()).toBe(true)
                })
                it('should be enabled', function () {
                    expect(trackNameLink.isEnabled()).toBe(true)
                })
                it('should be clickable', function () {
                    expect(trackNameLink.isClickable()).toBe(true)
                })
            })
            describe('School Year', function () {
                let schoolYear
                before(function () {
                    schoolYear = HomePage.schoolYear
                })
                it('should show the correct text', function () {
                    expect(schoolYear.getText()).toContain('School Year:')
                })
                it('should be visible', function () {
                    expect(schoolYear.isDisplayed()).toBe(true)
                })
                it('should be enabled', function () {
                    expect(schoolYear.isEnabled()).toBe(true)
                })
            })
        })
        // describe('Reports', function () {
        //     describe('Types', function () {
        //         let reports
        //         before(function () {
        //             reports = HomePage.getReports()
        //         })
        //         it('should show reports', function () {
        //             expect(reports).toStrictEqual(Reports.types)
        //         })
        //         describe('OpenCloseReports', function () {
        //             describe('Class', function () {
        //                 before(function () {
        //                     HomePage.clickClass('Buckhoff\'s Class')
        //                 })
        //                 let reportTitle
        //                 Reports.allclasses.forEach(report => {
        //                     describe(report.name, function () {
        //                         before(function () {
        //                             reportTitle = ReportsPage.getReportTitle(report.name)
        //                         })
        //                         it('should be correct', function () {
        //                             expect(reportTitle).toBe(report.title)
        //                         })
        //                     })
        //                 })
        //                 describe('Class Grades', function () {
        //                     before(function () {
        //                         reportTitle = ReportsPage.getReportTitle('Class Grades')
        //                     })
        //                     it('should be correct', function () {
        //                         expect(reportTitle).toBe('Class Grade Report')
        //                     })
        //                 })
        //                 describe('Bingo', function () {
        //                     before(function () {
        //                         ReportsPage.openReport('Bingo')
        //                     })
        //                     after(function () {
        //                         browser.click('.close-popup')
        //                     })
        //                     it('should be opened', function () {
        //                         expect(browser.isVisible('.bingo.preview')).toBe(true)
        //                     })
        //                 })
        //             })
        //             describe('AllClasses', function () {
        //                 before(function () {
        //                     HomePage.clickAllClasses()
        //                 })
        //                 let reportTitle
        //                 Reports.class.forEach(report => {
        //                     describe(report.name, function () {
        //                         before(function () {
        //                             reportTitle = ReportsPage.getReportTitle(report.name)
        //                         })
        //                         it('should be correct', function () {
        //                             expect(reportTitle).toBe(report.title)
        //                         })
        //                     })
        //                 })
        //                 describe('Bingo', function () {
        //                     before(function () {
        //                         ReportsPage.openReport('Bingo')
        //                     })
        //                     after(function () {
        //                         browser.click('.close-popup')
        //                     })
        //                     it('should be opened', function () {
        //                         expect(browser.isVisible('.bingo.preview')).toBe(true)
        //                     })
        //                 })
        //             })
        //         })
        //     })
        // })
    })
})
