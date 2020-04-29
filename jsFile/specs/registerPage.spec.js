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
const protractor_1 = require("protractor");
const testData = __importStar(require("../testData/registrationData.json"));
const registerPage = new registerPage_1.RegisterPage();
const homePage = new homePage_1.HomePage();
describe('Fill registration Form', () => {
    it('fill contact Details', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://newtours.demoaut.com/mercurywelcome.php');
        homePage.navigateToRegisterPage();
        registerPage.fillRegistrationForm(testData);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9yZWdpc3RlclBhZ2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBcUQ7QUFDckQsZ0RBQTZDO0FBQzdDLDJDQUFxQztBQUNyQyw0RUFBOEQ7QUFHOUQsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFHaEMsUUFBUSxDQUFDLHdCQUF3QixFQUFDLEdBQUcsRUFBRTtJQUVuQyxFQUFFLENBQUMsc0JBQXNCLEVBQUMsR0FBUyxFQUFFO1FBQ2pDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUNwRSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNsQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=