'use strict'

import Page from './Page'

class WebFrontPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI - One-on-one Assessments Made Easy'
        this.url = '/'

        this.loginButtonCss = '.login-button'
        // Video Player
        this.videoPlayerLinkCss = '#intro-video-link'
        this.introVideoCss = '#intro-video'
        this.timeRemainingCss = '.vjs-remaining-time-display'
    }

    get loginButton () { return $(this.loginButtonCss) }
    get videoPlayerLink () { return $(this.videoPlayerLinkCss) }
    get introVideo () { return $(this.introVideoCss) }

    clickVideoPlayerLink () {
        this.videoPlayerLink.click()
        this.introVideo.waitForDisplayed({ timeout: 5000 })
    }

    getTimeRemaining () {
        return browser.getText(this.timeRemainingCss)
    }

    /**
     * sampleTimeRemaining gets the remaining time at different intervals and store it in a array
     * @param {*} numberOfSamples
     * @param {*} intervalBetweenSamples
     */
    sampleTimeRemaining (numberOfSamples, intervalBetweenSamples) {
        let arr = []
        for (let i = 0; i < numberOfSamples; i++) {
            browser.pause(intervalBetweenSamples)
            arr.push(this.getTimeRemaining().split('Remaining Time\n-')[1])
        }
        return arr
    }

    /**
     * If the samples are all diffenent then the player is streaming
     */
    isVideoStreaming () {
        let samples = this.sampleTimeRemaining(5, 5000)
        return samples.length === [...new Set(samples)].length
    }
}

export default new WebFrontPage()
