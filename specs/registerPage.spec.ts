import { RegisterPage } from "../pages/registerPage";
import { HomePage } from "../pages/homePage";
import { browser } from "protractor";
import * as testData from "../testData/registrationData.json";


const registerPage = new RegisterPage();
const homePage = new HomePage();


describe('Fill registration Form',() => {

    it('fill contact Details',async () => {
        await browser.get('http://newtours.demoaut.com/mercurywelcome.php');
        homePage.navigateToRegisterPage();
        registerPage.fillRegistrationForm(testData);
    })
})