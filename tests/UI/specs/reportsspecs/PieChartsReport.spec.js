import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('PieChartsReport', function () {
    let credentials
    before(function () {
        credentials = !process.env.SECONDLOGIN ? Users.teacher.credentials : Users.teacher.secondary.credentials
        LoginPage.open()
        LoginPage.login(credentials)

        // Set the teacher dropdowns
        const teacherInfo = {
            student: 'Ella Ayvazian',
            subject: 'SubjectTabTest001',
            class: 'Buckhoff\'s Class'
        }
        HomePage.selectSchoolYear('2019-2020')
        HomePage.clickPieCharts()
        ReportsPage.setPieChartsReportInfo(teacherInfo)
    })
    after(function () {
        ReportsPage.closeModal()
    })
    describe('PieChartsReport-AllUnchecked', () => {
        let action = 'PieChartsReport-AllUnchecked'
        let payload
        before(function () {
            payload = {
                showeachstudent: false,
                printcolor: false
            }
            ReportsPage.verifyPieChartsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.firstModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('PieChartsReport-PrintInColorChecked', () => {
        let action = 'PieChartsReport-PrintInColorChecked'
        let payload
        before(function () {
            payload = {
                showeachstudent: false,
                printcolor: true
            }
            ReportsPage.verifyPieChartsReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.firstModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    // describe('PieChartsReport-ShowEachStudentChecked', () => {
    //     let action = 'PieChartsReport-ShowEachStudentChecked'
    //     let payload
    //     before(function () {
    //         payload = {
    //             student: 'Ella Ayvazian',
    //             subject: 'SubjectTabTest001',
    //             class: 'Buckhoff\'s Class',
    //             showeachstudent: true,
    //             printcolor: false
    //         }
    //         ReportsPage.verifyPieChartsReport(payload)
    //     })
    //     it(`${action} - should be correct`, function () {
    //         expect(browser.checkElement(ReportsPage.firstModalContent, this.test.title)).toBeLessThanOrEqual(1)
    //     })
    // })
    // describe('PieChartsReport-AllChecked', () => {
    //     let action = 'PieChartsReport-AllChecked'
    //     let payload
    //     before(function () {
    //         payload = {
    //             student: 'Ella Ayvazian',
    //             subject: 'SubjectTabTest001',
    //             class: 'Buckhoff\'s Class',
    //             showeachstudent: true,
    //             printcolor: true
    //         }
    //         ReportsPage.verifyPieChartsReport(payload)
    //     })
    //     it(`${action} - should be correct`, function () {
    //         expect(browser.checkElement(ReportsPage.firstModalContent, this.test.title)).toBeLessThanOrEqual(1)
    //     })
    // })
})
