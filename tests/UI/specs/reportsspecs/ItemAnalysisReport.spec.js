import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('ItemAnalysisReport', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.credentials)

        // Set the teacher dropdowns
        const teacherInfo = {
            test: 'Write Uppercase Letters',
            subject: 'SubjectTabTest001',
            class: 'Buckhoff\'s Class'
        }
        HomePage.selectSchoolYear('2019-2020')
        HomePage.clickItemAnalysis()
        ReportsPage.setItemAnalysisInfo(teacherInfo)
    })
    after(function () {
        ReportsPage.closeModal()
    })
    describe('ItemAnalysisReport-LeastKnown', () => {
        let action = 'ItemAnalysisReport-LeastKnown'
        let payload
        before(function () {
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                leastknown: true,
                mostknown: false,
                questionorder: false,
                alphabetical: false,
                nottestedasincorrect: false
            }
            ReportsPage.verifyItemAnalysisReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ItemAnalysisReport-LeastKnown_DisplayNotTestedAsIncorrect', () => {
        let action = 'ItemAnalysisReport-LeastKnown_DisplayNotTestedAsIncorrect'
        let payload
        before(function () {
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                leastknown: true,
                mostknown: false,
                questionorder: false,
                alphabetical: false,
                nottestedasincorrect: true
            }
            ReportsPage.verifyItemAnalysisReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ItemAnalysisReport-MostKnown', () => {
        let action = 'ItemAnalysisReport-MostKnown'
        let payload
        before(function () {
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                leastknown: false,
                mostknown: true,
                questionorder: false,
                alphabetical: false,
                nottestedasincorrect: false
            }
            ReportsPage.verifyItemAnalysisReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ItemAnalysisReport-MostKnown_DisplayNotTestedAsIncorrect', () => {
        let action = 'ItemAnalysisReport-MostKnown_DisplayNotTestedAsIncorrect'
        let payload
        before(function () {
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                leastknown: false,
                mostknown: true,
                questionorder: false,
                alphabetical: false,
                nottestedasincorrect: true
            }
            ReportsPage.verifyItemAnalysisReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ItemAnalysisReport-QuestionOrder', () => {
        let action = 'ItemAnalysisReport-QuestionOrder'
        let payload
        before(function () {
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                leastknown: false,
                mostknown: false,
                questionorder: true,
                alphabetical: false,
                nottestedasincorrect: false
            }
            ReportsPage.verifyItemAnalysisReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ItemAnalysisReport-QuestionOrder_DisplayNotTestedAsIncorrect', () => {
        let action = 'ItemAnalysisReport-QuestionOrder_DisplayNotTestedAsIncorrect'
        let payload
        before(function () {
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                leastknown: false,
                mostknown: false,
                questionorder: true,
                alphabetical: false,
                nottestedasincorrect: true
            }
            ReportsPage.verifyItemAnalysisReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ItemAnalysisReport-Alphabetical', () => {
        let action = 'ItemAnalysisReport-Alphabetical'
        let payload
        before(function () {
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                leastknown: false,
                mostknown: false,
                questionorder: false,
                alphabetical: true,
                nottestedasincorrect: false
            }
            ReportsPage.verifyItemAnalysisReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('ItemAnalysisReport-Alphabetical_DisplayNotTestedAsIncorrect', () => {
        let action = 'ItemAnalysisReport-Alphabetical_DisplayNotTestedAsIncorrect'
        let payload
        before(function () {
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                leastknown: false,
                mostknown: false,
                questionorder: false,
                alphabetical: true,
                nottestedasincorrect: true
            }
            ReportsPage.verifyItemAnalysisReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
})
