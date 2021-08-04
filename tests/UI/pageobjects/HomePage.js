'use strict'
import Page from './Page'
import Helper from '../support/Helper'

class HomePage extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/esgi'

        this.headerCss = '.hierarchy-title'
        // Page Colors
        this.COLORS = Helper.COLORS

        this.trackNameCss = '.school-year-selector .track'
        this.trackLinkCss = `${this.trackNameCss} a`

        this.schoolYearCss = '.school-year'

        // Subject Tabs
        this.subjectTabComponentCss = '.subject-tabs'

        this.subjectTabCss = `${this.subjectTabComponentCss} .subject-tab`

        this.leftMenuCss = '.main .left'
        this.leftMenuCollaspeButtonCss = `${this.leftMenuCss} .collapse-button`

        this.components = {
            allclasses: 'Classes',
            allgroups: 'Groups',
            allstudents: 'Students',
            allteachers: 'Teachers',
            allschools: 'Schools'
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
            studentdetail: 'Student Detail',
            studentprogress: 'Student Progress',
            classtotals: 'Class Totals',
            classgrades: 'Class Grades',
            schoolgrades: 'School Grades',
            itemanaysis: 'Item Analysis',
            piecharts: 'Pie Charts',
            districtgrades: 'District Grades'
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
        this.modalNameInputCss = '[id$="-edit-form"] .large, .edit-group-name-input'// `${this.modalBodyCss} input.form-control`
        this.modalMoveCss = `button.move-button`
        this.modalAvailableStudentsCss = '.checkbox-list-box.no-padding-right .checkbox-list'
        this.modalNewClassCss = '.checkbox-list-box.no-padding-left .checkbox-list'
        this.modalCancelButtonCss = '.modal-footer .btn-bonnie.btn-close'
        this.modalSaveButtonCss = '.save-button'
        this.retakeCss = '.btn-retest'
        this.dublicateStudentModalCss = '.duplicate-modal-body'

        // Right Panel
        this.rightPanelCss = '.main .center'

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

        this.createTestLinkCss = '.create-test-link'

        // Subject Tab Scroll arrors
        this.doubleRightarrowsCss = '.fa-angle-double-right'

        this.createSubjectTabCss = '.subject-tab.create'
    }

    getComponentCss (name) {
        const suffix = 'all-box-item_All-'
        return `#${suffix}${name}`
    }

    get trackName () { return $(this.trackNameCss) }
    get trackNameLink () { return this.trackName.$('a') }
    get schoolYear () { return $(this.schoolYearCss) }
    get createTestLink () { return $(this.createTestLinkCss) }

    get header () { return $(this.headerCss) }
    get createSubjectTab () {
        this.scrollSubjectTabToEnd()
        return $(this.createSubjectTabCss)
    }

    clickCreateTestLink () {
        this.createTestLink.click()
        browser.pause(500)
    }

    selectSchoolYear (year) {
        if ($('.school-year .dropdown-toggle').getText() !== year) {
            this.schoolYear.click()
            browser.pause(1000)
            this.schoolYear.$(`a=${year}`).click()
            this.waitForLoadingToComplete()
        }
    }

    get allClassesCss () { return this.getComponentCss(this.components.allclasses) }
    get allGroupsCss () { return this.getComponentCss(this.components.allgroups) }
    get allStudentsCss () { return this.getComponentCss(this.components.allstudents) }
    get allTeachersCss () { return this.getComponentCss(this.components.allteachers) }
    get allSchoolsCss () { return this.getComponentCss(this.components.allschools) }

    // get COLORS () { return Helper.COLORS }

    // Subject Tab
    get subjectTab () { return $(this.subjectTabCss) }

    get subjectsAndTestsPanel () { return $(this.subjectsAndTestsPanelCss) }
    get addTestLink () { return this.subjectsAndTestsPanel.$('.home-add-test-link') }
    get organizeEditCreateNewSubjectLink () { return this.subjectsAndTestsPanel.$('.home-manage-subjects-link') }
    get doubleRightarrows () { return $(this.doubleRightarrowsCss) }

    get leftMenu () { return $(this.leftMenuCss) }
    get leftMenuCollaspeButton () { return $(this.leftMenuCollaspeButtonCss) }
    get allClasses () { return $(this.allClassesCss) }
    get allGroups () { return $(this.allGroupsCss) }
    get allStudents () { return $(this.allStudentsCss) }
    get allTeachers () { return $(this.allTeachersCss) }
    get allSchools () { return $(this.allSchoolsCss) }

    get dublicateStudentModal () { return $(this.dublicateStudentModalCss) }

    subjectTabs () {
        return browser.getText(this.subjectTabCss)
    }

    isDublicateStudent () {
        return this.dublicateStudentModal.isDisplayed()
    }

    isSubjectTabDisplayed (name) {
        this.scrollSubjectTabToEnd()
        return this.getSubjectTabByName(name).isDisplayed()
        // return this.subjectTabs().includes(name)
        // return this.subjectTab.$(`.text=${name}`).isDisplayed()
    }

    getSubjectTabColor (name) {
        return this.getSubjectTabByName(name).getCSSProperty('background-color')
    }

    getSubjectTabByName (name) {
        return $(`[data-name="${name}"]`)
    }

    scrollSubjectTabToEnd () {
        this.waitForLoadingToComplete()
        const ele = this.doubleRightarrows
        ele.isDisplayed() && ele.click()
        browser.pause(500)
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

    expandAllSchools () {
        !this.isAllSchoolsExpanded() && this.clickAllSchools()
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

    clickAllSchools () {
        this.clickComponent(this.allSchools)
    }

    expandAllTeachers () {
        !this.isAllTeachersExpanded() && this.clickAllTeachers()
    }

    clickComponent (component) {
        component.click()
        this.waitForLoadingToComplete()
    }

    clickClass (name) {
        // this.expandAllClasses() // Bug on the page requiring the need for double expand
        this.expandAllClasses()
        this.getClassByName(name).click()
        this.waitForLoadingToComplete()
    }

    clickStudentByName (name) {
        this.expandAllStudents()
        this.getStudentByName(name).click()
        this.waitForLoadingToComplete()
    }

    clickTeacher (name) {
        this.expandAllTeachers()
        this.getTeacherByName(name).click()
        this.waitForLoadingToComplete()
    }

    clickSchool (name) {
        this.expandAllSchools()
        this.getSchoolByName(name).click()
        this.waitForLoadingToComplete()
    }

    // Group requires a class to be selected
    clickGroup (classname, groupname) {
        this.clickClass(classname)
        this.expandAllGroups()
        this.getGroupByName(groupname).click()
        this.waitForLoadingToComplete()
    }

    closeModal () {
        try {
            browser.click(this.closeModalCss)
        } catch (error) {
            $$(this.closeModalCss)[1].click()
        }
    }

    getModalHeader () {
        return browser.getText(this.modalHeaderCss)
    }

    isModalVisible () {
        return browser.isVisible(this.modal)
    }

    getReports (timeout = 20000) {
        Helper.waitForLoadingToComplete(null, timeout)
        return browser.getText(this.reportsCss)
    }

    getReportByName (name) {
        return $(`span=${name}`)
    }

    setReportInfo (payload) {
        this.clickSubjectTab(payload.subject)
        this.clickClass(payload.class)
        this.clickStudentByName(payload.student)
    }

    getParentLetterReport () {
        return this.getReportByName(this.reports.parentletter)
    }

    getFlashcardsReport () {
        return this.getReportByName(this.reports.flashcards)
    }

    getClassGradesReport () {
        return this.getReportByName(this.reports.classgrades)
    }

    getBingoReport () {
        return this.getReportByName(this.reports.bingo)
    }

    getStudentDetailReport () {
        return this.getReportByName(this.reports.studentdetail)
    }

    getStudentProgressReport () {
        return this.getReportByName(this.reports.studentprogress)
    }

    getClassTotalsReport () {
        return this.getReportByName(this.reports.classtotals)
    }

    getItemAnalysisReport () {
        return this.getReportByName(this.reports.itemanaysis)
    }

    getSchoolGradesReport () {
        return this.getReportByName(this.reports.schoolgrades)
    }

    getDistrictGradesReport () {
        return this.getReportByName(this.reports.districtgrades)
    }

    getPieChartsReport () {
        return this.getReportByName(this.reports.piecharts)
    }

    clickParentLetterReport () {
        this.getParentLetterReport().click()
        this.waitForLoadingToComplete()
    }

    clickFlashcardsReport () {
        this.getFlashcardsReport().click()
        this.waitForLoadingToComplete()
    }

    clickClassGradesReport () {
        this.getClassGradesReport().click()
        this.waitForLoadingToComplete()
    }

    clickBingo () {
        this.getBingoReport().click()
        this.waitForLoadingToComplete()
    }

    clickStudentDetail () {
        this.getStudentDetailReport().click()
        this.waitForLoadingToComplete()
    }

    clickStudentProgress () {
        this.getStudentProgressReport().click()
        this.waitForLoadingToComplete()
    }

    clickClassTotalsReport () {
        this.getClassTotalsReport().click()
        this.waitForLoadingToComplete()
    }

    clickItemAnalysis () {
        this.getItemAnalysisReport().click()
        this.waitForLoadingToComplete()
    }

    clickSchoolGradesReport () {
        this.getSchoolGradesReport().click()
        browser.pause(2000)
        // this.waitForLoadingToComplete()
    }

    clickDistrictGradesReport () {
        this.getDistrictGradesReport().click()
        browser.pause(2000)
        // this.waitForLoadingToComplete()
    }

    clickPieCharts () {
        this.getPieChartsReport().click()
        this.waitForLoadingToComplete()
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

    isAllSchoolsExpanded () {
        return this.isComponentExpanded(this.allSchools)
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
        return $(`[data-name="${student}"]`)
    }

    checkAvailableStudent (student) {
        this.getStudent(this.modalAvailableStudentsCss, student).click()
        browser.pause(1000)
    }

    checkStudent (student) {
        $(this.modal).$(`[data-name="${student}"]`).click()
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
        this.waitForLoadingToComplete()
    }

    addClass (payload) {
        this.clickAddClassButton()
        this.setAndSaveComponent(payload)
        if (Helper.isProd()) {
            // browser.refresh()
            Helper.waitForLoadingToComplete()
        }
    }

    addGroup (payload) {
        this.clickClass(payload.classname)
        this.clickAddGroupButton()
        this.setAndSaveComponent(payload)
    }

    addStudent (payload) {
        this.clickClass(payload.classname)
        this.clickAddStudentButton()
        this.setStudentInfo(payload)
        this.clickModalSaveButton()
        if (this.isDublicateStudent()) {
            $('span=VIEW STUDENT(S)').click()
            this.waitForLoadingToComplete()
            $('.ace.select-students-input').click()
            browser.pause(1000)
            $('div=Delete').click()
            browser.pause(1000)
            $('button=Confirm').click()
            browser.pause(1000)
            this.navigate()
            this.addStudent(payload)
        }
    }

    setStudentInfo (payload) {
        browser.pause(1000) // wait for modal to load
        $('.first-name-input').setValue(payload.firstname)
        $('.last-name-input').setValue(payload.lastname)
        // inputs[3].setValue(payload.studentid)
        browser.pause(500)
    }

    setAndSaveComponent (payload) {
        this.setName(payload.name)
        // Helper.setValue(this.modalNameInputCss, payload.name)
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

    getSchoolByName (name) {
        return this.getComponentByName(this.allSchools, name)
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

    isSchoolPresent (name) {
        return this.getSchoolByName(name).isDisplayed()
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
        Helper.waitForLoadingToComplete()
        const parent = el.$('..')
        return {
            name: parent.$('.title'),
            edit: parent.$('.edit')
        }
    }

    editClass (payload) {
        this.expandAllClasses()
        this.classObjs(payload.name).edit.click()
        Helper.waitForLoadingToComplete()
        // Helper.setValue(this.modalNameInputCss, payload.newname)
        this.setName(payload.newname)
        this.checkStudents(payload.students)
        this.clickModalSaveButton()
    }

    editGroup (payload) {
        this.clickClass(payload.classname)
        this.expandAllGroups()
        this.groupObjs(payload.name).edit.click()
        browser.pause(1000)
        // Helper.setValue(this.modalNameInputCss, payload.newname)
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
        this.waitForLoadingToComplete()
    }

    deleteClass (name) {
        this.expandAllClasses()
        this.classObjs(name).edit.click()
        this.deleteItem()
    }

    deleteStudent (payload) {
        const studentname = `${payload.firstname} ${payload.lastname}`
        if (!this.isStudentPresent(studentname)) return
        this.clickClass(payload.classname)
        this.studentObjs(studentname).edit.click()
        this.deleteItemStudent()
    }

    deleteItem () {
        browser.pause(1000)
        browser.click(this.removeLinkCss)
        browser.pause(1000)
        $$('.modal-content')[1].$('span=OK').click()
        this.waitForLoadingToComplete()
    }

    deleteItemStudent () {
        browser.pause(1000)
        $('.remove-link=Remove student from class list').click()
        browser.pause(1000)
        $$('.modal-content')[1].$('span=OK').click()
        this.waitForLoadingToComplete()
    }

    // Start a test
    startTest (payload) {
        this.clickSubjectTab(payload.tab)
        payload.classname && this.clickClass(payload.classname)
        this.getStudentByName(payload.studentname).click()
        browser.pause(1000)
        if (process.env.DONTRUNTEST) { return }
        this.clickTestButton(payload.testname)
        browser.pause(1000)
        // Click Retake all tests if it's displayed
        this.retakeTest()
    }

    getTestCardByName (name) {
        return $(`.card[data-name="${name}"]`)
        // return this.getTestCardTitleByName(name).$('..').$('..')
    }

    getTestCardTitleByName (name) {
        return $(`h3=${name}`) // $(this.testsCss).$(`h3=${name}`)
    }

    isTestCardPresent (name) {
        return this.getTestCardTitleByName(name).isDisplayed()
    }

    deleteTest (payload) {
        this.clickSubjectTab(payload.tab)
        if (this.isTestCardPresent(payload.testname)) {
            this.getTestCardObj(payload.testname).ellipsis.click()
            browser.pause(250)
            $('a=Remove Test from Subject').click()
            this.waitForLoadingToComplete()
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
    clickAddTestLink (subjecttab) {
        browser.pause(2000)
        this.clickSubjectTab(subjecttab)
        this.addTestLink.click()
        browser.pause(1000)
        this.handleSubjectTabSchoolYearPrompt()
        this.waitForLoadingToComplete()
    }
    // Organize, edit, and create new subjects and tests Reports
    modifySubject () {
        this.organizeEditCreateNewSubjectLink.click()
        this.handleSubjectTabSchoolYearPrompt()
    }
    clickSubjectTab (name) {
        $(`[data-name="${name}"]`).click()
        this.waitForLoadingToComplete()
    }

    // Delete Test Details
    deleteAllPastTestDetails (payload) {
        payload.classname && this.clickClass(payload.classname)
        this.clickSubjectTab(payload.tab)
        this.clickStudentByName(payload.studentname)
        this.clickDetailsButton(payload.testname)
        if ($('select.form-control option').getText() !== 'None' && $(this.modalSaveButtonCss).isDisplayed()) {
            $(this.modalSaveButtonCss).click()
            browser.pause(1000)
            $('.edit-buttons a').click()
            browser.pause(1000)
            // $$('select.form-control option').forEach(() => {
            //     $('.edit-buttons a').click()
            //     browser.pause(1000)
            // })
           //  $('button.btn-edit').click() // Click Save button.
        }
        $('button.btn-close').click()
        this.waitForLoadingToComplete()
    }
    handleSubjectTabSchoolYearPrompt () {
        const css = 'span*=PLEASE NOTE: If you are making changes to your Subject Tabs'
        if ($(css).isDisplayed()) {
            $('button=OK').click()
        }
        this.waitForLoadingToComplete()
    }

    resetGradeScale (adminType) {
        const actions = {
            'type': 'key',
            'id': 'keyboard',
            'actions': [
              {'type': 'keyDown', 'value': '\ue008'}, // Press Shift key
              {'type': 'keyDown', 'value': 'z'}
            ]
        }
        browser.performActions([actions])
        this.clickAdminTypeGradesReport(adminType)
        browser.releaseActions()
    }

    clickAdminTypeGradesReport (adminType) {
        switch (adminType) {
        case 'CLASS':
            this.clickClassGradesReport()
            break
        case 'SCHOOL':
            this.clickSchoolGradesReport()
            break
        case 'DISTRICT':
            this.clickDistrictGradesReport()
        }
    }
}

export default new HomePage()
