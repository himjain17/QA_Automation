import { ElementArrayFinder, ElementFinder } from "protractor"
import fs from 'fs';


export class GlobalMethods{

    

    constructor(){
    }

    selectValueByVisibleText =  async function(countryListElements:ElementArrayFinder, elementToBeSelect:String)
           :Promise<ElementFinder> {
               let matchedElement : ElementFinder ;
               return await countryListElements.filter(async (element)=>{
                            const text = await element.getAttribute('innerText');
                            if (text.trim() === elementToBeSelect) {
                                matchedElement = element;
                                return matchedElement;
                            } 
                    }).first();
                }

    
                
    

}