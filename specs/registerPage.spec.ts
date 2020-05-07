import { RegisterPage } from "../pages/registerPage";
import { HomePage } from "../pages/homePage";
import { SignOnPage } from "../pages/signOnPage";
import { browser } from "protractor";
import { FlightPage } from "../pages/flightPage";
import * as testData from "../testData/registrationData.json";


const registerPage = new RegisterPage();
const homePage = new HomePage();
const signOnPage = new SignOnPage();
const flightPage = new FlightPage();

describe('Fill registration Form',() => {

    beforeEach(async ()=>{
        await browser.get('http://newtours.demoaut.com/mercurywelcome.php');
    })
    
    

    // it('fill contact Details',() => {
    //     homePage.navigateToRegisterPage();
    //     registerPage.fillRegistrationForm(testData);
    // })

    it('Login to application',async ()=>{
        homePage.navigateToSignOnPage();
        signOnPage.loginToApplication(testData);
        flightPage.bookFlight();
        console.log('success message-->'+ await flightPage.getTheSuccessMsg())
        expect(flightPage.getTheSuccessMsg()).toBe('Your itinerary has been booked!')
    })
})