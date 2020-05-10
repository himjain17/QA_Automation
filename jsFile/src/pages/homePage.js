"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const globalMethods_1 = require("../utility/globalMethods");
const globalMethods = new globalMethods_1.GlobalMethods();
class HomePage {
    constructor() {
        this.homeLink = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"Home")]'));
        this.register = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"REGISTER")]'));
        this.signOn = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"SIGN-ON")]'));
        this.userNameInput = protractor_1.element(protractor_1.by.css('input[name="userName"]'));
        this.passwordInput = protractor_1.element(protractor_1.by.css('input[name="password"]'));
        this.signInButton = protractor_1.element(protractor_1.by.css('input[name="login"]'));
    }
    loginToApplication(testData) {
        globalMethods.setValueToTextField(this.userNameInput, testData.userName);
        globalMethods.setValueToTextField(this.passwordInput, testData.password);
        protractor_1.browser.sleep(3000);
        globalMethods.clickOnElement(this.signInButton);
    }
    navigateToRegisterPage() {
        this.register.click();
    }
    navigateToSignOnPage() {
        this.signOn.click();
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvaG9tZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUU7QUFDakUsNERBQXlEO0FBRXpELE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBRTFDLE1BQWEsUUFBUTtJQVVqQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtRQUVqRSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUE7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO0lBRTlELENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxRQUFjO1FBQzdCLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2RSxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkIsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUdELHNCQUFzQjtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHRCxvQkFBb0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBSUo7QUF4Q0QsNEJBd0NDIn0=