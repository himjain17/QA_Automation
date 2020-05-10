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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsTWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXR5L2dsb2JhbE1ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0c7QUFJeEcsTUFBYSxhQUFhO0lBSXRCO1FBU0EsNkJBQXdCLEdBQUcsVUFBZSxjQUFpQyxFQUFFLGlCQUF3Qjs7Z0JBRTFGLElBQUksY0FBOEIsQ0FBRTtnQkFDcEMsSUFBRztvQkFDRixPQUFPLE1BQU0sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFPLE9BQU8sRUFBQyxFQUFFO3dCQUNoRCxNQUFNLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3JELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLGlCQUFpQixFQUFFOzRCQUNuQyxjQUFjLEdBQUcsT0FBTyxDQUFDOzRCQUN6QixPQUFPLGNBQWMsQ0FBQzt5QkFDekI7b0JBQ1QsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDTjtnQkFDRixPQUFNLEdBQUcsRUFBQztvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUNwQjtZQUNSLENBQUM7U0FBQSxDQUFBO0lBdkJMLENBQUM7SUFFRCw4QkFBOEIsQ0FBQyxzQkFBOEIsRUFBQyxpQkFBd0I7UUFDOUUsSUFBSSxHQUFHLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBcUJLLG1CQUFtQixDQUFDLFNBQXVCLEVBQUUsVUFBaUI7O1lBQzVELElBQUc7Z0JBQ0MsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFDLEdBQUcsU0FBUyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN2RyxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDdkM7WUFDRCxPQUFNLEdBQUcsRUFBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ25CO1FBR1QsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLFdBQXlCOztZQUMxQyxJQUFHLE9BQU8sV0FBVyxLQUFLLFdBQVcsRUFBQztnQkFDbEMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUMsSUFBSSxFQUFDLEdBQUcsV0FBVyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUM3RyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxFQUFDLElBQUksRUFBQyxHQUFHLFdBQVcsZ0NBQWdDLENBQUMsQ0FBQztnQkFDN0gsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekQsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzdDO1lBRUQsT0FBTztZQUNQLDRIQUE0SDtZQUM1SCxnRUFBZ0U7WUFDaEUsaURBQWlEO1lBQ2pELElBQUk7WUFDSixjQUFjO1lBQ2QsdUJBQXVCO1lBRXZCLElBQUk7UUFDUixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsV0FBeUIsRUFBQyxJQUFXOztZQUN0RCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQ3pFLEdBQUcsSUFBSSxxQkFBcUIsV0FBVyxFQUFFLENBQUMsQ0FBQTtZQUN0RCxPQUFPLE1BQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtDQUdKO0FBckVELHNDQXFFQyJ9