import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'

describe('Legacy - HomePage', function () {
    before(function () {
        LoginPage.navigate()
    })
    after(function () {
        Global.logout()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).to.equal(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(Users.legacy.teacheradmin.credentials)
        })
        it('should be logged in', function () {
            expect(HomePage.title).to.equal(HomePage.getTitle())
        })
    })
})
