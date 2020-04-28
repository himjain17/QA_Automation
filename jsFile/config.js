"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['../jsFile/specs/registerPage.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().window().maximize();
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTJDO0FBRWhDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBRyxJQUFJO0lBQ3BCLG1EQUFtRDtJQUNuRCxLQUFLLEVBQUcsQ0FBQyxzQ0FBc0MsQ0FBQztJQUNoRCxZQUFZLEVBQUc7UUFDWCxXQUFXLEVBQUcsUUFBUTtLQUN6QjtJQUNELFNBQVMsRUFBRztRQUNSLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZUFBZSxFQUFHO1FBQ2QsVUFBVSxFQUFHLElBQUk7UUFDakIsc0JBQXNCLEVBQUcsS0FBSztLQUNqQztDQUdKLENBQUEifQ==