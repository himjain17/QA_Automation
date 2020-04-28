import {Config, browser} from "protractor";

export let config : Config ={
    directConnect : true,
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    specs : ['../jsFile/specs/registerPage.spec.js'],
    capabilities : {
        browserName : 'chrome'
    },
    onPrepare : function(){
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    }
    
}