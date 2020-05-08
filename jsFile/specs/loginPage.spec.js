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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9sb2dpblBhZ2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJDQUFvQztBQUNwQyxnREFBNkM7QUFDN0Msb0RBQWlEO0FBQ2pELG9EQUFpRDtBQUNqRCxrRkFBMEM7QUFDMUMsd0RBQXdEO0FBQ3hELDJEQUFpRDtBQUVqRCxNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUNoQyxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUNwQyxNQUFNLGlCQUFpQixHQUFHLFVBQVUsQ0FBQTtBQUVwQyxRQUFRLENBQUMsaURBQWlELEVBQUMsR0FBRyxFQUFFO0lBRTVELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDWCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFBO1FBQzdELE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUE7SUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFFRiwrQkFBSyxDQUFDLHVCQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUU7UUFDbEMsRUFBRSxDQUFDLHNCQUFzQixFQUFDLEdBQUcsRUFBRTtZQUMzQixRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUNoQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxtQkFBbUIsR0FBRyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEQsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDaEMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIn0=