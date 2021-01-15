import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'

describe('BingoReport', function () {
    let teacherInfo
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.credentials)

        // Set the teacher dropdowns
        teacherInfo = {
            student: 'Ella Ayvazian',
            subject: 'SubjectTabTest001',
            class: 'Buckhoff\'s Class',
            group: 'All Students',
            test: 'Write Uppercase Letters'
        }
        HomePage.selectSchoolYear('2019-2020')
    })
    describe('BingoReport-CardSize3x3_Print1_Easy_InClassroom', () => {
        let action1 = 'BingoReport-CardSize3x3_Print1_Easy'
        let action2 = 'BingoReport-CardSize3x3_Print1_Easy_InClassroom'
        let action3 = 'BingoReport-CardSize3x3_Print1_Easy_InClassroom_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: true,
                printperpage: false,
                cardsize5x5: false,
                easy: true,
                medium: false,
                hard: false,
                inclassroom: true,
                atstudenthome: false
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_PrintPerPage_Easy_InClassroom', () => {
        let action1 = 'BingoReport-CardSize3x3_PrintPerPage_Easy'
        let action2 = 'BingoReport-CardSize3x3_PrintPerPage_Easy_InClassroom'
        let action3 = 'BingoReport-CardSize3x3_PrintPerPage_Easy_InClassroom_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: false,
                printperpage: true,
                cardsize5x5: false,
                easy: true,
                medium: false,
                hard: false,
                inclassroom: true,
                atstudenthome: false
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_Print1_Medium_InClassroom', () => {
        let action1 = 'BingoReport-CardSize3x3_Print1_Medium'
        let action2 = 'BingoReport-CardSize3x3_Print1_Medium_InClassroom'
        let action3 = 'BingoReport-CardSize3x3_Print1_Medium_InClassroom_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: true,
                printperpage: false,
                cardsize5x5: false,
                easy: false,
                medium: true,
                hard: false,
                inclassroom: true,
                atstudenthome: false
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_PrintPerPage_Medium_InClassroom', () => {
        let action1 = 'BingoReport-CardSize3x3_PrintPerPage_Medium'
        let action2 = 'BingoReport-CardSize3x3_PrintPerPage_Medium_InClassroom'
        let action3 = 'BingoReport-CardSize3x3_PrintPerPage_Medium_InClassroom_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: false,
                printperpage: true,
                cardsize5x5: false,
                easy: false,
                medium: true,
                hard: false,
                inclassroom: true,
                atstudenthome: false
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_Print1_Hard_InClassroom', () => {
        let action1 = 'BingoReport-CardSize3x3_Print1_Hard'
        let action2 = 'BingoReport-CardSize3x3_Print1_Hard_InClassroom'
        let action3 = 'BingoReport-CardSize3x3_Print1_Hard_InClassroom_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: true,
                printperpage: false,
                cardsize5x5: false,
                easy: false,
                medium: false,
                hard: true,
                inclassroom: true,
                atstudenthome: false
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_PrintPerPage_Hard_InClassroom', () => {
        let action1 = 'BingoReport-CardSize3x3_PrintPerPage_Hard'
        let action2 = 'BingoReport-CardSize3x3_PrintPerPage_Hard_InClassroom'
        let action3 = 'BingoReport-CardSize3x3_PrintPerPage_Hard_InClassroom_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: false,
                printperpage: true,
                cardsize5x5: false,
                easy: false,
                medium: false,
                hard: true,
                inclassroom: true,
                atstudenthome: false
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize5x5_Easy_InClassroom', () => {
        let action1 = 'BingoReport-CardSize5x5_Easy'
        let action2 = 'BingoReport-CardSize5x5_Easy_InClassroom'
        let action3 = 'BingoReport-CardSize5x5_Easy_InClassroom_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: false,
                print1: false,
                printperpage: false,
                cardsize5x5: true,
                easy: true,
                medium: false,
                hard: false,
                inclassroom: true,
                atstudenthome: false
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            // ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize5x5_Medium_InClassroom', () => {
        let action1 = 'BingoReport-CardSize5x5_Medium'
        let action2 = 'BingoReport-CardSize5x5_Medium_InClassroom'
        let action3 = 'BingoReport-CardSize5x5_Medium_InClassroom_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: false,
                print1: false,
                printperpage: false,
                cardsize5x5: true,
                easy: false,
                medium: true,
                hard: false,
                inclassroom: true,
                atstudenthome: false
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize5x5_Hard_InClassroom', () => {
        let action1 = 'BingoReport-CardSize5x5_Hard'
        let action2 = 'BingoReport-CardSize5x5_Hard_InClassroom'
        let action3 = 'BingoReport-CardSize5x5_Hard_InClassroom_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: false,
                print1: false,
                printperpage: false,
                cardsize5x5: true,
                easy: false,
                medium: false,
                hard: true,
                inclassroom: true,
                atstudenthome: false
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_Print1_Easy_AtStudentHome', () => {
        let action1 = 'BingoReport-CardSize3x3_Print1_Easy_ASH'
        let action2 = 'BingoReport-CardSize3x3_Print1_Easy_AtStudentHome'
        let action3 = 'BingoReport-CardSize3x3_Print1_Easy_AtStudentHome_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: true,
                printperpage: false,
                cardsize5x5: false,
                easy: true,
                medium: false,
                hard: false,
                inclassroom: false,
                atstudenthome: true
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_PrintPerPage_Easy_AtStudentHome', () => {
        let action1 = 'BingoReport-CardSize3x3_PrintPerPage_Easy_ASH'
        let action2 = 'BingoReport-CardSize3x3_PrintPerPage_Easy_AtStudentHome'
        let action3 = 'BingoReport-CardSize3x3_PrintPerPage_Easy_AtStudentHome_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: false,
                printperpage: true,
                cardsize5x5: false,
                easy: true,
                medium: false,
                hard: false,
                inclassroom: false,
                atstudenthome: true
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_Print1_Medium_AtStudentHome', () => {
        let action1 = 'BingoReport-CardSize3x3_Print1_Medium_ASH'
        let action2 = 'BingoReport-CardSize3x3_Print1_Medium_AtStudentHome'
        let action3 = 'BingoReport-CardSize3x3_Print1_Medium_AtStudentHome_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: true,
                printperpage: false,
                cardsize5x5: false,
                easy: false,
                medium: true,
                hard: false,
                inclassroom: false,
                atstudenthome: true
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_PrintPerPage_Medium_AtStudentHome', () => {
        let action1 = 'BingoReport-CardSize3x3_PrintPerPage_Medium_ASH'
        let action2 = 'BingoReport-CardSize3x3_PrintPerPage_Medium_AtStudentHome'
        let action3 = 'BingoReport-CardSize3x3_PrintPerPage_Medium_AtStudentHome_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: false,
                printperpage: true,
                cardsize5x5: false,
                easy: false,
                medium: true,
                hard: false,
                inclassroom: false,
                atstudenthome: true
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_Print1_Hard_AtStudentHome', () => {
        let action1 = 'BingoReport-CardSize3x3_Print1_Hard_ASH'
        let action2 = 'BingoReport-CardSize3x3_Print1_Hard_AtStudentHome'
        let action3 = 'BingoReport-CardSize3x3_Print1_Hard_AtStudentHome_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: true,
                printperpage: false,
                cardsize5x5: false,
                easy: false,
                medium: false,
                hard: true,
                inclassroom: false,
                atstudenthome: true
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize3x3_PrintPerPage_Hard_AtStudentHome', () => {
        let action1 = 'BingoReport-CardSize3x3_PrintPerPage_Hard_ASH'
        let action2 = 'BingoReport-CardSize3x3_PrintPerPage_Hard_AtStudentHome'
        let action3 = 'BingoReport-CardSize3x3_PrintPerPage_Hard_AtStudentHome_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: true,
                print1: false,
                printperpage: true,
                cardsize5x5: false,
                easy: false,
                medium: false,
                hard: true,
                inclassroom: false,
                atstudenthome: true
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize5x5_Easy_AtStudentHome', () => {
        let action1 = 'BingoReport-CardSize5x5_Easy_ASH'
        let action2 = 'BingoReport-CardSize5x5_Easy_AtStudentHome'
        let action3 = 'BingoReport-CardSize5x5_Easy_AtStudentHome_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: false,
                print1: false,
                printperpage: false,
                cardsize5x5: true,
                easy: true,
                medium: false,
                hard: false,
                inclassroom: false,
                atstudenthome: true
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize5x5_Medium_AtStudentHome', () => {
        let action1 = 'BingoReport-CardSize5x5_Medium_ASH'
        let action2 = 'BingoReport-CardSize5x5_Medium_AtStudentHome'
        let action3 = 'BingoReport-CardSize5x5_Medium_AtStudentHome_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: false,
                print1: false,
                printperpage: false,
                cardsize5x5: true,
                easy: false,
                medium: true,
                hard: false,
                inclassroom: false,
                atstudenthome: true
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-CardSize5x5_Hard_AtStudentHome', () => {
        let action1 = 'BingoReport-CardSize5x5_Hard_ASH'
        let action2 = 'BingoReport-CardSize5x5_Hard_AtStudentHome'
        let action3 = 'BingoReport-CardSize5x5_Hard_AtStudentHome_PreviewQuestions'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: false,
                print1: false,
                printperpage: false,
                cardsize5x5: true,
                easy: false,
                medium: false,
                hard: true,
                inclassroom: false,
                atstudenthome: true
            }
        })
        after(function () {
            ReportsPage.closeModal()
        })
        it(`${action1} - should be correct`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action3} - should be correct`, function () {
            ReportsPage.verifyBingoPreviewQuestions()
            expect(browser.checkElement(ReportsPage.reportFirstModal, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('BingoReport-BingoGame', () => {
        let action1 = 'BingoReport-BingoGame'
        let payload
        before(function () {
            HomePage.clickBingo()
            ReportsPage.clickLetsBegin()
            ReportsPage.setBingoPlayers(teacherInfo)
            ReportsPage.clickNextPageBtn()
            ReportsPage.setBingoInfo(teacherInfo)
            ReportsPage.clickNextPageBtn()
            payload = {
                test: 'Write Uppercase Letters',
                subject: 'SubjectTabTest001',
                class: 'Buckhoff\'s Class',
                cardsize3x3: false,
                print1: false,
                printperpage: false,
                cardsize5x5: true,
                easy: false,
                medium: false,
                hard: true,
                inclassroom: false,
                atstudenthome: true
            }
        })
        it.skip(`${action1} - should be downloaded`, function () {
            ReportsPage.verifyBingoCardSizeAndDifficulty(payload)
            ReportsPage.clickNextPageBtn()
            ReportsPage.verifyBingoPlay(payload)
            const BingoRegex = /^Bingo/
            console.log(expect.stringMatching(BingoRegex))
            expect(ReportsPage.verifyBingoDownloadTitle()).toEqual(expect.stringMatching(BingoRegex))
        })
    })
})
