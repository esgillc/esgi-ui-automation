import WebFrontPage from '../pageobjects/WebFrontPage'

describe('WebFrontPage', function () {
    before(function () {
        WebFrontPage.navigate()
    })
    describe('Intro Video Player', function () {
        before(function () {
            WebFrontPage.clickVideoPlayerLink()
        })
        describe('Streaming', function () {
            it('should be streaming', function () {
                expect(WebFrontPage.isVideoStreaming()).to.equal(true)
            })
        })
    })
})
