import {Config, browser} from "protractor";

export let config : Config ={
    directConnect : true,
    
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    specs : ['../jsFile/specs/loginPage.spec.js'],
    baseUrl : 'http://newtours.demoaut.com/mercurywelcome.php',
    capabilities : {
        browserName : 'chrome'
    },
    getPageTimeout : 20000,
    
    onPrepare : function(){
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    },

    jasmineNodeOpts : {
        showColors : true,
        defaultTimeoutInterval : 80000
    }

    
}