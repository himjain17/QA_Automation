import { ElementArrayFinder, ElementFinder, element, by } from "protractor"
import { GlobalMethods } from "../utility/globalMethods";

const globalMethods = new GlobalMethods()

export class FlightPage{

    tripType : string
    passengersCount : ElementFinder
    passengersCountList : ElementArrayFinder
    departingFrom : ElementFinder
    departingFromList : ElementArrayFinder
    fromMonth : ElementFinder
    fromMonthList : ElementArrayFinder
    fromDay : ElementFinder
    fromDayList : ElementArrayFinder
    arrivingIn : ElementFinder
    arrivingInList : ElementArrayFinder
    returnMonth : ElementFinder
    returnMonthList : ElementArrayFinder
    returnDay : ElementFinder
    returnDayList : ElementArrayFinder
    serviceClass : string
    airline : ElementFinder
    airlineList : ElementArrayFinder
    findFlightsButton : ElementFinder
    reserveFlightButton : ElementFinder
    passFirstName : ElementFinder
    passLastName : ElementFinder
    meal : ElementFinder
    mealList : ElementArrayFinder
    cardType : ElementFinder                        
    cardTypeList : ElementArrayFinder               
    creditCardNumber : ElementFinder                
    cc_expiry_month : ElementFinder                
    cc_expiry_month_list : ElementArrayFinder       
    cc_expiry_year : ElementFinder                  
    cc_expiry_year_list : ElementArrayFinder        
    cc_first_name : ElementFinder                   
    cc_mid_name : ElementFinder
    cc_last_name : ElementFinder    
    buyFlightButton : ElementFinder    
    successMessage : ElementFinder   
    signOfflink : ElementFinder         


    constructor(){
        this.tripType = 'input[name="tripType"][value="'
        this.passengersCount = element(by.css('select[name="passCount"]'))
        this.passengersCountList = element.all(by.css('select[name="passCount"] option'))
        this.departingFrom = element(by.css('select[name="fromPort"]'))
        this.departingFromList = element.all(by.css('select[name="fromPort"] option'))
        this.fromMonth = element(by.css('select[name="fromMonth"]'))
        this.fromMonthList =  element.all(by.css('select[name="fromMonth"] option'))
        this.fromDay =  element(by.css('select[name="fromDay"]'))
        this.fromDayList =  element.all(by.css('select[name="fromDay"] option'))
        this.arrivingIn = element(by.css('select[name="toPort"]'))
        this.arrivingInList = element.all(by.css('select[name="toPort"] option'))
        this.returnMonth = element(by.css('select[name="toMonth"]'))
        this.returnMonthList = element.all(by.css('select[name="toMonth"] option'))
        this.returnDay = element(by.css('select[name="toDay"]'))
        this.returnDayList = element.all(by.css('select[name="toDay"] option'))
        this.serviceClass = 'input[name="servClass"][value="'
        this.airline = element(by.css('select[name="airline"]'))
        this.airlineList = element.all(by.css('select[name="airline"] option'))
        this.findFlightsButton = element(by.css('input[name="findFlights"]'))
        this.reserveFlightButton = element(by.css('input[name="reserveFlights"]'))

        this.passFirstName = element(by.css('input[name="passFirst0"]'))
        this.passLastName =  element(by.css('input[name="passLast0"]'))
        this.meal = element(by.css('select[name="pass.0.meal"]'))
        this.mealList = element.all(by.css('select[name="pass.0.meal"] option'))
        this.cardType = element(by.css('select[name="creditCard"]'))
        this.cardTypeList = element.all(by.css('select[name="creditCard"] option'))
        this.creditCardNumber = element(by.css('input[name="creditnumber"]'))
        this.cc_expiry_month = element(by.css('select[name="cc_exp_dt_mn"]'))
        this.cc_expiry_month_list = element.all(by.css('select[name="cc_exp_dt_mn"] option'))
        this.cc_expiry_year = element(by.css('select[name="cc_exp_dt_yr"]'))
        this.cc_expiry_year_list = element.all(by.css('select[name="cc_exp_dt_yr"] option'))
        this.cc_first_name = element(by.css('input[name="cc_frst_name"]'))
        this.cc_mid_name = element(by.css('input[name="cc_mid_name"]'))
        this.cc_last_name = element(by.css('input[name="cc_last_name"]'))
        this.buyFlightButton = element(by.css('input[name="buyFlights"]'))

        this.successMessage = element(by.xpath('(//b/font[2])[contains(text(),"booked")]'))

        this.signOfflink = element(by.xpath('//a[contains(text(),"SIGN-OFF")]'))
    
    
    }


