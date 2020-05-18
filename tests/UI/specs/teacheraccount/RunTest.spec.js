import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import {Users} from '../../fixtures/data'
import TestRunnerPage from '../../pageobjects/TestRunnerPage'
import TestResultsPage from '../../pageobjects/TestResultsPage'

describe('Login page', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.credentials)
    })
    it('should be on Home page', function () {
        expect(HomePage.title).toBe(HomePage.getTitle())
    })
    describe('HomePage - RunTest', function () {
        let responses
        let payload
        before(function () {
            payload = {studentname: 'Samuel Dennick', testname: 'Number Recognition'}
            HomePage.deleteAllPastTestDetails(payload) // Delete previous runs
            responses = ['yes', 'yes', 'no', 'yes', 'no', 'yes', 'yes', 'yes']
            HomePage.startTest(payload)
            TestRunnerPage.runTest(responses)
        })
        describe('ResultsPage', function () {
            let expected
            let resultsPageOutput
            before(function () {
                expected = {
                    correctpercentage: '19%',
                    incorrectpercentage: '81%',
                    resultlabel: 'Correct answers: 6/31'
                }
                resultsPageOutput = TestResultsPage.graphTextObj()
                console.log('resultsPageOutput: ', resultsPageOutput)
            })
            it('should be present', function () {
                expect(resultsPageOutput).toStrictEqual(expected)
            })
            describe('Hompage', function () {
                before(function () {
                    TestResultsPage.closeModal()
                })
                it('should be present', function () {
                    console.log(HomePage.graphTextObj(payload))
                    expect(HomePage.graphTextObj(payload)).toStrictEqual(resultsPageOutput)
                })
            })
        })
    })
})
