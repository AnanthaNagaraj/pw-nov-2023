import { chromium, test } from "@playwright/test";

/**
      1) Open http://leaftaps.com/opentaps/control/main
      2) Perform the following functions

    a) Login (Enter username, password, Click Login)
        Demosalesmanager / crmsfa
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, first name and last name (use id and pur your own data)
    f) Click Create Lead Button 
 */
test("Launch browser saleforce", async() =>{

    // To Launch the browser   --> creats a new browser instance
    const browserInstance = await chromium.launch({headless:false, channel:'chrome'});  // chrome and Edge has two channel
    
    // Get a new context
    const browserContext =await browserInstance.newContext();

    // Get new Page
    const page = await browserContext.newPage();

    // Launch URL
    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("Demosalesmanager");

    await page.locator("#password").fill("crmsfa");

    await page.locator("//input[@type='submit']").click();
    // wait for page to load
    await page.waitForLoadState();

    console.log(await page.locator("//a[contains (text(), '/SFA')]").innerText());
    await page.locator("//a[contains (text(), '/SFA')]").click();
    await page.waitForLoadState();
    
    // Click on Leads
    await page.locator("//a[contains (text(), 'Leads')]").click();


    // Click on Creat Lead
    //await page.locator("//div[@class='frameSectionBody']/ul/li[2]/a").click({timeout:2000});
    await page.click("text=Create Lead"); // CSS 

    // Company Name
    await page.fill("#createLeadForm_companyName","TestLeaf")
    // First Name
    await page.locator("#createLeadForm_firstNameLocal").fill("Anantha");
    // Last Name
    await page.locator("#createLeadForm_lastNameLocal").fill("N");
    // Click on Submit
    await page.locator("input[type=submit]").click();
});
