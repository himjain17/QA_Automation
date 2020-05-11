import {browser} from 'protractor';


describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://newtours.demoaut.com/mercurywelcome.php');
  
      expect(browser.getTitle()).toEqual('Welcome: Mercury Tours');
    });
  });