import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import {Users} from '../../fixtures/data'

describe('GradeScaleReport_NoGradeScales', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.user9.credentials)
        HomePage.selectSchoolYear('2019-2020')
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
})
