import { chromium, firefox, test } from "@playwright/test";

test("Launch Leaf Tap and Creat Lead", async({page}) =>{

  //  const browserInstance = await chromium.launch({headless:false, channel:'chrome'});  // chrome and Edge has two channel
  //  const browserContext =await browserInstance.newContext();
  //  const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel('Username').fill("Demosalesmanager");
    await page.locator("//input[@type='password']").fill("crmsfa");
    await page.locator("//input[@type='submit']").click();
    await page.waitForLoadState();
    console.log("URL : "+page.url());
    console.log("TITLE : "+await page.title());
    console.log("TEXT : "+await page.locator("//a[contains (text(), '/SFA')]").innerText());
    // await page.getByText('CRM/SFA').click()
    // await page.waitForLoadState();
    // await page.locator("//a[contains (text(), 'Leads')]").click();
    // await page.click("text=Create Lead"); // CSS 
    // await page.fill("#createLeadForm_companyName","TestLeaf")
    // await page.locator("#createLeadForm_firstName").fill("Anantha");
    // await page.locator("#createLeadForm_lastName").fill("N");
    // await page.locator("input[type=submit]").click();
    // await page.waitForLoadState();
    // const status=await page.locator("#viewLead_statusId_sp").innerText();
    // console.log("STATUS"+status);
    
});



