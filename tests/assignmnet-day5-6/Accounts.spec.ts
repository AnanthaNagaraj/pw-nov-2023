import { chromium, test, expect } from "@playwright/test";

/**
 * Test Steps:
    1. Login to https://login.salesforce.com
    2. Click on toggle menu button from the left corner
    3. Click view All and click Sales from App Launcher
    4. Click on Accounts tab 
    5. Click on New button
    6. Enter 'your name' as account name
    7. Select Ownership as Public              
    8. Click save and verify Account name 
 * 
 */
test.only("Create Lead saleforce", async({page}) =>{

   //1. Login to https://login.salesforce.com
    await page.goto("https://testleaf-8c-dev-ed.develop.my.salesforce.com");
    await page.waitForLoadState();

    await page.locator("#username").fill("ananthan@testleaf.com");
    await page.locator("#password").fill("Anantha@123");
    await page.locator("#Login").click();
    await page.waitForLoadState('load');
    
    
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

    //4. Click on Accounts tab 
    await page.click('[title="Accounts"]');
    await page.waitForLoadState('networkidle');
    

    //5. Click on New button
    await page.click('[title="New"]');
    await page.locator('span[class=test-id__field-label]').isVisible({timeout:5000});
    //await page.waitForLoadState('domcontentloaded');
   // 6. Enter 'your name' as account nam
    await page.fill('[name=\'Name\']','Ananatha');
    
   // 7. Select Ownership as Public
    console.log(await page.innerText('[aria-label^="Ownership"]'))              
    const ownerDropDown=await page.locator('[aria-label="Ownership, --None--"]');
    await page.locator('[aria-label="Ownership, --None--"]').click();
    await page.getByTitle('Public').click();
    const selectedValue = await page.innerText('[aria-label^="Ownership"]');
    expect(selectedValue,"Selected Public").toEqual('Public');
    
   // 8. Click save and verify Account name 
   await page.click('[name="SaveEdit"]');
   const msg = await page.locator('[class="toastMessage slds-text-heading--small forceActionsText"]').innerText();
   console.log(`Message :: ${msg}`);
   expect(msg).toContain('Account "Ananatha"');
    
});

