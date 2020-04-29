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
            yield globalMethods.setValueToTextField(this.firstName, testData.firstName);
            yield globalMethods.setValueToTextField(this.lastName, testData.lastName);
            yield globalMethods.setValueToTextField(this.phone, testData.phone);
            yield globalMethods.setValueToTextField(this.email, testData.email);
            yield globalMethods.setValueToTextField(this.address1, testData.address1);
            yield globalMethods.setValueToTextField(this.address2, testData.address2);
            yield globalMethods.setValueToTextField(this.city, testData.city);
            yield globalMethods.setValueToTextField(this.state, testData.state);
            yield globalMethods.setValueToTextField(this.postalCode, testData.postalCode);
            yield globalMethods.clickOnElement(this.country);
            yield globalMethods.selectValueByVisibleText(this.countryValues, testData.country);
            yield globalMethods.setValueToTextField(this.userName, testData.userName);
            yield globalMethods.setValueToTextField(this.password, testData.password);
            yield globalMethods.setValueToTextField(this.confirmPassword, testData.confirmPassword);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvcmVnaXN0ZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRFO0FBQzVFLDREQUF5RDtBQUV6RCxJQUFJLGFBQWEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUV4QyxNQUFhLFlBQVk7SUFzQnJCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFD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