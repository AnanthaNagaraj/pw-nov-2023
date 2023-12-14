import { chromium, firefox, test } from "@playwright/test";

/**
 * 1. Launch the browser
2. Load the URL " ";
3. Enter the username using getByLabel
4. Enter the password using attribute
5. Click the login button using class name
6. Get the text of CRM/SFA and click the CRM/SFA using getByText
7.Print the page title and the url
8. Click Leads
9. Click Create Lead using text 
10. Fill all the mandatory fields
11. Click Submit button using class name
12. Print the status of the lead
 */

test("Launch Leaf Tap and Creat Lead", async() =>{

    const browserInstance = await chromium.launch({headless:false, channel:'chrome'});  // chrome and Edge has two channel
    const browserContext =await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel('Username').fill("Demosalesmanager");
    await page.locator("//input[@type='password']").fill("crmsfa");
    await page.locator("//input[@type='submit']").click();
    await page.waitForLoadState();
    console.log("URL : "+page.url());
    console.log("TITLE : "+await page.title());
    console.log("TEXT : "+await page.locator("//a[contains (text(), '/SFA')]").innerText());
    await page.getByText('CRM/SFA').click()
    await page.waitForLoadState();
    await page.locator("//a[contains (text(), 'Leads')]").click();
    await page.click("text=Create Lead"); // CSS 
    await page.fill("#createLeadForm_companyName","TestLeaf")
    await page.locator("#createLeadForm_firstName").fill("Anantha");
    await page.locator("#createLeadForm_lastName").fill("N");
    await page.locator("input[type=submit]").click();
    await page.waitForLoadState();
    const status=await page.locator("#viewLead_statusId_sp").innerText();
    console.log("STATUS"+status);
    
});
