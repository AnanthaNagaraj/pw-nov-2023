import { chromium, test, expect } from "@playwright/test";

/**
    Assignment: 1 Create Lead
        1. Login to https://login.salesforce.com
        2. Click on toggle menu button from the left corner
        3. Click view All and click Sales from App Launcher
        4. Click on Leads tab 
        5. Click on New button
        6. Select Salutation dropdown
        7. Enter the Last Name
        8. Enter the CompanyName 
        9. Click Save and Verify Leads name created
 */
test.only("Create Lead saleforce", async() =>{

    // To Launch the browser   --> creats a new browser instance
    const browserInstance = await chromium.launch({headless:false, channel:'chrome'});  // chrome and Edge has two channel
    // Get a new context
    const browserContext =await browserInstance.newContext();
    // Get new Page
    const page = await browserContext.newPage();

    //1. Login to https://login.salesforce.com
    await page.goto("https://testleaf-8c-dev-ed.develop.my.salesforce.com");
    await page.waitForLoadState();

    await page.locator("#username").fill("ananthan@testleaf.com");
    await page.locator("#password").fill("Anantha@123");
    await page.locator("#Login").click();
    await page.waitForLoadState('networkidle');
    
    
    //2. Click on the toggle menu button from the left corner
    await page.click('[class="slds-icon-waffle"]');
    await page.waitForLoadState('networkidle');

   //3. Click view All and click Sales from App Launcher
    await page.click('//button[text()=\'View All\']');
    await page.waitForLoadState('networkidle');
    await page.click('//p[normalize-space()=\'Sales\']');
    await page.waitForLoadState('domcontentloaded');
    console.log(`URL :: ${await page.url()}`);
    // await expect(page,'Did not match').toHaveTitle('Lightning Experience');

    //4. Click on Leads tab 
    await page.click('[title="Leads"]');
    await page.waitForLoadState('networkidle');
    

    //5. Click on New button
    await page.click('//*[text()=\'Leads\']/../../one-app-nav-bar-item-dropdown/div');
    await page.waitForLoadState('domcontentloaded');
    await page.locator('[//span[text()=\'New Lead\']]]').click();
    await page.waitForLoadState('domcontentloaded');
    const val=await page.innerText('//span[normalize-space()=\'Lead Information\']');
    console.log("LEAD TXT :: " +val);
    


    //6. Select Salutation dropdown
    //7. Enter the Last Name
    //8. Enter the CompanyName 
    //9. Click Save and Verify Leads name created
});

