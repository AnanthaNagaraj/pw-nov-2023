import { chromium, test, expect } from "@playwright/test";

/**
     Assignment: 3 Create Individuals
     Test Steps: 
        1. Login to https://login.salesforce.com
        2. Click on the toggle menu button from the left corner
        3. Click View All and click Individuals from App Launcher
        4. Click on the Dropdown icon in the Individuals tab
        5. Click on New Individual
        6. Enter the Last Name
        7. Click save and verify Individuals Name
 */
test.only("Create Individuals saleforce", async() =>{

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
    await page.waitForLoadState();
    
    console.log(`Title :: ${await page.title()}`);
    console.log(`URL :: ${await page.url()}`);
    await expect(page).toHaveURL(/SetupOneHome/);

    //2. Click on the toggle menu button from the left corner
    await page.click('[class="slds-icon-waffle"]');
    await page.waitForLoadState('load');

    // 3. Click View All and click Individuals from App Launcher
    await page.click('//button[text()=\'View All\']');
    await page.waitForLoadState('load');
    await page.click('//p[text()=\'Individuals\']');
    console.log(`Individual Title :: ${await page.title()}`);
    await expect(page,'Did not match').toHaveTitle('Lightning Experience');

    // 4. Click on the Dropdown icon in the Individuals tab
    await page.locator('//div[@class="slds-grid slds-has-flexi-truncate navUL"]/one-app-nav-bar-item-root[starts-with(@data-id, \'temp-\')]/one-app-nav-bar-item-dropdown').click();
    await page.waitForLoadState('load');
    
    
    // 5. Click on New Individual
    await page.locator('//*[text()=\'New Individual\']').click();
    await page.waitForLoadState('load');

    // 6. Enter the Last Name
    await page.fill('[placeholder=\"Last Name\"]',"Demo");

    
    // 7. Click save and verify Individuals Name
    await page.click('//button[@title="Save"]');
    await page.waitForLoadState('load');
    const individualName=await page.innerText('(//div[@class="listViewContent"]/div/div/table/tbody)[1]/tr/td[2]/a',{timeout:5000});
    console.log("INDICIDUAL NAME :: " +individualName);

});

