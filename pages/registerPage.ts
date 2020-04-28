import { ElementFinder, element, by } from "protractor";




export class RegisterPage{

    firstName : ElementFinder
    lastName : ElementFinder
    phone : ElementFinder
    email : ElementFinder


    constructor(){
        this.firstName = element(by.css('input[name="firstName"]')),
        this.lastName = element(by.css('input[name="lastName"]')),
        this.phone = element(by.css('input[name="phone"]')),
        this.email = element(by.css('input[name="userName"]'))
    }


    fillRegistrationForm(){
        this.firstName.sendKeys('Himanshu'),
        this.lastName.sendKeys('Jain')
        this.phone.sendKeys('9123456789'),
        this.email.sendKeys('test@test.com')
    }

}

