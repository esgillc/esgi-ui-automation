import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import {Users} from '../../fixtures/data'
import TestRunnerPage from '../../pageobjects/TestRunnerPage'
import TestResultsPage from '../../pageobjects/TestResultsPage'

describe('Login page', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user0.credentials)
        HomePage.selectSchoolYear('2020-2021')
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
                studentname: 'Samuel Dennick',
                tab: 'SubjectTabTest001',
                testname: 'Write Uppercase Letters'
            }
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
                    correctpercentage: '23%',
                    incorrectpercentage: '77%',
                    resultlabel: 'Correct answers: 6/26'
                }
                resultsPageOutput = TestResultsPage.graphTextObj()
                console.log('resultsPageOutput: ', resultsPageOutput)
            })
            it('should be present', function () {
                expect(resultsPageOutput).toStrictEqual(expected)
            })
            describe('Hompage', function () {
                before(function () {
                    $('.btn-close').click()
                    HomePage.waitForLoadingToComplete()
                })
                it('should be present', function () {
                    console.log(HomePage.graphTextObj(payload))
                    expect(HomePage.graphTextObj(payload)).toStrictEqual(resultsPageOutput)
                })
            })
        })
    })
})
