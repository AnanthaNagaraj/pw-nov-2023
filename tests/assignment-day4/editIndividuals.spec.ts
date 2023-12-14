import { chromium, test, expect } from "@playwright/test";

/**
    Assignment: 4 Edit Individuals
    Test Steps:
        1. Login to https://login.salesforce.com
        2. Click on the toggle menu button from the left corner
        3. Click View All and click Individuals from App Launcher 
        4. Click on the Individuals tab 
        5. Search the Individuals last name
        6. Click on the Dropdown icon and Select Edit
        7. Select Salutation as 'Mr'
        8. Now enter the first name
        9. Click on Save and Verify the first name 
*/

test.only("Edit Individuals saleforce", async() =>{

    // To Launch the browser   --> creats a new browser instance
    const browserInstance = await chromium.launch({headless:false, channel:'chrome'});  // chrome and Edge has two channel
    // Get a new context
    const browserContext =await browserInstance.newContext();
    // Get new Page
    const page = await browserContext.newPage();

    //1. Login to https://login.salesforce.com
    await page.goto("https://testleaf-8c-dev-ed.develop.my.salesforce.com");

    await page.locator("#username").fill("ananthan@testleaf.com");
    await page.locator("#password").fill("Anantha@123");

    await page.locator("#Login").click();
    await page.waitForLoadState('networkidle');
    
    console.log(`Title :: ${await page.title()}`);
    console.log(`URL :: ${await page.url()}`);
    await expect(page).toHaveURL(/SetupOneHome/);

    //2. Click on the toggle menu button from the left corner
    await page.click('[class="slds-icon-waffle"]');
    await page.waitForLoadState('networkidle');

    // 3. Click View All and click Individuals from App Launcher
    await page.click('//button[text()=\'View All\']');
    await page.waitForLoadState('networkidle');
    await page.click('//p[text()=\'Individuals\']');
    console.log(`Individual Title :: ${await page.title()}`);
    await expect(page,'Did not match').toHaveTitle('Lightning Experience');

    //4. Click on the Individuals tab 
    //await page.locator('//div[@class="slds-grid slds-has-flexi-truncate navUL"]/one-app-nav-bar-item-root/a[@href=\'/lightning/o/Individual/home\']').click();
    await page.waitForLoadState('networkidle');
    
    //5. Search the Individuals last name
    await page.fill('[placeholder="Search this list..."]','Demo');
    await page.keyboard.press('Enter');
   
    //6. Click on the Dropdown icon and Select Edit
    await page.waitForTimeout(15000);
    //await page.click('//span[@class=\'slds-icon_container slds-icon-utility-down\']//span[1]');
    await page.click('//td[@class="slds-cell-edit cellContainer"]/span/div');
    await page.waitForTimeout(5000);
    await page.click('//div[@title=\'Edit\']');

  
    
});

