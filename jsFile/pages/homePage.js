"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        this.navigateToSignOnPage = function () {
        };
        this.register = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"REGISTER")]')),
            this.signOn = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"SIGN-ON")]'));
    }
    navigateToRegisterPage() {
        this.register.click();
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9ob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUd4RCxNQUFhLFFBQVE7SUFLakI7UUFjQSx5QkFBb0IsR0FBRztRQUV2QixDQUFDLENBQUE7UUFmRyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQTtJQUV0RSxDQUFDO0lBR0Qsc0JBQXNCO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQVdKO0FBekJELDRCQXlCQyJ9