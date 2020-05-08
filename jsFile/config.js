"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['../jsFile/specs/loginPage.spec.js'],
    baseUrl: 'http://newtours.demoaut.com/mercurywelcome.php',
    capabilities: {
        browserName: 'chrome'
    },
    getPageTimeout: 20000,
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().window().maximize();
        //browser.manage().timeouts().implicitlyWait(10000);
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        }));
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 80000
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RSwyQ0FBMkM7QUFFaEMsUUFBQSxNQUFNLEdBQVk7SUFDekIsYUFBYSxFQUFHLElBQUk7SUFFcEIsbURBQW1EO0lBQ25ELEtBQUssRUFBRyxDQUFDLG1DQUFtQyxDQUFDO0lBQzdDLE9BQU8sRUFBRyxnREFBZ0Q7SUFDMUQsWUFBWSxFQUFHO1FBQ1gsV0FBVyxFQUFHLFFBQVE7S0FDekI7SUFDRCxjQUFjLEVBQUcsS0FBSztJQUV0QixTQUFTLEVBQUc7UUFDUixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsb0RBQW9EO1FBQ3BELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxvQkFBb0IsQ0FBQztZQUNsRCxRQUFRLEVBQUcsb0JBQW9CO1NBQ2xDLENBQUMsQ0FDRCxDQUFDO0lBQ04sQ0FBQztJQUVELGVBQWUsRUFBRztRQUNkLFVBQVUsRUFBRyxJQUFJO1FBQ2pCLHNCQUFzQixFQUFHLEtBQUs7S0FDakM7Q0FHSixDQUFBIn0=