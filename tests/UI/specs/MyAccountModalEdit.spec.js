import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import MyAccountModal from '../Components/MyAccountModal'
import Global from '../support/Global'
import {Users} from '../fixtures/data'

describe('MyAccountModalEdit', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user11.credentials)
        HomePage.selectSchoolYear('2021-2022')
    })
    after(function () {
        // Global.logout()
    })
    it('should be logged in', function () {
        expect(HomePage.title).toBe(HomePage.getTitle())
    })
    describe('Given I open My Accounts Modal', function () {
        before(function () {
            Global.clickMyAccountMenu()
        })
        it('Then My Account Modal should be displayed', function () {
            expect(MyAccountModal.firstModal).toBeDisplayed()
        })
        after(function () {
            // MyAccountModal.save()
        })
        describe('When I Edit All the fields', function () {
            let payload
            let results
            let time
            before(function () {
                time = new Date().getTime()
                payload = {
                    firstname: `Myles${time}`,
                    lastname: `Profile123${time}`,
                    email: `test123${time}@esgisoftware.com`
                    // username: `MyProfileTest123${time}` // Don't change the username you can't login after that
                }
                results = MyAccountModal.fillFields(payload)
            })
            describe('And I click the save Button', function () {
                before(function () {
                    MyAccountModal.save()
                    browser.pause(5000)
                    // HomePage.waitForLoadingToComplete()
                })
                it('Then My Account Modal should be closed', function () {
                    console.log('Results:::: ', results)
                    expect(MyAccountModal.firstModal).not.toBeDisplayed()
                })
                describe('When I return to My Accounts Modal', function () {
                    before(function () {
                        Global.clickMyAccountMenu()
                    })
                    it('Then the title should be updated', function () {
                        expect(MyAccountModal.getTitle()).toBe(results.title)
                    })
                    it('And the state should be updated', function () {
                        expect(MyAccountModal.getState()).toBe(results.state)
                    })
                    it('And the first name should be updated', function () {
                        expect(MyAccountModal.firstname.getValue()).toBe(results.firstname)
                    })
                    it('And the lastname name should be updated', function () {
                        expect(MyAccountModal.lastname.getValue()).toBe(results.lastname)
                    })
                    it('And the email name should be updated', function () {
                        expect(MyAccountModal.email.getValue()).toBe(results.email)
                    })
                })
            })
        })
    })
})
