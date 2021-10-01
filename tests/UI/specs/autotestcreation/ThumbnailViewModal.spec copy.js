import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users, AutoTestCreation} from '../../fixtures/data'
import AutoTestCreationModal from '../../Components/AutoTestCreationModal'
import ThumbnailViewModal from '../../Components/ThumbnailViewModal'

describe('ThumbnailViewModal', function () {
    describe('Given I click the ThumbnailView button', function () {
        before(function () {
            LoginPage.navigate()
            LoginPage.login(Users.teacher.user6.credentials)
            Global.navigateToTestExplorer()
            HomePage.clickAutoTestCreatorLink()
            browser.pause(2000)
            AutoTestCreationModal.expandTestTopicsDropdown()
            AutoTestCreationModal.selectItemFromDropDown(AutoTestCreation.testtopics[1])
            AutoTestCreationModal.addAQuestion('Add a question')
            AutoTestCreationModal.clickThumbnailViewBtn()
        })
        it('Then the thumbnail view modal should be displayed', function () {
            expect(ThumbnailViewModal.modal).toBeDisplayed()
        })
        it('And the thumbnail view modal should be active', function () {
            expect(ThumbnailViewModal.modal).toBeClickable()
        })
        it('And the thumbnail view modal should be enabled', function () {
            expect(ThumbnailViewModal.modal).toBeEnabled()
        })
        it('And the thumbnail view modal header should be correct', function () {
            expect(ThumbnailViewModal.header).toHaveText('Thumbnail View: Letters')
        })
        it('And one question thumbnail is generated', function () {
            expect(ThumbnailViewModal.questionTiles).toBeElementsArrayOfSize(1)
        })
    })
})
