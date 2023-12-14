import { chromium, test } from "@playwright/test";

/**
      1) Open Salesforce Login Page https://login.salesforce.com
      2) Enter the username
      3) Enter the password
      4) Click Login
      5) Print the title and url
 */
test.only("Launch browser saleforce", async() =>{

    // To Launch the browser   --> creats a new browser instance
    const browserInstance = await chromium.launch({headless:false, channel:'chrome'});  // chrome and Edge has two channel
    
    // Get a new context
    const browserContext =await browserInstance.newContext();

    // Get new Page
    const page = await browserContext.newPage();

    await page.goto("https://testleaf-8c-dev-ed.develop.my.salesforce.com");

    await page.locator("#username").fill("ananthan@testleaf.com");

    await page.locator("#password").fill("Anantha@123");

    await page.locator("#Login").click();
    await page.waitForTimeout(5000);
    
    console.log(`Title :: ${await page.title()}`);

    console.log(`URL :: ${await page.url()}`);

});