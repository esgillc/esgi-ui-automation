import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'
import CreateTestModal from '../../Components/CreateTestModal'
import QuestionEditorModal from '../../Components/QuestionEditorModal'
import ImageGalleryModal from '../../Components/ImageGalleryModal'

// import {Login} from '../fixtures/data'

describe('Image Gallery Modal Tests', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user6.credentials)
        Global.navigateToTestExplorer()
    })
    it('should be on Test Explorer page', function () {
        expect(CreateTestModal.pageTitle).toBe(CreateTestModal.getPageTitle())
    })
    describe('Given I am on the Test Explorer Page', function () {
        describe('When I CLICK the CREATE TEST link ', function () {
            before(async function () {
                HomePage.clickCreateTestLink()
                browser.pause(2000)
            })
            describe('And I CLICK the ADD QUESTION', function () {
                before(function () {
                    CreateTestModal.clickAddQuestion()
                })
                describe('And I CLICK the IMAGE LINK', function () {
                    before(function () {
                        QuestionEditorModal.clickImageIcon()
                    })
                    it('Then the image gallary modal should be displayed', function () {
                        expect(ImageGalleryModal.modal).toBeDisplayed()
                    })
                    describe('And I CLICK the STOCK IMAGES FOLDER', function () {
                        before(function () {
                            ImageGalleryModal.clickStockImages()
                        })
                        it('Then the esgi stock images are displayed', function () {
                            expect(ImageGalleryModal.breadcrumbs).toHaveText('ESGI Stock')
                        })
                        it('And the number of folders is 7', function () {
                            expect(ImageGalleryModal.folders).toBeElementsArrayOfSize(7)
                        })
                    })
                })
            })
        })
    })
})
