import { chromium, firefox, test } from "@playwright/test";

/**
 * By default  it will launch chrome
 */
test("Launch browser", async() =>{

    // To Launch the browser   --> creats a new browser instance
    const browserInstance = await chromium.launch({headless:false, channel:'chrome'});  // chrome and Edge has two channel
    
    // Get a new context
    const browserContext =await browserInstance.newContext();

    // Get new Page
    const page = await browserContext.newPage();

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(5000);

});

test("Launch browser firefox", async() =>{

    // To Launch the browser   --> creats a new browser instance
    const browserInstance = await firefox.launch({headless:false});
    
    // Get a new context
    const browserContext =await browserInstance.newContext();

    // Get new Page
    const page = await browserContext.newPage();

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(5000);

});

// Example for Browser context


// Saleforce Launch 
test("Launch browser saleforce", async() =>{

    // To Launch the browser   --> creats a new browser instance
    const browserInstance = await chromium.launch({headless:false, channel:'chrome'});  // chrome and Edge has two channel
    
    // Get a new context
    const browserContext =await browserInstance.newContext();

    // Get new Page
    const page = await browserContext.newPage();

    await page.goto("https://testleaf-8c-dev-ed.develop.my.salesforce.com");
    await page.waitForTimeout(5000);

    await page.locator("#username").fill("")

    console.log(await page.title());

});
/**
 * Multiple browser Contest and multiple page
 */
test.only("Multiple Browser context example", async() =>{

    // To Launch the browser   --> creats a new browser instance
    const browserInstance = await chromium.launch({headless:false, channel:'chrome'});  // chrome and Edge has two channel
    
    // Get a new context
    const browserContext =await browserInstance.newContext();
    const browserContext1 =await browserInstance.newContext();

    // Get new Page
    const page = await browserContext.newPage();
    const page1 = await browserContext1.newPage();

    await page.goto("https://testleaf-8c-dev-ed.develop.my.salesforce.com");
    await page1.goto("https://playwright.dev/docs/api/class-browsertype");
    await page.waitForTimeout(5000);

    console.log(await page1.title());
    

    await page.locator("#username").fill("")

    console.log(await page.title());

});