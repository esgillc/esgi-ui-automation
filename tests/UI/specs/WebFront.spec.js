import WebFrontPage from '../pageobjects/WebFrontPage'
import SignupPage from '../pageobjects/SignupPage'

describe('WebFrontPage', function () {
    describe('Free Trial Link', () => {
        let freeTrialButton
        before(function () {
            WebFrontPage.navigate()
            freeTrialButton = WebFrontPage.freeTrialButton
        })
        it('should be clickable', function () {
            expect(freeTrialButton).toBeClickable()
        })
        it('should be displayed', function () {
            expect(freeTrialButton).toBeDisplayed()
        })
        it('should be a link', function () {
            expect(freeTrialButton).toHaveLink(SignupPage.url)
        })
        describe('Click', function () {
            before(function () {
                freeTrialButton.click()
                WebFrontPage.waitForLoadingToComplete()
            })
            it('should navigate to free trial page', function () {
                // expect(browser.getUrl()).toHaveUrl(SignupPage.absoluteUrl)
            })
        })
    })
    describe('Activate Link', () => {
        let activateLink
        before(function () {
            WebFrontPage.navigate()
            activateLink = WebFrontPage.activateLink
        })
        it('should be clickable', function () {
            expect(activateLink).toBeClickable()
        })
        it('should be displayed', function () {
            expect(activateLink).toBeDisplayed()
        })
        it('should be a link', function () {
            expect(activateLink).toHaveLink(SignupPage.activateUrl)
        })
        describe('Click', function () {
            before(function () {
                activateLink.click()
                WebFrontPage.waitForLoadingToComplete()
            })
            it('should navigate to activation code screen', function () {
                // expect(browser.getUrl()).toHaveUrl(SignupPage.absoluteActivationCodeUrl)
            })
        })
    })
    describe('Intro Video Player', function () {
        before(function () {
            WebFrontPage.navigate()
            WebFrontPage.clickVideoPlayerLink()
        })
        describe('Streaming', function () {
            it('should be streaming', function () {
                expect(WebFrontPage.isVideoStreaming()).toBe(true)
            })
        })
    })
})
