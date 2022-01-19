import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import MyAccountModal from '../Components/MyAccountModal'
import Global from '../support/Global'
import {Users} from '../fixtures/data'
describe('MyAccountModal', function () {
    before(function () {
        LoginPage.navigate()
        LoginPage.login(Users.teacher.user10.credentials)
        HomePage.selectSchoolYear('2021-2022')
    })
    after(function () {
        // Global.logout()
    })
    it('should be logged in', function () {
        expect(HomePage.title).toBe(HomePage.getTitle())
    })
    describe('Given I open My Accounts Modal', function () {
        let info
        before(function () {
            Global.clickMyAccountMenu()
            info = $$('.input-label.info.value')
        })
        after(function () {
            MyAccountModal.cancel()
        })
        it('Then My Account Modal should be displayed', function () {
            expect(MyAccountModal.firstModal).toBeDisplayed()
        })
        it('And My Account Modal is enabled', function () {
            expect(MyAccountModal.firstModal).toBeEnabled()
        })
        it('And District should be ESGI Test', function () {
            expect(info[0].getText()).toBe('ESGI Test')
        })
        it('And Linked to District should YES', function () {
            expect(info[1].getText()).toBe('YES')
        })
        it('And School should be Owens', function () {
            expect(info[2].getText()).toBe('Owens')
        })
        it('And Expiration date should be 01/01/2075', function () {
            expect($('.expiration-info span').getText()).toBe('Expiration Date 01/01/2075RENEW')
        })
        it('And the First Name is My', function () {
            expect(MyAccountModal.firstname.getValue()).toBe('My')
        })
        it('And the Last Name is Profile', function () {
            expect(MyAccountModal.lastname.getValue()).toBe('Profile')
        })
        it('And the Email is Profile', function () {
            expect(MyAccountModal.email.getValue()).toBe('test@esgisoftware.com')
        })
        it('And the Track Type is Quarter', function () {
            expect(MyAccountModal.trackType.getValue()).toBe('Quarter')
        })
        it('And the User name is Quater', function () {
            expect(MyAccountModal.username.getValue()).toBe('MyProfileTest')
        })
        it('And the Title is Ms.', function () {
            expect(MyAccountModal.getTitle()).toBe('Ms.')
        })
        it('And the State is California.', function () {
            expect(MyAccountModal.getState()).toBe('California')
        })
        it('And the Country is United States', function () {
            expect(MyAccountModal.getCountry()).toBe('United States')
        })
        it('And the Track Name is ESGI Test', function () {
            expect(MyAccountModal.getTrackName()).toBe('ESGI Test')
        })
        it('And the the Password is dotted out', function () {
            const password = MyAccountModal.password.getValue()
            expect(password).toBe('!!!!!!!!')
            expect(password.length).toEqual(8)
        })
        describe('When I click the show track date range link', function () {
            before(function () {
                MyAccountModal.clickShowTrackDateRange()
            })
            it('Then I see the first track information', function () {
                expect(MyAccountModal.getTrackInfo(1)).toEqual([ '1', '08/01/2021', '10/29/2021' ])
            })
            it('And I see the second track information', function () {
                expect(MyAccountModal.getTrackInfo(2)).toEqual([ '2', '10/30/2021', '12/31/2021' ])
            })
            it('And I see the third track information', function () {
                expect(MyAccountModal.getTrackInfo(3)).toEqual([ '3', '01/01/2022', '03/18/2022' ])
            })
            it('And I see the fourth track information', function () {
                expect(MyAccountModal.getTrackInfo(4)).toEqual([ '4', '03/19/2022', '06/30/2022' ])
            })
        })
    })
})
