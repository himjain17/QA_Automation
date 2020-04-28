import { RegisterPage } from "../pages/registerPage";
import { HomePage } from "../pages/homePage";
import { browser } from "protractor";

let registerPage = new RegisterPage();
let homePage = new HomePage();

describe('Fill registration Form',() => {
    it('fill contact Details',() => {
        browser.get('http://newtours.demoaut.com/mercurywelcome.php');
        homePage.navigateToRegisterPage();
        registerPage.fillRegistrationForm();
    })
})