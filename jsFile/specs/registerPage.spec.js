"use strict";
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
const protractor_1 = require("protractor");
const testData = __importStar(require("../testData/registrationData.json"));
const registerPage = new registerPage_1.RegisterPage();
const homePage = new homePage_1.HomePage();
describe('Fill registration Form', () => {
    // console.log("path---> "+process.cwd())
    // const filePath = process.cwd() + "testData\\rigistrationData.json"
    // const testDataObject = util.convertJSONFileIntoJSObject(filePath)
    // console.log((<any>testData).firstName)
    it('fill contact Details', () => {
        protractor_1.browser.get('http://newtours.demoaut.com/mercurywelcome.php');
        homePage.navigateToRegisterPage();
        registerPage.fillRegistrationForm(testData);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9yZWdpc3RlclBhZ2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx3REFBcUQ7QUFDckQsZ0RBQTZDO0FBQzdDLDJDQUFxQztBQUNyQyw0RUFBOEQ7QUFHOUQsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFHaEMsUUFBUSxDQUFDLHdCQUF3QixFQUFDLEdBQUcsRUFBRTtJQUVuQyx5Q0FBeUM7SUFDekMscUVBQXFFO0lBQ3JFLG9FQUFvRTtJQUNwRSx5Q0FBeUM7SUFHekMsRUFBRSxDQUFDLHNCQUFzQixFQUFDLEdBQUcsRUFBRTtRQUMzQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQzlELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=