import { ElementArrayFinder, ElementFinder, ExpectedConditions, browser } from "protractor"



export class GlobalMethods{

    

    constructor(){
    }

    selectValueByVisibleText = async function(countryListElements:ElementArrayFinder, elementToBeSelect:string)
            {
               let matchedElement : ElementFinder ;
               try{
                return await countryListElements.filter(async (element)=>{
                    const text = await element.getAttribute('innerText');
                    if (text.trim() === elementToBeSelect) {
                        matchedElement = element;
                        return matchedElement;
                    } 
            }).click();
                }
               catch(err){
                    console.log(err)
               }
        }

    
    async setValueToTextField(fieldName:ElementFinder, fieldValue:string){
            try{
                await browser.wait(ExpectedConditions.presenceOf(fieldName),5000,`${fieldName} is not present on UI.`);
                await fieldName.sendKeys(fieldValue)
            }
            catch(err){
                console.log(err)
            }

        
    }

    async clickOnElement(elementName:ElementFinder){
        try{
            await browser.wait(ExpectedConditions.elementToBeClickable(elementName),5000,`${elementName} is not present on UI.`);
            await browser.actions().mouseMove(elementName).perform();
            await browser.actions().click().perform();
        }
        catch(err){
            console.log(err)
            
        }
        
    }
    

}