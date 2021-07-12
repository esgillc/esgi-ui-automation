import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import {Users} from '../../fixtures/data'
import TestRunnerPage from '../../pageobjects/TestRunnerPage'
import TestResultsPage from '../../pageobjects/TestResultsPage'
import expect from 'expect'
// import Global from '../support/Global'

describe('RunTestSuccessModal', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user1.credentials)
        HomePage.selectSchoolYear('2020-2021')
        // Global.configureTestCompletedDisplay()
    })
    it('should be on Home page', function () {
        expect(HomePage.title).toBe(HomePage.getTitle())
    })
    describe('HomePage - RunTest', function () {
        let responses
        let payload
        before(function () {
            payload = {
                classname: 'Class001',
                studentname: 'Jane Smith',
                tab: 'Reading',
                testname: 'Lowercase Letters'
            }
            // HomePage.deleteAllPastTestDetails(payload) // Delete previous runs
            responses = ['yes', 'yes', 'yes', 'yes']
            HomePage.startTest(payload)
            !process.env.DONTRUNTEST && TestRunnerPage.runTest(responses)
        })
        it('Done', function () {
        })
        describe('ResultsPage', function () {
            let expected
            let totalQuestions = 28
            let results = {
                correct: 4,
                incorrect: 24,
                untested: 24
            }
            let resultsPageOutput
            before(function () {
                expected = {
                    correctpercentage: '14%',
                    incorrectpercentage: '86%',
                    resultlabel: `Correct answers: ${results.correct}/${totalQuestions}`
                }
                if (!process.env.DONTRUNTEST) {
                    resultsPageOutput = TestResultsPage.graphTextObj()
                    console.log('resultsPageOutput: ', resultsPageOutput)
                }
            })
            it('should be present', function () {
                if (!process.env.DONTRUNTEST) {
                    expect(resultsPageOutput).toStrictEqual(expected)
                }
            })
            describe('Hompage', function () {
                before(function () {
                    if (!process.env.DONTRUNTEST) {
                        $('.topCloseContainer svg').click()
                        HomePage.waitForLoadingToComplete()
                    }
                })
                it('should be present', function () {
                    // const homeResultLabel = expected.resultlabel.split(':')
                    // expected.resultlabel = `correct Answers\n${homeResultLabel[1].trim()}`
                    const homepageOutput = HomePage.graphTextObj(payload)
                    console.log('RunTest2: ', homepageOutput)
                    expect(homepageOutput).toStrictEqual(expected)
                })
            })
            describe.skip('Flashcards', function () {
                let flashcardsResults
                before(function () {
                    HomePage.clickFlashcardsReport()
                    browser.pause(3000)
                    let testType = $$(`[data-name="${payload.testname}"]`)[1]
                    flashcardsResults = {
                        correct: parseInt(testType.$('[data-bind="text: correct"]').getText()),
                        incorrect: parseInt(testType.$('[data-bind="text: incorrect"]').getText()),
                        untested: parseInt(testType.$('[data-bind="text: untested"]').getText())
                    }
                    HomePage.waitForLoadingToComplete()
                })
                it('should be correct', function () {
                    expect(flashcardsResults).toStrictEqual(results)
                })
            })
        })
    })
})
