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
const globalMethods_1 = require("../utility/globalMethods");
const globalMethods = new globalMethods_1.GlobalMethods();
class FlightPage {
    constructor() {
        this.tripType = 'input[name="tripType"][value="';
        this.passengersCount = protractor_1.element(protractor_1.by.css('select[name="passCount"]'));
        this.passengersCountList = protractor_1.element.all(protractor_1.by.css('select[name="passCount"] option'));
        this.departingFrom = protractor_1.element(protractor_1.by.css('select[name="fromPort"]'));
        this.departingFromList = protractor_1.element.all(protractor_1.by.css('select[name="fromPort"] option'));
        this.fromMonth = protractor_1.element(protractor_1.by.css('select[name="fromMonth"]'));
        this.fromMonthList = protractor_1.element.all(protractor_1.by.css('select[name="fromMonth"] option'));
        this.fromDay = protractor_1.element(protractor_1.by.css('select[name="fromDay"]'));
        this.fromDayList = protractor_1.element.all(protractor_1.by.css('select[name="fromDay"] option'));
        this.arrivingIn = protractor_1.element(protractor_1.by.css('select[name="toPort"]'));
        this.arrivingInList = protractor_1.element.all(protractor_1.by.css('select[name="toPort"] option'));
        this.returnMonth = protractor_1.element(protractor_1.by.css('select[name="toMonth"]'));
        this.returnMonthList = protractor_1.element.all(protractor_1.by.css('select[name="toMonth"] option'));
        this.returnDay = protractor_1.element(protractor_1.by.css('select[name="toDay"]'));
        this.returnDayList = protractor_1.element.all(protractor_1.by.css('select[name="toDay"] option'));
        this.serviceClass = 'input[name="servClass"][value="';
        this.airline = protractor_1.element(protractor_1.by.css('select[name="airline"]'));
        this.airlineList = protractor_1.element.all(protractor_1.by.css('select[name="airline"] option'));
        this.findFlightsButton = protractor_1.element(protractor_1.by.css('input[name="findFlights"]'));
        this.reserveFlightButton = protractor_1.element(protractor_1.by.css('input[name="reserveFlights"]'));
        this.passFirstName = protractor_1.element(protractor_1.by.css('input[name="passFirst0"]'));
        this.passLastName = protractor_1.element(protractor_1.by.css('input[name="passLast0"]'));
        this.meal = protractor_1.element(protractor_1.by.css('select[name="pass.0.meal"]'));
        this.mealList = protractor_1.element.all(protractor_1.by.css('select[name="pass.0.meal"] option'));
        this.cardType = protractor_1.element(protractor_1.by.css('select[name="creditCard"]'));
        this.cardTypeList = protractor_1.element.all(protractor_1.by.css('select[name="creditCard"] option'));
        this.creditCardNumber = protractor_1.element(protractor_1.by.css('input[name="creditnumber"]'));
        this.cc_expiry_month = protractor_1.element(protractor_1.by.css('select[name="cc_exp_dt_mn"]'));
        this.cc_expiry_month_list = protractor_1.element.all(protractor_1.by.css('select[name="cc_exp_dt_mn"] option'));
        this.cc_expiry_year = protractor_1.element(protractor_1.by.css('select[name="cc_exp_dt_yr"]'));
        this.cc_expiry_year_list = protractor_1.element.all(protractor_1.by.css('select[name="cc_exp_dt_yr"] option'));
        this.cc_first_name = protractor_1.element(protractor_1.by.css('input[name="cc_frst_name"]'));
        this.cc_mid_name = protractor_1.element(protractor_1.by.css('input[name="cc_mid_name"]'));
        this.cc_last_name = protractor_1.element(protractor_1.by.css('input[name="cc_last_name"]'));
        this.buyFlightButton = protractor_1.element(protractor_1.by.css('input[name="buyFlights"]'));
        this.successMessage = protractor_1.element(protractor_1.by.xpath('(//b/font[2])[contains(text(),"booked")]'));
        this.signOfflink = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"SIGN-OFF")]'));
    }
    selectTripType() {
        globalMethods.selectRadioButtonByVisibleText(this.tripType, 'oneway');
    }
    selectNumberOfPassengers() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.passengersCount);
            yield globalMethods.selectValueByVisibleText(this.passengersCountList, '2');
        });
    }
    selectDepartureValue() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.departingFrom);
            yield globalMethods.selectValueByVisibleText(this.departingFromList, 'Frankfurt');
        });
    }
    selectFromMonth() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.fromMonth);
            yield globalMethods.selectValueByVisibleText(this.fromMonthList, 'May');
        });
    }
    selectFromDay() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.fromDay);
            yield globalMethods.selectValueByVisibleText(this.fromDayList, '10');
        });
    }
    selectArrivingInValue() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.arrivingIn);
            yield globalMethods.selectValueByVisibleText(this.arrivingInList, 'Paris');
        });
    }
    selectReturnMonth() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.returnMonth);
            yield globalMethods.selectValueByVisibleText(this.returnMonthList, 'June');
        });
    }
    selectReturnDay() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.returnDay);
            yield globalMethods.selectValueByVisibleText(this.returnDayList, '12');
        });
    }
    selectServiceClass() {
        globalMethods.selectRadioButtonByVisibleText(this.serviceClass, 'Business class');
    }
    selectAirline() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.airline);
            yield globalMethods.selectValueByVisibleText(this.airlineList, 'Blue Skies Airlines');
        });
    }
    getSignOffText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield globalMethods.getElementText(this.signOfflink, 'SIGN-OFF');
        });
    }
    selectFlightFinder() {
        return __awaiter(this, void 0, void 0, function* () {
            this.selectTripType();
            this.selectNumberOfPassengers();
            this.selectDepartureValue();
            this.selectFromMonth();
            this.selectFromDay();
            this.selectArrivingInValue();
            this.selectReturnMonth();
            this.selectReturnDay();
            this.selectServiceClass();
            this.selectAirline();
            yield globalMethods.clickOnElement(this.findFlightsButton);
            yield globalMethods.clickOnElement(this.reserveFlightButton);
        });
    }
    fillPassengerDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.setValueToTextField(this.passFirstName, 'Ernso');
            yield globalMethods.setValueToTextField(this.passLastName, 'luis');
            yield globalMethods.clickOnElement(this.meal);
            yield globalMethods.selectValueByVisibleText(this.mealList, 'Hindu');
        });
    }
    fillCreditCardDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.cardType);
            yield globalMethods.selectValueByVisibleText(this.cardTypeList, 'Visa');
            yield globalMethods.setValueToTextField(this.creditCardNumber, '123456963');
            yield globalMethods.clickOnElement(this.cc_expiry_month);
            yield globalMethods.selectValueByVisibleText(this.cc_expiry_month_list, '08');
            yield globalMethods.clickOnElement(this.cc_expiry_year);
            yield globalMethods.selectValueByVisibleText(this.cc_expiry_year_list, '2010');
            yield globalMethods.setValueToTextField(this.cc_first_name, 'Ernso');
            yield globalMethods.setValueToTextField(this.cc_mid_name, 'elo');
            yield globalMethods.setValueToTextField(this.cc_last_name, 'luis');
            yield globalMethods.clickOnElement(this.buyFlightButton);
        });
    }
    fillPassengerAndCCDetails() {
        this.fillPassengerDetail();
        this.fillCreditCardDetails();
    }
    getTheSuccessMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield globalMethods.getElementText(this.successMessage, 'Your itinerary has been booked!');
        });
    }
    bookFlight() {
        this.selectFlightFinder();
        this.fillPassengerAndCCDetails();
    }
    signOffApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalMethods.clickOnElement(this.signOfflink);
        });
    }
}
exports.FlightPage = FlightPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL2ZsaWdodFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkU7QUFDM0UsNERBQXlEO0FBRXpELE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFBO0FBRXpDLE1BQWEsVUFBVTtJQXlDbkI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLGdDQUFnQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUE7UUFDakYsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQTtRQUM5RSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBSSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsT0FBTyxHQUFJLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUE7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBSSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQTtRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtRQUN6RSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQTtRQUMzRSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsWUFBWSxHQUFHLGlDQUFpQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFBO1FBRTFFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFJLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUE7UUFDL0QsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFBO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUE7UUFDM0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7UUFDckUsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQTtRQUNyRixJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7UUFDcEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFBO1FBQ3BGLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUE7UUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQTtRQUVsRSxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUE7UUFFbkYsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFBO0lBRzVFLENBQUM7SUFHRCxjQUFjO1FBQ04sYUFBYSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUUsQ0FBQztJQUVLLHdCQUF3Qjs7WUFDMUIsTUFBTSxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN6RCxNQUFNLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDOUUsQ0FBQztLQUFBO0lBR0ssb0JBQW9COztZQUN0QixNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxXQUFXLENBQUMsQ0FBQTtRQUNwRixDQUFDO0tBQUE7SUFHSyxlQUFlOztZQUNqQixNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ2xELE1BQU0sYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUUsQ0FBQztLQUFBO0lBRUssYUFBYTs7WUFDZixNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2hELE1BQU0sYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkUsQ0FBQztLQUFBO0lBR0sscUJBQXFCOztZQUN2QixNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsT0FBTyxDQUFDLENBQUE7UUFDN0UsQ0FBQztLQUFBO0lBR0ssaUJBQWlCOztZQUNuQixNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3BELE1BQU0sYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0UsQ0FBQztLQUFBO0lBRUssZUFBZTs7WUFDakIsTUFBTSxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNsRCxNQUFNLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pFLENBQUM7S0FBQTtJQUVELGtCQUFrQjtRQUNkLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDcEYsQ0FBQztJQUVLLGFBQWE7O1lBQ2YsTUFBTSxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNoRCxNQUFNLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLHFCQUFxQixDQUFDLENBQUE7UUFDeEYsQ0FBQztLQUFBO0lBRUssY0FBYzs7WUFDaEIsT0FBTyxNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxVQUFVLENBQUMsQ0FBQTtRQUMxRSxDQUFDO0tBQUE7SUFFSyxrQkFBa0I7O1lBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsTUFBTSxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQzFELE1BQU0sYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNoRSxDQUFDO0tBQUE7SUFFSyxtQkFBbUI7O1lBQ3JCLE1BQU0sYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsT0FBTyxDQUFDLENBQUE7WUFDbkUsTUFBTSxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxNQUFNLENBQUMsQ0FBQTtZQUNqRSxNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLE1BQU0sYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkUsQ0FBQztLQUFBO0lBRUsscUJBQXFCOztZQUN2QixNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsTUFBTSxDQUFDLENBQUE7WUFDdEUsTUFBTSxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzFFLE1BQU0sYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDeEQsTUFBTSxhQUFhLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFDLElBQUksQ0FBQyxDQUFBO1lBQzVFLE1BQU0sYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDdkQsTUFBTSxhQUFhLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzdFLE1BQU0sYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsT0FBTyxDQUFDLENBQUE7WUFDbkUsTUFBTSxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxLQUFLLENBQUMsQ0FBQTtZQUMvRCxNQUFNLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2pFLE1BQU0sYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0QsQ0FBQztLQUFBO0lBRUQseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFSyxnQkFBZ0I7O1lBQ2xCLE9BQU8sTUFBTSxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsaUNBQWlDLENBQUMsQ0FBQTtRQUNwRyxDQUFDO0tBQUE7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFFckMsQ0FBQztJQUVLLGtCQUFrQjs7WUFDcEIsTUFBTSxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQUE7Q0FJSjtBQXpNRCxnQ0F5TUMifQ==