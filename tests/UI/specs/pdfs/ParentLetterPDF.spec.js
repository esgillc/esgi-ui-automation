// import LoginPage from '../../pageobjects/LoginPage'
// import HomePage from '../../pageobjects/HomePage'
// import ReportsPage from '../../pageobjects/ReportsPage'
// import {Users} from '../../fixtures/data'
const ComparePdf = require('compare-pdf')

describe('ParentLetterReport', function () {
    it('Should be able to verify same PDFs', async () => {
        let config = require('./config')
        let comparisonResults = await new ComparePdf(config)
            .actualPdfFile('Parent_Letter_2021-1-27.pdf')
            .baselinePdfFile('Parent_Letter_2021-1-5.pdf')
            .compare('byBase64')
        console.log('Compare:::: ', comparisonResults)
        // expect(comparisonResults.status).to.equal('passed')
    })
    // let info
    // before(function () {
    //     info = {
    //         student: 'Ella Ayvazian',
    //         subject: 'SubjectTabTest001',
    //         class: 'Buckhoff\'s Class'
    //     }
    //     LoginPage.open()
    //     LoginPage.login(Users.teacher.credentials)
    //     HomePage.selectSchoolYear('2021-2022')
    //     HomePage.setReportInfo(info)
    //     HomePage.clickParentLetterReport()
    // })
    // after(function () {
    //     HomePage.closeModal()
    // })
    // describe('Include In Parent Teacher', () => {
    //     let payload
    //     let action = 'ParentLetterReport_UncheckQuestionNotes'
    //     before(function () {
    //         payload = {
    //             student: 'Ella Ayvazian',
    //             subject: 'SubjectTabTest001',
    //             class: 'Buckhoff\'s Class',
    //             questionnotes: false,
    //             grades: true,
    //             skippedquestions: true,
    //             date: true,
    //             message: true
    //         }
    //         ReportsPage.verifyReport(payload)
    //     })
    //     after(function () {
    //         ReportsPage.goBack()
    //         HomePage.waitForLoadingToComplete()
    //     })
    // })
})
