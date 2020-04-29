import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { GlobalMethods } from "../utility/globalMethods";

let globalMethods = new GlobalMethods();

export class RegisterPage{

    firstName : ElementFinder
    lastName : ElementFinder
    phone : ElementFinder
    email : ElementFinder
    address1 : ElementFinder
    address2 : ElementFinder
    city : ElementFinder
    state : ElementFinder
    postalCode : ElementFinder
    country : ElementFinder
    countryValues : ElementArrayFinder
    userName : ElementFinder
    password : ElementFinder
    confirmPassword : ElementFinder
    submit : ElementFinder

    
    


    constructor(){
        this.firstName = element(by.css('input[name="firstName"]')),
        this.lastName = element(by.css('input[name="lastName"]')),
        this.phone = element(by.css('input[name="phone"]')),
        this.email = element(by.css('input[name="userName"]')),
        this.address1 = element(by.css('input[name="address1"]')),
        this.address2 = element(by.css('input[name="address2"]')),
        this.city = element(by.css('input[name="city"]')),
        this.state = element(by.css('input[name="state"]')),
        this.postalCode = element(by.css('input[name="postalCode"]')),
        this.country = element(by.xpath('//select[@name="country"]')),
        this.countryValues = element.all(by.css('option')),
        this.userName = element(by.css('input[name="email"]')),
        this.password =element(by.css('input[name="password"]')),
        this.confirmPassword =element(by.css('input[name="confirmPassword"]'))
        this.submit = element(by.css('input[name="register"]'))
        
    }



    async fillRegistrationForm(testData : any){
        this.firstName.sendKeys(testData.firstName)
        this.lastName.sendKeys(testData.lastName)
        this.phone.sendKeys(testData.phone)
        this.email.sendKeys(testData.email)
        this.address1.sendKeys(testData.address1)
        this.address2.sendKeys(testData.address2)
        this.city.sendKeys(testData.city)
        this.state.sendKeys(testData.state)
        this.postalCode.sendKeys(testData.postalCode)
        await this.country.click();
        await (await globalMethods.selectValueByVisibleText(this.countryValues,testData.country)).click(); 
        this.userName.sendKeys(testData.userName)
        this.password.sendKeys(testData.password)
        this.confirmPassword.sendKeys(testData.confirmPassword)
        await this.submit.click();

        
    }

    

}

