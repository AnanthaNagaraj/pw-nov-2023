import { chromium, expect, firefox, test } from "@playwright/test";
import exp from "constants";

/**
 * Types of ALert
 * 1. simple alert --> click ok button
 * 2. Confirmation alert --> allows to choose OK/Cancel 
 * 3. Prompt Alert --> Allows to Enter text in text box Accept/Reject
 * 4. Before Unload Alert ---> Unsaved page changes  [Leave/Stay]
 *      Eg : Changes you made may not be saved 
 * 
 * Methods :
 * 1. accept()
 * 2. dismiss()
 * 3. message()
 * 4. type() --> what type of dialogue is 
 * 5. defaultvalue() // not much used  
 * 
 * Handeling :
 * Need to creat an even listener
 * page.on -> will accept alert from the Page 
 * 
 */

test("Handel Alert", async({page}) =>{

    await page.goto("https://leafground.com/alert.xhtml");
    
    // 'on' will accept the alter in webpage in page level
    page.on('dialog',async dialog=>{
        const msg=dialog.message();
        console.log(`Message : ${msg}`);

        // Type of Dialoge
        console.log(dialog.type());
        await dialog.accept();
    });

    // Click show button for simple alert
    page.locator('text=Show').first().click();

    page.locator('.card').filter({hasText:"ALert "})
});

test.only("Handel Alert - Simple Alert", async({page}) =>{

    await page.goto("https://leafground.com/alert.xhtml");
    
    //'Page.on' Accepts all the alerts from the WebPage, its like an callBack function
    // We can use Page.once 
    page.on('dialog', async dialog=>{
        const dialogType= dialog.type();
        console.log('TYPE :: '+dialogType);

        // if(dialog.type()==='alert'){
        //     // Capture Text from dialog
        //     console.log('MESSAGE :: '+dialog.message());
        //     expect(dialog.message()).toBe("I am simple alert.")

        //     // Click ok btn
        //     await dialog.accept();
        // } else 

        
        if(dialog.type()==='confirm'){
            // Capture Text from dialog
            console.log('MESSAGE :: '+dialog.message());
            expect(dialog.message()).toBe("Did you call me?")

            // Click ok btn
            await dialog.dismiss();
        } else if(dialog.type()==='prompt'){
            // Capture Text from dialog
            console.log('MESSAGE :: '+dialog.message());
            expect(dialog.message()).toBe("Type your name and click OK")

            // Click ok btn
            await dialog.accept('Hello');
        }
        
    }); // end of ON


    page.once('dialog', async dialog=>{
        await dialog.accept();
    });
    // Click show button for simple alert
    await page.locator('text=Show').first().click();
    console.log(await page.locator('#simple_result').innerText({timeout:2000}));

    // Click on Confirm Dialog
    const cardLocator=page.locator('.card').filter({hasText:"Alert (Confirm Dialog)"});
   await cardLocator.locator('button').filter({hasText:'Show'}).click();
   console.log(await page.locator('#result').innerText({timeout:2000}));

   // Prompt Dialog
    const cardLocator1 = page.locator(".card").filter({hasText:"Alert (Prompt Dialog)"});
    const alertButton1 = cardLocator1.locator("button").filter({hasText:"Show"});
    await alertButton1.click();
    console.log(await page.locator('#confirm_result').innerText({timeout:2000}));
    expect(await page.locator('#confirm_result').innerText({timeout:2000})).toContain('Hello')

    // Minimiz and Maxmise
    await page.locator('text=Show').last().click();
});
