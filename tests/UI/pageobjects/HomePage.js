'use strict'
import Page from './Page'
import Helper from '../support/Helper'

class HomePage extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/esgi'

        // Page Colors
        this.COLORS = Helper.COLORS

        // Subject Tabs
        this.subjectTabComponentCss = '.subject-tabs'

        this.subjectTabCss = `${this.subjectTabComponentCss} .subject-tab`

        this.leftMenuCss = '.main .left'
        this.leftMenuCollaspeButtonCss = `${this.leftMenuCss} .collapse-button`

        this.components = {
            allclasses: 'Classes',
            allgroups: 'Groups',
            allstudents: 'Students',
            allteachers: 'Teachers'

        }
        // All Components
        this.componentsObjCss = {
            titlecss: '.title',
            editcss: '.edit',
            expandcollaspecss: '.roll'
        }

        this.reports = {
            parentletter: 'Parent Letter',
            flashcards: 'Flashcards',
            bingo: 'Bingo',
            studentdetail: 'Student Detail'
        }

        this.testcardObjCss = {
            titlecss: '.title',
            ellipsiscss: '.edit-icon',
            piecss: '.highcharts-series-group',
            testcss: '.btn-test',
            detailcss: '.details-btn-holder',
            resultlabelcss: '.info .correct',
            correctpercentagecss: '.legend .correct .percents',
            incorrectpercentagecss: '.legend .incorrect .percents',
            historycss: '.history-btn-holder'
        }

        // Add Class Modal
        this.modal = '.modal-dialog.animate'
        // this.classModalHeaderCss = `${this.modal} .modal-header h3`
        this.modalBodyCss = `${this.modal} .modal-body`
        this.removeLinkCss = `${this.modal} .remove-link`
        this.modalClassNameLabelCss = `${this.modalBodyCss} .top-label`
        this.modalNameInputCss = `${this.modalBodyCss} input.form-control`
        this.modalMoveCss = `${this.modalBodyCss} .move-button`
        this.modalAvailableStudentsCss = '.checkbox-list-box.no-padding-right .checkbox-list'
        this.modalNewClassCss = '.checkbox-list-box.no-padding-left .checkbox-list'
        this.modalCancelButtonCss = '.modal-footer .btn-bonnie.btn-close'
        this.modalSaveButtonCss = '.btn-edit'
        this.retakeCss = '.btn-retest'

        // Right Panel
        this.rightPanelCss = '.main .center .right'

        // Subjects & Tests
        this.subjectsAndTestsPanelCss = `${this.rightPanelCss} .right-panel-box.manage-controls`

        // Reports
        this.reportsPanelCss = `${this.rightPanelCss} .report-btn-panel`
        this.reportsCss = `${this.reportsPanelCss} .report-btn`

        // Close Modal
        this.modalHeaderSectionCss = `${this.modal} .modal-header`
        this.modalHeaderCss = `${this.modalHeaderSectionCss} h3`
        this.closeModalCss = '.modal-header .close,.fa-close'

        // Tests
        this.testsCss = '.pie-charts .card'
    }

    getComponentCss (name) {
        return `#all-box-item_${name}`
    }

    get allClassesCss () { return this.getComponentCss(this.components.allclasses) }
    get allGroupsCss () { return this.getComponentCss(this.components.allgroups) }
    get allStudentsCss () { return this.getComponentCss(this.components.allstudents) }
    get allTeachersCss () { return this.getComponentCss(this.components.allteachers) }

    // get COLORS () { return Helper.COLORS }

    // Subject Tab
    get subjectTab () { return $(this.subjectTabCss) }

    get subjectsAndTestsPanel () { return $(this.subjectsAndTestsPanelCss) }
    get addTestLink () { return this.subjectsAndTestsPanel.$('span=Add Test') }
    get organizeEditCreateNewSubjectLink () { return this.subjectsAndTestsPanel.$('span=Organize, edit, and create new subjects and tests') }

    get leftMenu () { return $(this.leftMenuCss) }
    get leftMenuCollaspeButton () { return $(this.leftMenuCollaspeButtonCss) }
    get allClasses () { return $(this.allClassesCss) }
    get allGroups () { return $(this.allGroupsCss) }
    get allStudents () { return $(this.allStudentsCss) }
    get allTeachers () { return $(this.allTeachersCss) }

    subjectTabs () {
        return browser.getText(this.subjectTabCss)
    }

    isSubjectTabDisplayed (name) {
        this.scrollSubjectTabToEnd()
        return this.getSubjectTabByName(name).isDisplayed()
        // return this.subjectTabs().includes(name)
        // return this.subjectTab.$(`.text=${name}`).isDisplayed()
    }

    getSubjectTabColor (name) {
        return this.getSubjectTabByName(name).getCSSProperty('color')
    }

    getSubjectTabByName (name) {
        return $(`a.text=${name}`)
    }

    scrollSubjectTabToEnd () {
        browser.click('.fa-angle-double-right')
        browser.pause(2000)
    }

    // Reports
    get reportsPanel () { return $(this.reportsPanelCss) }
    get reportsHeader () { return this.reportsPanel.$('h3') }

     // Subjects & Tests
    get tests () { return $$(this.testsCss) } // Captures all the piechart cards when you click on a student

    expandAllClasses () {
        !this.isAllClassesExpanded() && this.clickAllClasses()
    }

    expandAllGroups () {
        !this.isAllGroupsExpanded() && this.clickAllGroups()
    }

    expandAllStudents () {
        !this.isAllStudentsExpanded() && this.clickAllStudents()
    }

    clickAllClasses () {
        this.clickComponent(this.allClasses)
    }

    clickAllGroups () {
        this.clickComponent(this.allGroups)
    }

    clickAllStudents () {
        this.clickComponent(this.allStudents)
    }

    clickAllTeachers () {
        this.clickComponent(this.allTeachers)
    }

    expandAllTeachers () {
        !this.isAllTeachersExpanded() && this.clickAllTeachers()
    }

    clickComponent (component) {
        component.click()
        browser.pause(3000) // wait for page to load
    }

    clickClass (name) {
        this.expandAllClasses()
        this.getClassByName(name).click()
        browser.pause(3000)
    }

    clickTeacher (name) {
        this.expandAllTeachers()
        this.getTeacherByName(name).click()
        browser.pause(3000)
    }

    closeModal () {
        browser.click(this.closeModalCss)
    }

    getModalHeader () {
        return browser.getText(this.modalHeaderCss)
    }

    isModalVisible () {
        return browser.isVisible(this.modal)
    }

    getReports () {
        browser.pause(3000)
        return browser.getText(this.reportsCss)
    }
    getReportByName (name) {
        return $(`span=${name}`)
    }

    getParentLetterReport () {
        return this.getReportByName(this.reports.parentletter)
    }

    getFlashcardsReport () {
        return this.getReportByName(this.reports.flashcards)
    }

    getBingoReport () {
        return this.getReportByName(this.reports.bingo)
    }

    getStudentDetailReport () {
        return this.getReportByName(this.reports.studentdetail)
    }

    clickParentLetterReport () {
        this.getParentLetterReport().click()
        browser.pause(1000)
    }

    clickFlashcardsReport () {
        this.getFlashcardsReport().click()
        browser.pause(1000)
    }

    clickStudentDetail () {
        this.getStudentDetailReport().click()
        browser.pause(1000)
    }

    isLeftMenuExpanded () {
        return this.leftMenuCollaspeButton.$('.fa-caret-left').isDisplayed()
    }

    expandLeftMenu () {
        !this.isLeftMenuExpanded() && this.leftMenuCollaspeButton.click()
    }

    collapseLeftMenu () {
        this.isLeftMenuExpanded() && this.leftMenuCollaspeButton.click()
    }

    getComponentObjs (component) {
        const css = this.componentsObjCss
        return {
            component: component,
            title: component.$(css.titlecss),
            add: component.$(css.editcss),
            expandcollapse: component.$(css.expandcollaspecss)
        }
    }

    isComponentExpanded (component) {
        return component.$('.roll.up').isDisplayed()
    }

    isAllClassesExpanded () {
        return this.isComponentExpanded(this.allClasses)
    }

    isAllGroupsExpanded () {
        return this.isComponentExpanded(this.allGroups)
    }

    isAllStudentsExpanded () {
        return this.isComponentExpanded(this.allStudents)
    }

    isAllTeachersExpanded () {
        return this.isComponentExpanded(this.allTeachers)
    }

    getAllClassesObj () {
        return this.getComponentObjs(this.allClasses)
    }

    getAllGroupsObj () {
        return this.getComponentObjs(this.allGroups)
    }

    getAllStudentsObj () {
        return this.getComponentObjs(this.allStudents)
    }

    get addClassTitle () { return this.allClasses.$(this.componentsObjCss.title) }
    get addClassButton () { return this.allClasses.$(this.componentsObjCss.editcss) }

    get addGroupButton () { return this.allGroups.$(this.componentsObjCss.editcss) }
    get addStudentButton () { return this.allStudents.$(this.componentsObjCss.editcss) }

    clickAddClassButton () {
        this.addClassButton.click()
        browser.pause(500)
    }

    clickAddGroupButton () {
        this.addGroupButton.click()
        browser.pause(2000)
    }

    clickAddStudentButton () {
        this.addStudentButton.click()
        browser.pause(500)
    }

    checkStudents (students) {
        if (!Array.isArray(students)) {
            if (students && students.includes(',')) {
                this.checkStudents(students.split(','))
            } else {
                students && this.checkStudent(students)
            }
            return
        }
        students.forEach(student => {
            this.checkStudent(student)
        })
    }

    getStudent (student) {
        return $(`label=${student}`)
    }

    checkAvailableStudent (student) {
        this.getStudent(this.modalAvailableStudentsCss, student).click()
        browser.pause(1000)
    }

    checkStudent (student) {
        this.getStudent(student).click()
        browser.pause(1000)
    }

    clickMoveButton () {
        browser.click(this.modalMoveCss)
        browser.pause(1000)
    }

    setName (name) {
        $(this.modalNameInputCss).setValue(name)
        browser.pause(1000)
    }

    clickModalCancelButton () {
        $(this.modalCancelButtonCss).click()
        browser.pause(1000)
    }

    clickModalSaveButton () {
        $(this.modalSaveButtonCss).click()
        browser.pause(1000)
    }

    addClass (payload) {
        this.clickAddClassButton()
        this.setAndSaveComponent(payload)
    }

    addGroup (payload) {
        this.clickClass(payload.classname)
        this.clickAddGroupButton()
        this.setAndSaveComponent(payload)
    }

    addStudent (payload) {
        this.clickAddStudentButton()
        this.setStudentInfo(payload)
        this.clickModalSaveButton()
    }

    setStudentInfo (payload) {
        browser.pause(2000) // wait for modal to load
        const inputs = $$('input.form-control.large')
        inputs[0].setValue(payload.firstname)
        inputs[1].setValue(payload.lastname)
        // inputs[3].setValue(payload.studentid)
        browser.pause(500)
    }

    setAndSaveComponent (payload) {
        this.setName(payload.name)
        this.checkStudents(payload.students)
        this.clickMoveButton()
        browser.pause(500)
        this.clickModalSaveButton()
    }

    getComponentByName (component, name) {
        return component.$('..').$(`.title=${name}`)
    }

    getClassByName (name) {
        return this.getComponentByName(this.allClasses, name)
    }

    getGroupByName (name) {
        return this.getComponentByName(this.allGroups, name)
    }

    getTeacherByName (name) {
        return this.getComponentByName(this.allTeachers, name)
    }

    isGroupPresent (name) {
        return this.getGroupByName(name).isDisplayed()
    }

    isStudentPresent (name) {
        return this.getStudentByName(name).isDisplayed()
    }

    isClassPresent (name) {
        return this.getClassByName(name).isDisplayed()
    }

    getStudentByName (name) {
        return this.getComponentByName(this.allStudents, name)
    }

    // returns the name and edit buttons of a specific class
    classObjs (name) {
        return this.getComponentItemObjs(this.getClassByName(name))
    }

    // returns the name and edit buttons of a specific group
    groupObjs (name) {
        return this.getComponentItemObjs(this.getGroupByName(name))
    }

    // returns the name and edit buttons of a specific student under AllStudents component
    studentObjs (name) {
        return this.getComponentItemObjs(this.getStudentByName(name))
    }

    // returns the name and edit buttons of the Component item
    getComponentItemObjs (el) {
        el.click()
        browser.pause(1000)
        const parent = el.$('..')
        return {
            name: parent.$('.title'),
            edit: parent.$('.edit')
        }
    }

    editClass (payload) {
        this.expandAllClasses()
        this.classObjs(payload.name).edit.click()
        browser.pause(1000)
        this.setName(payload.newname)
        this.checkStudents(payload.students)
        this.clickModalSaveButton()
    }

    editGroup (payload) {
        this.clickClass(payload.classname)
        this.groupObjs(payload.name).edit.click()
        browser.pause(1000)
        this.setName(payload.newname)
        this.checkStudents(payload.students)
        this.clickMoveButton()
        this.clickModalSaveButton()
    }

    editStudent (payload) {
        this.studentObjs(payload.name).edit.click()
        this.setStudentInfo(payload)
        this.clickModalSaveButton()
    }

    deleteGroup (payload) {
        this.clickClass(payload.classname)
        this.groupObjs(payload.groupname).edit.click()
        this.deleteItem()
        browser.pause(3000)
    }

    deleteClass (name) {
        this.expandAllClasses()
        this.classObjs(name).edit.click()
        this.deleteItem()
    }

    deleteStudent (name) {
        this.studentObjs(name).edit.click()
        this.deleteItem()
    }

    deleteItem () {
        browser.pause(1000)
        browser.click(this.removeLinkCss)
        browser.pause(1000)
        $$('.modal-footer .btn-bonnie.btn-transparent')[1].click()
    }

    // Start a test
    startTest (payload) {
        this.getStudentByName(payload.studentname).click()
        browser.pause(1000)
        this.clickTestButton(payload.testname)
        browser.pause(1000)
        // Click Retake all tests if it's displayed
        this.retakeTest()
    }

    getTestCardByName (name) {
        return this.getTestCardTitleByName(name).$('..').$('..')
    }

    getTestCardTitleByName (name) {
        return $(`h3=${name}`) // $(this.testsCss).$(`h3=${name}`)
    }

    isTestCardPresent (name) {
        return this.getTestCardTitleByName(name).isDisplayed()
    }

    deleteTest (name) {
        if (this.isTestCardPresent(name)) {
            this.getTestCardObj(name).ellipsis.click()
            $('a=Remove test from Subject').click()
            browser.pause(2000)
        }
    }

    clickTestButton (name) {
        // this.getTestCardByName(name).$(this.testcardObjCss.testcss).click()
        this.getTestCardObj(name).test.click()
    }

    clickDetailsButton (name) {
        // this.getTestCardByName(name).$(this.testcardObjCss.testcss).click()
        this.getTestCardObj(name).detail.click()
    }

    getTestCardObj (name) {
        const objCss = this.testcardObjCss
        const card = this.getTestCardByName(name)
        return {
            title: card.$(objCss.titlecss),
            ellipsis: card.$(objCss.ellipsiscss),
            pie: card.$(objCss.piecss),
            test: card.$(objCss.testcss),
            detail: card.$(objCss.detailcss),
            resultlabel: card.$(objCss.resultlabelcss),
            correctpercentage: card.$(objCss.correctpercentagecss),
            incorrectpercentage: card.$(objCss.incorrectpercentagecss),
            history: card.$(objCss.historycss)
        }
    }

    graphTextObj (payload) {
        this.clickStudent(payload.studentname)
        const obj = this.getTestCardObj(payload.testname)
        return {
            correctpercentage: obj.correctpercentage.getText(),
            incorrectpercentage: obj.incorrectpercentage.getText(),
            resultlabel: obj.resultlabel.getText().split('Correct Answers\n').join('Correct answers: ')
        }
    }

    clickStudent (name) {
        this.getStudentByName(name).click()
        browser.pause(1000)
    }

    retakeTest () {
        browser.isVisible(this.retakeCss) && browser.click(this.retakeCss)
    }

     // Subjects & Tests
    clickAddTestLink () {
        browser.pause(5000)
        this.addTestLink.click()
        this.waitForLoadingToComplete()
    }
    // Organize, edit, and create new subjects and tests Reports
    modifySubject () {
        this.organizeEditCreateNewSubjectLink.click()
        this.waitForLoadingToComplete()
    }

    // Delete Test Details
    deleteAllPastTestDetails (payload) {
        this.getStudentByName(payload.studentname).click()
        browser.pause(1000)
        this.clickDetailsButton(payload.testname)
        if ($('select.form-control option').getText() !== '') {
            $$('select.form-control option').forEach(() => {
                $('button.btn-delete').click()
                browser.pause(3000)
            })
        }
        this.closeModal()
    }
}

export default new HomePage()
