import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import {Users} from '../../fixtures/data'
import ReportsPage from '../../pageobjects/ReportsPage'

describe('GradeScaleReport_NoGradeScales', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.user9.credentials)
        HomePage.selectSchoolYear('2021-2022')
    })
    describe('GradeScaleReport-Wizard', () => {
        let action = 'GradeScale_no_gradescale'
        before(function () {
            HomePage.clickClassGradesReport()
        })
        after(function () {
            $('.gs-close').click()
        })

        it(`${action}_wizard_intro_header - should be present`, function () {
            expect(browser.checkElement($('.gs-header'), this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action}_wizard_intro - should be present`, function () {
            expect(browser.checkElement($('.gs-wizard.intro'), this.test.title)).toBeLessThanOrEqual(1)
        })
        describe('SpecifyGradeScale', function () {
            before(function () {
                $('.fa-arrow-right').click()
                browser.pause(2000)
            })
            it(`${action}_wizard_stock_header - should be present`, function () {
                expect(browser.checkElement($('.gs-header'), this.test.title)).toBeLessThanOrEqual(1)
            })
            it(`${action}_wizard_stock - should be present`, function () {
                expect(browser.checkElement($('.gs-wizard-stock'), this.test.title)).toBeLessThanOrEqual(1)
            })
        })
    })
    describe('CanRunParentLetterReport', function () {
        before(function () {
            HomePage.clickParentLetterReport()
            ReportsPage.clickShowForStudentBtn()
        })
        after(function () {
            HomePage.closeModal()
        })
        it(`ResultsTable should be displayed`, function () {
            expect($('.test-results').isDisplayed()).toBe(true)
        })
        it(`Letter should be dislayed`, function () {
            expect($('.letter').isDisplayed()).toBe(true)
        })
    })
    describe('CanRunStudentDetailReport', function () {
        before(function () {
            HomePage.clickStudentDetail()
            ReportsPage.clickRunReport()
        })
        after(function () {
            HomePage.closeModal()
        })
        it(`Test name should be displayed`, function () {
            expect($('.test-name').isDisplayed()).toBe(true)
        })
        it(`Answers should be dislayed`, function () {
            expect($('.correct-answers-container').isDisplayed()).toBe(true)
        })
    })
})
