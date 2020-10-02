import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import Global from '../support/Global'
import Load from '../fixtures/load.json'

describe('Navigation', function () {
    before(function () {
        LoginPage.navigate()
    })
    after(function () {
        Global.logout()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).toBe(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(Load.users[9])
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
    })
})
