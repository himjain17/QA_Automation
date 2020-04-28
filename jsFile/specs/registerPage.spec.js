"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registerPage_1 = require("../pages/registerPage");
const homePage_1 = require("../pages/homePage");
const protractor_1 = require("protractor");
let registerPage = new registerPage_1.RegisterPage();
let homePage = new homePage_1.HomePage();
describe('Fill registration Form', () => {
    it('fill contact Details', () => {
        protractor_1.browser.get('http://newtours.demoaut.com/mercurywelcome.php');
        homePage.navigateToRegisterPage();
        registerPage.fillRegistrationForm();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9yZWdpc3RlclBhZ2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFxRDtBQUNyRCxnREFBNkM7QUFDN0MsMkNBQXFDO0FBRXJDLElBQUksWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBQ3RDLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBRTlCLFFBQVEsQ0FBQyx3QkFBd0IsRUFBQyxHQUFHLEVBQUU7SUFDbkMsRUFBRSxDQUFDLHNCQUFzQixFQUFDLEdBQUcsRUFBRTtRQUMzQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQzlELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==