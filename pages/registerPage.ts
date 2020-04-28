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



    async fillRegistrationForm(){
        this.firstName.sendKeys('Himanshu')
        this.lastName.sendKeys('Jain')
        this.phone.sendKeys('9123456789')
        this.email.sendKeys('test@test.com')
        this.address1.sendKeys('testAddress1')
        this.address2.sendKeys('testAddress2')
        this.city.sendKeys('Pune')
        this.state.sendKeys('Maharashtra')
        this.postalCode.sendKeys('411057')
        await this.country.click();
        await (await globalMethods.selectValueByVisibleText(this.countryValues,'INDIA')).click(); 
        this.userName.sendKeys('demo123')
        this.password.sendKeys('demoPass123')
        this.confirmPassword.sendKeys('demoPass123')
        await this.submit.click();

        
    }

    

}