    selectTripType(){
            globalMethods.selectRadioButtonByVisibleText(this.tripType,'oneway')
    }

    async selectNumberOfPassengers(){
        await globalMethods.clickOnElement(this.passengersCount);
        await globalMethods.selectValueByVisibleText(this.passengersCountList,'2')
    }
    

    async selectDepartureValue(){
        await globalMethods.clickOnElement(this.departingFrom);
        await globalMethods.selectValueByVisibleText(this.departingFromList,'Frankfurt')
    }


    async selectFromMonth(){
        await globalMethods.clickOnElement(this.fromMonth)
        await globalMethods.selectValueByVisibleText(this.fromMonthList,'May')
    }

    async selectFromDay(){
        await globalMethods.clickOnElement(this.fromDay)
        await globalMethods.selectValueByVisibleText(this.fromDayList,'10')
    }


    async selectArrivingInValue(){
        await globalMethods.clickOnElement(this.arrivingIn);
        await globalMethods.selectValueByVisibleText(this.arrivingInList,'Paris')
    }


    async selectReturnMonth(){
        await globalMethods.clickOnElement(this.returnMonth)
        await globalMethods.selectValueByVisibleText(this.returnMonthList,'June')
    }

    async selectReturnDay(){
        await globalMethods.clickOnElement(this.returnDay)
        await globalMethods.selectValueByVisibleText(this.returnDayList,'12')
    }

    selectServiceClass(){
        globalMethods.selectRadioButtonByVisibleText(this.serviceClass,'Business class')
    }

    async selectAirline(){
        await globalMethods.clickOnElement(this.airline)
        await globalMethods.selectValueByVisibleText(this.airlineList,'Blue Skies Airlines')
    }

    async getSignOffText(){
        return await globalMethods.getElementText(this.signOfflink,'SIGN-OFF')
    }

    async selectFlightFinder(){
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
        await globalMethods.clickOnElement(this.findFlightsButton)
        await globalMethods.clickOnElement(this.reserveFlightButton)
    }

    async fillPassengerDetail(){
        await globalMethods.setValueToTextField(this.passFirstName,'Ernso')
        await globalMethods.setValueToTextField(this.passLastName,'luis')
        await globalMethods.clickOnElement(this.meal);
        await globalMethods.selectValueByVisibleText(this.mealList,'Hindu')
    }

    async fillCreditCardDetails(){
        await globalMethods.clickOnElement(this.cardType);
        await globalMethods.selectValueByVisibleText(this.cardTypeList,'Visa')
        await globalMethods.setValueToTextField(this.creditCardNumber,'123456963')
        await globalMethods.clickOnElement(this.cc_expiry_month)
        await globalMethods.selectValueByVisibleText(this.cc_expiry_month_list,'08')
        await globalMethods.clickOnElement(this.cc_expiry_year)
        await globalMethods.selectValueByVisibleText(this.cc_expiry_year_list,'2010')
        await globalMethods.setValueToTextField(this.cc_first_name,'Ernso')
        await globalMethods.setValueToTextField(this.cc_mid_name,'elo')
        await globalMethods.setValueToTextField(this.cc_last_name,'luis')
        await globalMethods.clickOnElement(this.buyFlightButton);

    }

    fillPassengerAndCCDetails(){
        this.fillPassengerDetail();
        this.fillCreditCardDetails();
    }

    async getTheSuccessMsg(){
        return await globalMethods.getElementText(this.successMessage,'Your itinerary has been booked!')
    }

    bookFlight(){
        this.selectFlightFinder();
        this.fillPassengerAndCCDetails();

    }

    async signOffApplication(){
        await globalMethods.clickOnElement(this.signOfflink);
    }
    


}