import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import TestRunnerPage from '../../pageobjects/TestRunnerPage'
import TestResultsPage from '../../pageobjects/TestResultsPage'
import expect from 'expect'
// import Global from '../support/Global'

describe('RunTestSuccessModal', function () {
    before(function () {
        const credentials = {
            username: 'automation',
            password: 'automation01!'
        }
        LoginPage.navigate()
        LoginPage.login(credentials)
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
                studentname: 'test test123',
                tab: 'Pre-Reading',
                testname: 'Uppercase Letters'
            }
            // HomePage.deleteAllPastTestDetails(payload) // Delete previous runs
            responses = ['yes', 'no', 'yes']
            HomePage.startTest(payload)
            !process.env.DONTRUNTEST && TestRunnerPage.runTest(responses)
        })
        describe('ResultsPage', function () {
            let expected
            let totalQuestions = 26
            let results = {
                correct: 2,
                incorrect: 1,
                untested: 23
            }
            let resultsPageOutput
            before(function () {
                expected = {
                    correctpercentage: '8%',
                    incorrectpercentage: '92%',
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
                    // expected.resultlabel = `Correct answers\n${homeResultLabel[1].trim()}`
                    const homepageOutput = HomePage.graphTextObj(payload)
                    console.log('RunTest4: ', homepageOutput)
                    expect(homepageOutput).toStrictEqual(expected)
                })
            })
            describe('Flashcards', function () {
                let flashcardsResults
                before(function () {
                    HomePage.clickFlashcardsReport()
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
