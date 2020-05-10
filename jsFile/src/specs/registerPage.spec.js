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
const registerPage_1 = require("../pages/registerPage");
const homePage_1 = require("../pages/homePage");
const signOnPage_1 = require("../pages/signOnPage");
const protractor_1 = require("protractor");
const flightPage_1 = require("../pages/flightPage");
const testData = __importStar(require("../testData/registrationData.json"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3BlY3MvcmVnaXN0ZXJQYWdlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXFEO0FBQ3JELGdEQUE2QztBQUM3QyxvREFBaUQ7QUFDakQsMkNBQXFDO0FBQ3JDLG9EQUFpRDtBQUNqRCw0RUFBOEQ7QUFHOUQsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDaEMsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDcEMsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFFcEMsUUFBUSxDQUFDLHdCQUF3QixFQUFDLEdBQUcsRUFBRTtJQUVuQyxVQUFVLENBQUMsR0FBUSxFQUFFO1FBQ2pCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUN4RSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBSUYsb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QyxtREFBbUQ7SUFDbkQsS0FBSztJQUVMLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQyxHQUFRLEVBQUU7UUFDaEMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDaEMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixJQUFFLE1BQU0sVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUEsQ0FBQyxDQUFBO1FBQ3RFLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0lBQ2pGLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9