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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9ob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRTtBQUNqRSw0REFBeUQ7QUFFekQsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFFMUMsTUFBYSxRQUFRO0lBVWpCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFBO1FBRWpFLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQTtRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUE7UUFDbEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7SUFFOUQsQ0FBQztJQUVELGtCQUFrQixDQUFDLFFBQWM7UUFDN0IsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2RSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBR0Qsc0JBQXNCO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdELG9CQUFvQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FJSjtBQXhDRCw0QkF3Q0MifQ==