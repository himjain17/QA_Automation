"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Demo App', function () {
    it('should have a title', function () {
        protractor_1.browser.get('http://newtours.demoaut.com/mercurywelcome.php');
        expect(protractor_1.browser.getTitle()).toEqual('Welcome: Mercury Tours');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtQztBQUduQyxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDNUIsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1FBQ3hCLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFFOUQsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=