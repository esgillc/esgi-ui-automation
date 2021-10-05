import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users, AutoTestCreation} from '../../fixtures/data'
import AutoTestCreationModal from '../../Components/AutoTestCreationModal'
import ThumbnailViewModal from '../../Components/ThumbnailViewModal'
import QuestionEditorModal from '../../Components/QuestionEditorModal'

describe('QuestionEditorModal - Edit Question Thumbnail', function () {
    describe('Given I click the Advance Edit button on a thumbnail', function () {
        let list = `Question1\nQuestion2\nQuestion3\n`
        before(function () {
            LoginPage.navigate()
            LoginPage.login(Users.teacher.user8.credentials)
            Global.navigateToTestExplorer()
            HomePage.clickAutoTestCreatorLink()
            browser.pause(2000)
            AutoTestCreationModal.expandTestTopicsDropdown()
            AutoTestCreationModal.selectItemFromDropDown(AutoTestCreation.testtopics[1])
            AutoTestCreationModal.addAQuestion(list)
            AutoTestCreationModal.clickThumbnailViewBtn()
            ThumbnailViewModal.editQuestion()
        })
        it('Then the question editor modal should be displayed', function () {
            expect(QuestionEditorModal.editModal).toBeDisplayed()
        })
        it('And the question editor modal should be enabled', function () {
            expect(QuestionEditorModal.editModal).toBeEnabled()
        })
        it('And the question editor modal header should be correct', function () {
            expect(QuestionEditorModal.editModal.$('.title-container')).toHaveText('Edit Question')
        })
    })
})
