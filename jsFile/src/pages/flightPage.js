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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9mbGlnaHRQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJFO0FBQzNFLDREQUF5RDtBQUV6RCxNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQTtBQUV6QyxNQUFhLFVBQVU7SUF5Q25CO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxnQ0FBZ0MsQ0FBQTtRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUE7UUFDbEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUE7UUFDOUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxhQUFhLEdBQUksb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLE9BQU8sR0FBSSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUksb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxD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