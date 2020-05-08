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
        this.selectValueByVisibleText = function (ListOfElements, elementToBeSelect) {
            return __awaiter(this, void 0, void 0, function* () {
                let matchedElement;
                try {
                    return yield ListOfElements.filter((element) => __awaiter(this, void 0, void 0, function* () {
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
    selectRadioButtonByVisibleText(customCSSPathOfElement, elementToBeSelect) {
        let ele = protractor_1.element(protractor_1.by.css(customCSSPathOfElement + elementToBeSelect + '"]'));
        this.clickOnElement(ele);
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
            if (typeof elementName !== 'undefined') {
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(elementName), 5000, `${elementName} is not visible on UI.`);
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(elementName), 5000, `${elementName} is not clickable or disabled.`);
                yield protractor_1.browser.actions().mouseMove(elementName).perform();
                yield protractor_1.browser.actions().click().perform();
            }
            // try{
            //     await browser.wait(ExpectedConditions.elementToBeClickable(elementName),5000,`${elementName} is not present on UI.`);
            //     await browser.actions().mouseMove(elementName).perform();
            //     await browser.actions().click().perform();
            // }
            // catch(err){
            //     console.log(err)
            // }
        });
    }
    getElementText(elementName, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElement(elementName, text), 5000, `${text} is not belong to ${elementName}`);
            return yield elementName.getText();
        });
    }
}
exports.GlobalMethods = GlobalMethods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsTWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxpdHkvZ2xvYmFsTWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUF3RztBQUl4RyxNQUFhLGFBQWE7SUFJdEI7UUFTQSw2QkFBd0IsR0FBRyxVQUFlLGNBQWlDLEVBQUUsaUJBQXdCOztnQkFFMUYsSUFBSSxjQUE4QixDQUFFO2dCQUNwQyxJQUFHO29CQUNGLE9BQU8sTUFBTSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQU8sT0FBTyxFQUFDLEVBQUU7d0JBQ2hELE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDckQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssaUJBQWlCLEVBQUU7NEJBQ25DLGNBQWMsR0FBRyxPQUFPLENBQUM7NEJBQ3pCLE9BQU8sY0FBYyxDQUFDO3lCQUN6QjtvQkFDVCxDQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNOO2dCQUNGLE9BQU0sR0FBRyxFQUFDO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ3BCO1lBQ1IsQ0FBQztTQUFBLENBQUE7SUF2QkwsQ0FBQztJQUVELDhCQUE4QixDQUFDLHNCQUE4QixFQUFDLGlCQUF3QjtRQUM5RSxJQUFJLEdBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFxQkssbUJBQW1CLENBQUMsU0FBdUIsRUFBRSxVQUFpQjs7WUFDNUQsSUFBRztnQkFDQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUMsR0FBRyxTQUFTLHdCQUF3QixDQUFDLENBQUM7Z0JBQ3ZHLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUN2QztZQUNELE9BQU0sR0FBRyxFQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDbkI7UUFHVCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsV0FBeUI7O1lBQzFDLElBQUcsT0FBTyxXQUFXLEtBQUssV0FBVyxFQUFDO2dCQUNsQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUMsR0FBRyxXQUFXLHdCQUF3QixDQUFDLENBQUM7Z0JBQzdHLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEVBQUMsSUFBSSxFQUFDLEdBQUcsV0FBVyxnQ0FBZ0MsQ0FBQyxDQUFDO2dCQUM3SCxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6RCxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDN0M7WUFFRCxPQUFPO1lBQ1AsNEhBQTRIO1lBQzVILGdFQUFnRTtZQUNoRSxpREFBaUQ7WUFDakQsSUFBSTtZQUNKLGNBQWM7WUFDZCx1QkFBdUI7WUFFdkIsSUFBSTtRQUNSLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxXQUF5QixFQUFDLElBQVc7O1lBQ3RELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFDekUsR0FBRyxJQUFJLHFCQUFxQixXQUFXLEVBQUUsQ0FBQyxDQUFBO1lBQ3RELE9BQU8sTUFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBR0o7QUFyRUQsc0NBcUVDIn0=