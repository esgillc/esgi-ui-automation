import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import expect from 'expect'
import {Users} from '../fixtures/data'
describe('LoginDemo', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.user0.credentials)
    })
    it('test...', function () {
        expect(HomePage.title).toBe(HomePage.getTitle())
    })
})
