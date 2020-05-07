import { browser } from "protractor"
import { HomePage } from "../pages/homePage";
import { FlightPage } from "../pages/flightPage";
import { SignOnPage } from "../pages/signOnPage";
import using from "jasmine-data-provider";
import * as userData from "../testData/userData.json";

const homePage = new HomePage();
const flightPage = new FlightPage();
const signOnPage = new SignOnPage();
const actualSignOffText = 'SIGN-OFF'

describe('Validate Login to the Application functionality',() => {

    beforeAll(() => {
        browser.get('http://newtours.demoaut.com/mercurywelcome.php')
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000
    })

    using(userData, (data, description) =>{
        it('Login to application',() => {
            homePage.navigateToSignOnPage();
            signOnPage.loginToApplication(data);
            let expectedSignOffText = flightPage.getSignOffText();
            flightPage.signOffApplication();
            expect(expectedSignOffText).toBe(actualSignOffText);
        })
    })
    
})