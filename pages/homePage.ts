import { ElementFinder, element, by } from "protractor";


export class HomePage{

    register : ElementFinder
    signOn : ElementFinder

    constructor(){
        this.register = element(by.xpath('//a[contains(text(),"REGISTER")]')),
        this.signOn = element(by.xpath('//a[contains(text(),"SIGN-ON")]'))
        
    }


    navigateToRegisterPage(){
        this.register.click();
    }




    navigateToSignOnPage = function(){

    }



}