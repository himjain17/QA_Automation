"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const homePage_1 = require("../pages/homePage");
const flightPage_1 = require("../pages/flightPage");
const signOnPage_1 = require("../pages/signOnPage");
const jasmine_data_provider_1 = __importDefault(require("jasmine-data-provider"));
//import * as userData from "../testData/userData.json";
const uesrTestData_1 = require("../testData/uesrTestData");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3BlY3MvbG9naW5QYWdlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQ0FBb0M7QUFDcEMsZ0RBQTZDO0FBQzdDLG9EQUFpRDtBQUNqRCxvREFBaUQ7QUFDakQsa0ZBQTBDO0FBQzFDLHdEQUF3RDtBQUN4RCwyREFBaUQ7QUFFakQsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDaEMsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDcEMsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDcEMsTUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUE7QUFFcEMsUUFBUSxDQUFDLGlEQUFpRCxFQUFDLEdBQUcsRUFBRTtJQUU1RCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ1gsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQTtRQUM3RCxPQUFPLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFBO0lBQzlDLENBQUMsQ0FBQyxDQUFBO0lBRUYsK0JBQUssQ0FBQyx1QkFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFO1FBQ2xDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQyxHQUFHLEVBQUU7WUFDM0IsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDaEMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksbUJBQW1CLEdBQUcsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RELFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9