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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerPage_1 = require("../src/pages/registerPage");
const homePage_1 = require("../src/pages/homePage");
const signOnPage_1 = require("../src/pages/signOnPage");
const protractor_1 = require("protractor");
const flightPage_1 = require("../src/pages/flightPage");
const testData = __importStar(require("../src/testData/registrationData.json"));
const registerPage = new registerPage_1.RegisterPage();
const homePage = new homePage_1.HomePage();
const signOnPage = new signOnPage_1.SignOnPage();
const flightPage = new flightPage_1.FlightPage();
describe('Fill registration Form', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://newtours.demoaut.com/mercurywelcome.php');
    }));
    // it('fill contact Details',() => {
    //     homePage.navigateToRegisterPage();
    //     registerPage.fillRegistrationForm(testData);
    // })
    it('Login to application', () => __awaiter(void 0, void 0, void 0, function* () {
        homePage.navigateToSignOnPage();
        signOnPage.loginToApplication(testData);
        flightPage.bookFlight();
        console.log('success message-->' + (yield flightPage.getTheSuccessMsg()));
        expect(flightPage.getTheSuccessMsg()).toBe('Your itinerary has been booked!');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9yZWdpc3RlclBhZ2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBeUQ7QUFDekQsb0RBQWlEO0FBQ2pELHdEQUFxRDtBQUNyRCwyQ0FBcUM7QUFDckMsd0RBQXFEO0FBQ3JELGdGQUFrRTtBQUdsRSxNQUFNLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUNoQyxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUVwQyxRQUFRLENBQUMsd0JBQXdCLEVBQUMsR0FBRyxFQUFFO0lBRW5DLFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFDakIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0lBQ3hFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFJRixvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLG1EQUFtRDtJQUNuRCxLQUFLO0lBRUwsRUFBRSxDQUFDLHNCQUFzQixFQUFDLEdBQVEsRUFBRTtRQUNoQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLElBQUUsTUFBTSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQSxDQUFDLENBQUE7UUFDdEUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7SUFDakYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=