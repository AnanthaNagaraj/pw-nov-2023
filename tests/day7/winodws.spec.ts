import { chromium, expect, firefox, test } from "@playwright/test";
 /**
  * When ever we open new window or a tab new event gets fired, new page will be opend in current browser context, 
  * When browser is launched and window/page is launched in the browser contex. 
  * 
  * When a new winow is going to opend we have to inform by "event listenr" to handel before only.
  * there are two approaches
  * 
  */


 /*
 /***
 *  Approach 1
 * 
 * 1. Create a promise in your code to tell that this will resolve into a page
 *     const windowPromise =  context.waitForEvent("page")
 * 2. Now perform the user action which is supposed to open a new window
 *     await page.getByText('Open').click();
 * 3. Now wait for the promise to get completed (for the promise you created in step 1)
 *     const window =  await windowPromise // wait for the page to open
 * 4. Switch to the new window for performing further actions
 *      window.bringToFront();
 *  
 */
 
test.only("Window handeling", async({page, context}) =>{

    await page.goto("https://leafground.com/window.xhtml");
    
    // Creating a promise in your code to tell that this will resolve into a page
    const windowPromise=context.waitForEvent('page');

    // perform the user action which is supposed to open a new window
    page.getByText('Open',{exact:true}).click();

    // wait for the promise to get completed [wait for the page to open]
    const window=await windowPromise
    await expect(window).toHaveURL("https://leafground.com/dashboard.xhtml");
    console.log(window.url());
    await window.fill('#email','abc@gmail.com');   
    await window.close();
   
    // to main page
    await page.click('i[class=\'pi pi-home\']');
    console.log(page.url());






    
    
});

