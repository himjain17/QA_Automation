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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class GlobalMethods {
    constructor() {
        this.selectValueByVisibleText = function (countryListElements, elementToBeSelect) {
            return __awaiter(this, void 0, void 0, function* () {
                let matchedElement;
                try {
                    return yield countryListElements.filter((element) => __awaiter(this, void 0, void 0, function* () {
                        const text = yield element.getAttribute('innerText');
                        if (text.trim() === elementToBeSelect) {
                            matchedElement = element;
                            return matchedElement;
                        }
                    })).click();
                }
                catch (err) {
                    console.log(err);
                }
            });
        };
    }
    setValueToTextField(fieldName, fieldValue) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(fieldName), 5000, `${fieldName} is not present on UI.`);
                yield fieldName.sendKeys(fieldValue);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    clickOnElement(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(elementName), 5000);
                yield protractor_1.browser.actions().mouseMove(elementName).perform();
                yield protractor_1.browser.actions().click().perform();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.GlobalMethods = GlobalMethods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsTWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxpdHkvZ2xvYmFsTWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUEyRjtBQUkzRixNQUFhLGFBQWE7SUFJdEI7UUFHQSw2QkFBd0IsR0FBRyxVQUFlLG1CQUFzQyxFQUFFLGlCQUF3Qjs7Z0JBRS9GLElBQUksY0FBOEIsQ0FBRTtnQkFDcEMsSUFBRztvQkFDRixPQUFPLE1BQU0sbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQU8sT0FBTyxFQUFDLEVBQUU7d0JBQ3JELE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDckQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssaUJBQWlCLEVBQUU7NEJBQ25DLGNBQWMsR0FBRyxPQUFPLENBQUM7NEJBQ3pCLE9BQU8sY0FBYyxDQUFDO3lCQUN6QjtvQkFDVCxDQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNOO2dCQUNGLE9BQU0sR0FBRyxFQUFDO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ3BCO1lBQ1IsQ0FBQztTQUFBLENBQUE7SUFqQkwsQ0FBQztJQW9CSyxtQkFBbUIsQ0FBQyxTQUF1QixFQUFFLFVBQWlCOztZQUM1RCxJQUFHO2dCQUNDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBQyxHQUFHLFNBQVMsd0JBQXdCLENBQUMsQ0FBQztnQkFDdkcsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQ3ZDO1lBQ0QsT0FBTSxHQUFHLEVBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNuQjtRQUdULENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxXQUF5Qjs7WUFDMUMsSUFBRztnQkFDQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5RSxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6RCxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDN0M7WUFDRCxPQUFNLEdBQUcsRUFBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBRW5CO1FBRUwsQ0FBQztLQUFBO0NBR0o7QUFuREQsc0NBbURDIn0=