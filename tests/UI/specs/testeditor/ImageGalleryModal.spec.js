import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'
import CreateTestModal from '../../Components/CreateTestModal'
import QuestionEditorModal from '../../Components/QuestionEditorModal'
import ImageGalleryModal from '../../Components/ImageGalleryModal'
import UploadModal from '../../Components/UploadModal'
// import {Login} from '../fixtures/data'

describe('Image Gallery Modal Tests', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user4.credentials)
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
                    after(function () {
                        ImageGalleryModal.goBack()
                        ImageGalleryModal.close()
                        // QuestionEditorModal.close()
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
                describe('Given I am on the ADD QUESTION Modal', function () {
                    describe('And I CLICK the IMAGE LINK', function () {
                        before(function () {
                            // CreateTestModal.clickAddQuestion()
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
                            describe('And I CLICK the MATHS FOLDER', function () {
                                before(function () {
                                    ImageGalleryModal.clickMathFolder()
                                })
                                describe('And I CLICK the FRACTIONAL IMAGES FOLDER', function () {
                                    before(function () {
                                        ImageGalleryModal.clickFractionalImagesFolder()
                                    })
                                    describe('And I CLICK the "first Image"', function () {
                                        before(function () {
                                            ImageGalleryModal.clickFirstFolderImage()
                                        })
                                        it('Then the image is added to the Question Editor canvas', function () {
                                            expect(QuestionEditorModal.canvasImages).toBeDisplayed()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
                describe('Given I am on the ADD QUESTION Modal', function () {
                    describe('And I CLICK the IMAGE LINK', function () {
                        before(function () {
                            QuestionEditorModal.clickImageIcon()
                        })
                        it('Then the image gallary modal should be displayed', function () {
                            expect(ImageGalleryModal.modal).toBeDisplayed()
                        })
                        describe('And I CLICK the MY LIBRARY IMAGES FOLDER', function () {
                            before(function () {
                                ImageGalleryModal.clickMyLibraryImages()
                            })
                            it('Then my Library modal launches', function () {
                                expect(ImageGalleryModal.uploadImagesBtn).toBeEnabled()
                            })
                            it('And upload button is Active', function () {
                                expect(ImageGalleryModal.breadcrumbs).toHaveText('My Library')
                            })
                            describe.only('And I Click Upload Image', function () {
                                before(function () {
                                    ImageGalleryModal.clickUploadImageButton()
                                })
                                it('Then the image is added to the Question Editor canvas', function () {
                                    expect(UploadModal.header).toHaveTextContaining('Upload Image(s) to')
                                })
                                describe('Given I am on the Upload Modal', function () {
                                    describe('Given I upload an image', function () {
                                        before(function () {
                                            UploadModal.uploadImage()
                                        })
                                        it('Then the image is added to the My Library section ', function () {
                                            expect(UploadModal.imageReadyForUpload).toBeDisplayed()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
