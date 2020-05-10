"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const homePage_1 = require("../src/pages/homePage");
const flightPage_1 = require("../src/pages/flightPage");
const signOnPage_1 = require("../src/pages/signOnPage");
const jasmine_data_provider_1 = __importDefault(require("jasmine-data-provider"));
const uesrTestData_1 = require("../src/testData/uesrTestData");
const homePage = new homePage_1.HomePage();
const flightPage = new flightPage_1.FlightPage();
const signOnPage = new signOnPage_1.SignOnPage();
const actualSignOffText = 'SIGN-OFF';
describe('Validate Login to the Application functionality', () => {
    beforeAll(() => {
        protractor_1.browser.get('http://newtours.demoaut.com/mercurywelcome.php');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    jasmine_data_provider_1.default(uesrTestData_1.userData, (data, description) => {
        it('Login to application', () => {
            homePage.navigateToSignOnPage();
            signOnPage.loginToApplication(data);
            let expectedSignOffText = flightPage.getSignOffText();
            flightPage.signOffApplication();
            expect(expectedSignOffText).toBe(actualSignOffText);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9sb2dpblBhZ2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJDQUFvQztBQUNwQyxvREFBaUQ7QUFDakQsd0RBQXFEO0FBQ3JELHdEQUFxRDtBQUNyRCxrRkFBMEM7QUFDMUMsK0RBQXFEO0FBRXJELE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQ3BDLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQ3BDLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFBO0FBRXBDLFFBQVEsQ0FBQyxpREFBaUQsRUFBQyxHQUFHLEVBQUU7SUFFNUQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNYLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUE7UUFDN0QsT0FBTyxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQTtJQUM5QyxDQUFDLENBQUMsQ0FBQTtJQUVGLCtCQUFLLENBQUMsdUJBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUNsQyxFQUFFLENBQUMsc0JBQXNCLEVBQUMsR0FBRyxFQUFFO1lBQzNCLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQ2hDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0RCxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==