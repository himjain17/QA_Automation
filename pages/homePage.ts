import { ElementFinder, element, by, browser } from "protractor";
import { GlobalMethods } from "../utility/globalMethods";

const globalMethods = new GlobalMethods();

export class HomePage{

    homeLink : ElementFinder

    register : ElementFinder
    signOn : ElementFinder
    userNameInput : ElementFinder
    passwordInput : ElementFinder
    signInButton : ElementFinder
    
    constructor(){
        this.homeLink = element(by.xpath('//a[contains(text(),"Home")]'))

        this.register = element(by.xpath('//a[contains(text(),"REGISTER")]'))
        this.signOn = element(by.xpath('//a[contains(text(),"SIGN-ON")]'))
        this.userNameInput = element(by.css('input[name="userName"]'))
        this.passwordInput = element(by.css('input[name="password"]'))
        this.signInButton = element(by.css('input[name="login"]'))
        
    }

    loginToApplication(testData : any){
        globalMethods.setValueToTextField(this.userNameInput,testData.userName)
        globalMethods.setValueToTextField(this.passwordInput,testData.password)
        browser.sleep(3000)
        globalMethods.clickOnElement(this.signInButton)
    }


    navigateToRegisterPage(){
        this.register.click();
    }


    navigateToSignOnPage(){
        this.signOn.click();
    }



}