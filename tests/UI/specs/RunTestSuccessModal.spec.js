import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import {Users} from '../fixtures/data'
import TestRunnerPage from '../pageobjects/TestRunnerPage'
import TestResultsPage from '../pageobjects/TestResultsPage'
import expect from 'expect'
// import Global from '../support/Global'

describe('RunTestSuccessModal', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.legacy.teacheradmin.credentials)
        HomePage.selectSchoolYear('2021-2022')

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
                studentname: 'Student001 Student001',
                tab: '1st - ELA',
                testname: 'Segmenting'
            }
            // HomePage.deleteAllPastTestDetails(payload) // Delete previous runs
            responses = ['yes', 'no', 'yes']
            HomePage.startTest(payload)
            !process.env.DONTRUNTEST && TestRunnerPage.runTest(responses)
        })
        it('Done', function () {
        })
        describe('ResultsPage', function () {
            let expected
            let totalQuestions = 10
            let results = {
                correct: 2,
                incorrect: 1,
                untested: 7
            }
            let resultsPageOutput
            before(function () {
                expected = {
                    correctpercentage: '20%',
                    incorrectpercentage: '80%',
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
                    console.log('HomepageOutput: ', homepageOutput)
                    expect(homepageOutput).toStrictEqual(expected)
                })
            })
            describe('Flashcards', function () {
                let flashcardsResults
                before(function () {
                    HomePage.clickFlashcardsReport()
                    let results = $('td.test-name-cell').$('..').$$('.results-cell')
                    flashcardsResults = {
                        correct: parseInt(results[0].getText()),
                        incorrect: parseInt(results[1].getText()),
                        untested: parseInt(results[2].getText())
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
