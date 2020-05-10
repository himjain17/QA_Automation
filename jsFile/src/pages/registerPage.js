"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const globalMethods_1 = require("../utility/globalMethods");
let globalMethods = new globalMethods_1.GlobalMethods();
class RegisterPage {
    constructor() {
        this.firstName = protractor_1.element(protractor_1.by.css('input[name="firstName"]')),
            this.lastName = protractor_1.element(protractor_1.by.css('input[name="lastName"]')),
            this.phone = protractor_1.element(protractor_1.by.css('input[name="phone"]')),
            this.email = protractor_1.element(protractor_1.by.css('input[name="userName"]')),
            this.address1 = protractor_1.element(protractor_1.by.css('input[name="address1"]')),
            this.address2 = protractor_1.element(protractor_1.by.css('input[name="address2"]')),
            this.city = protractor_1.element(protractor_1.by.css('input[name="city"]')),
            this.state = protractor_1.element(protractor_1.by.css('input[name="state"]')),
            this.postalCode = protractor_1.element(protractor_1.by.css('input[name="postalCode"]')),
            this.country = protractor_1.element(protractor_1.by.xpath('//select[@name="country"]')),
            this.countryValues = protractor_1.element.all(protractor_1.by.css('option')),
            this.userName = protractor_1.element(protractor_1.by.css('input[name="email"]')),
            this.password = protractor_1.element(protractor_1.by.css('input[name="password"]')),
            this.confirmPassword = protractor_1.element(protractor_1.by.css('input[name="confirmPassword"]'));
        this.submit = protractor_1.element(protractor_1.by.css('input[name="register"]'));
    }
    fillRegistrationForm(testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.setValueToTextField(this.firstName, testData.registerFormData.firstName);
            yield globalMethods.setValueToTextField(this.lastName, testData.registerFormData.lastName);
            yield globalMethods.setValueToTextField(this.phone, testData.registerFormData.phone);
            yield globalMethods.setValueToTextField(this.email, testData.registerFormData.email);
            yield globalMethods.setValueToTextField(this.address1, testData.registerFormData.address1);
            yield globalMethods.setValueToTextField(this.address2, testData.registerFormData.address2);
            yield globalMethods.setValueToTextField(this.city, testData.registerFormData.city);
            yield globalMethods.setValueToTextField(this.state, testData.registerFormData.state);
            yield globalMethods.setValueToTextField(this.postalCode, testData.registerFormData.postalCode);
            yield globalMethods.clickOnElement(this.country);
            yield globalMethods.selectValueByVisibleText(this.countryValues, testData.registerFormData.country);
            yield globalMethods.setValueToTextField(this.userName, testData.registerFormData.userName);
            yield globalMethods.setValueToTextField(this.password, testData.registerFormData.password);
            yield globalMethods.setValueToTextField(this.confirmPassword, testData.registerFormData.confirmPassword);
            yield globalMethods.clickOnElement(this.submit);
            // this.firstName.sendKeys(testData.firstName)
            // this.lastName.sendKeys(testData.lastName)
            // this.phone.sendKeys(testData.phone)
            // this.email.sendKeys(testData.email)
            // this.address1.sendKeys(testData.address1)
            // this.address2.sendKeys(testData.address2)
            // this.city.sendKeys(testData.city)
            // this.state.sendKeys(testData.state)
            // this.postalCode.sendKeys(testData.postalCode)
            // await this.country.click();
            // await (await globalMethods.selectValueByVisibleText(this.countryValues,testData.country)).click(); 
            // this.userName.sendKeys(testData.userName)
            // this.password.sendKeys(testData.password)
            // this.confirmPassword.sendKeys(testData.confirmPassword)
            // await this.submit.click();
        });
    }
}
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL3JlZ2lzdGVyUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE0RTtBQUM1RSw0REFBeUQ7QUFFekQsSUFBSSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFFeEMsTUFBYSxZQUFZO0lBc0JyQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzdELElB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