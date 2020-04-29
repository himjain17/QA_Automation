import { RegisterPage } from "../pages/registerPage";
import { HomePage } from "../pages/homePage";
import { browser } from "protractor";
import * as testData from "../testData/registrationData.json";


const registerPage = new RegisterPage();
const homePage = new HomePage();


describe('Fill registration Form',() => {

    // console.log("path---> "+process.cwd())
    // const filePath = process.cwd() + "testData\\rigistrationData.json"
    // const testDataObject = util.convertJSONFileIntoJSObject(filePath)
    // console.log((<any>testData).firstName)


    it('fill contact Details',() => {
        browser.get('http://newtours.demoaut.com/mercurywelcome.php');
        homePage.navigateToRegisterPage();
        registerPage.fillRegistrationForm(testData);
    })
})