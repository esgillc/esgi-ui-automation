import LoginPage from '../../pageobjects/LoginPage'
import TestRunnerPage from '../../pageobjects/TestRunnerPage'
import TestResultsPage from '../../pageobjects/TestResultsPage'
import HomePage from '../../pageobjects/LegacyPages/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'

describe('Legacy - HomePage', function () {
    before(function () {
        LoginPage.navigate()
    })
    after(function () {
        Global.logout()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).to.equal(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(Users.legacy.teacheradmin.credentials)
        })
        it('should be logged in', function () {
            expect(HomePage.title).to.equal(HomePage.getTitle())
        })
        describe('HomePage - RunTest', function () {
            let responses
            let payload
            before(function () {
                payload = {classname: 'Class001', studentname: 'TakeTest001 Student001', testname: 'Add Within 100'}
                HomePage.deleteAllPastTestDetails(payload) // Delete previous runs
                responses = ['yes', 'yes', 'no']
                // HomePage.clickClassByName('Class001')
                HomePage.runTest(payload)
                TestRunnerPage.runTest(responses)
            })
            it('should be logged in', function () {

            })
            describe('ResultsPage', function () {
                let expected
                let resultsPageOutput
                before(function () {
                    expected = {
                        correctpercentage: '50%',
                        incorrectpercentage: '50%',
                        resultlabel: 'Correct answers: 2/4'
                    }
                    resultsPageOutput = TestResultsPage.graphTextObj()
                })
                describe('Results', function () {
                    it('should be correct', function () {
                        expect(resultsPageOutput).to.deep.equal(expected)
                    })
                })
                describe('Hompage', function () {
                    before(function () {
                        TestResultsPage.closeModal()
                    })
                    it('should be present', function () {
                        let result = HomePage.graphTextObj(payload)
                        console.log('HomePageResult: ', result)
                        expect(result).to.deep.equal(resultsPageOutput)
                    })
                })
            })
        })
    })
})
