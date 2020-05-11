import { ElementFinder, element, by } from "protractor"
import { GlobalMethods } from "../utility/globalMethods";

const globalMethods = new GlobalMethods();

export class SignOnPage{

    userName : ElementFinder
    password : ElementFinder
    submit : ElementFinder

    constructor(){
        this.userName = element(by.css('input[name="userName"]'));
        this.password = element(by.css('input[name="password"]'));
        this.submit = element(by.css('input[name="login"]'));
    }

    async loginToApplication(testData:any){
        await globalMethods.setValueToTextField(this.userName,testData.userName);
        await globalMethods.setValueToTextField(this.password,testData.password);
        await globalMethods.clickOnElement(this.submit);
    }

}