'use strict'

import h from './HomePage'
import Page from './Page'

class SpecialistPage extends Page {
    constructor () {
        super()
        this.title = h.title
        this.url = h.url
        this.hierachyTabs = {
            standard: 'Standard List',
            specialists: 'Specialist List'
        }
        this.components = {
            allSpecialists: 'Specialists',
            allDistrictSpecialists: 'District-Specialists',
            allSchoolSpecialists: 'School-Specialists',
            school: 'School',
            specialistGroups: 'Specialist-Groups',
            teachers: 'All-Teachers',
            students: 'All-Students'
        }
        this.specialistsListCss = '[for="toggle-specialist"]'
        this.standardListCss = '[for="toggle-classic"]'
        this.dataLinkCss = '.menu-item-home-link'
        this.specialistGroupModalCss = '.specialist-group-edit-modal'
    }

    get allSpecialistsCss () { return this.getComponentCss(this.components.allSpecialists) }
    get allDistrictSpecialistsCss () { return this.getComponentCss(this.components.allDistrictSpecialists) }
    get allSchoolSpecialistsCss () { return this.getComponentCss(this.components.allSchoolSpecialists) }
    get allSchoolsCss () { return this.getComponentCss(this.components.school) }
    get allSpecialistGroupsCss () { return this.getComponentCss(this.components.specialistGroups) }
    get allTeachersCss () { return this.getComponentCss(this.components.teachers) }
    get allStudentsCss () { return this.getComponentCss(this.components.students) }

    get email () { return $(this.emailCss) }
    get specialistsList () { return $(this.specialistsListCss) }
    get standardList () { return $(this.standardListCss) }
    get dataLink () { return $(this.dataLinkCss) }
    get allSpecialists () { return $(this.allSpecialistsCss) }
    get allDistrictSpecialists () { return $(this.allDistrictSpecialistsCss) }
    get allSchoolSpecialists () { return $(this.allSchoolSpecialistsCss) }
    get allSchools () { return $(this.allSchoolsCss) }
    get allSpecialistGroup () { return $(this.allSpecialistGroupsCss) }
    get allTeachers () { return $(this.allTeachersCss) }
    get allStudents () { return $(this.allStudentsCss) }

    get addSpecialistGroupBtn () { return this.allSpecialistGroup.$(h.componentsObjCss.editcss) }
    get specialistGroupModal () { return $(this.specialistGroupModalCss) }

    getComponentCss (component) {
        return h.getComponentCss(component, 'all-box-item_')
    }

    expandAllSpecialists () {
        !this.isAllSpecialistsExpanded() && this.clickAllSpecialists()
    }
    expandAllDistrictSpecialists () {
        !this.isAllDistrictSpecialistsExpanded() && this.clickAllDistrictSpecialists()
    }
    expandAllSchoolSpecialists () {
        !this.isAllSchoolSpecialistsExpanded() && this.clickAllSchoolSpecialists()
    }

    isAllSpecialistsExpanded () {
        return h.isComponentExpanded(this.allSpecialists)
    }
    isAllDistrictSpecialistsExpanded () {
        return h.isComponentExpanded(this.allDistrictSpecialists)
    }
    isAllSchoolSpecialistsExpanded () {
        return h.isComponentExpanded(this.allSchoolSpecialists)
    }

    clickAllSpecialists () {
        this.clickSpecialistsList()
        h.clickComponent(this.allSpecialists)
    }
    clickAllDistrictSpecialists () {
        // this.clickSpecialistsList()
        h.clickComponent(this.allDistrictSpecialists)
    }
    clickAllSchoolSpecialists () {
        // this.clickSpecialistsList()
        h.clickComponent(this.allSchoolSpecialists)
    }
    clickDataLink () {
        this.dataLink.click()
        this.waitForLoadingToComplete()
    }
    isStandardListSelected () {
        return $('#toggle-classic[checked]').isDisplayed()
    }
    isSpecialistListSelected () {
        return $('#toggle-specialist[checked]').isDisplayed()
    }
    clickSpecialistsList () {
        this.specialistsList.click()
        browser.pause(1000)
    }
    clickStandardList () {
        this.standardList.click()
        browser.pause(1000)
    }
    toggleHierachyTabs () {
        if (this.isStandardListSelected()) {
            this.clickSpecialistsList()
            this.clickStandardList()
        } else {
            this.clickStandardList()
            this.clickSpecialistsList()
        }
    }
    getSpecialistByName (name) {
        return h.getComponentByName(this.allSpecialists, name)
    }
    getSpecialistGroupsByName (name) {
        return h.getComponentByName(this.allSpecialistGroup, name)
    }
    deleteSpecialistGroup (payload) {
        this.specialistGroupObjs(payload.specialistgroupname).edit.click()
        h.deleteItem()
        h.waitForLoadingToComplete()
    }
    specialistGroupObjs (name) {
        return h.getComponentItemObjs(this.getSpecialistGroupsByName(name))
    }
    isSpecialistGroupPresent (name) {
        return this.getSpecialistGroupsByName(name).isDisplayed()
    }
    getDistrictSpecialistByName (name) {
        return h.getComponentByName(this.allDistrictSpecialists, name)
    }
    getSchoolSpecialistByName (name) {
        return h.getComponentByName(this.allSchoolSpecialists, name)
    }
    clickSpecialistByName (name) {
        this.clickAllSpecialists()
        this.expandAllSpecialists()
        this.getSpecialistByName(name).click()
        this.waitForLoadingToComplete()
    }
    clickDistrictSpecialistByName (name) {
        this.expandAllDistrictSpecialists()
        this.getDistrictSpecialistByName(name).click()
        this.waitForLoadingToComplete()
    }
    clickSchoolSpecialistByName (name) {
        this.expandAllSchoolSpecialists()
        this.getSchoolSpecialistByName(name).click()
        this.waitForLoadingToComplete()
    }
}

export default new SpecialistPage()
