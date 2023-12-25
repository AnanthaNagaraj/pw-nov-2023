import {test  } from "@playwright/test";
import data  from "./../../testdata/logindata.json";

test('using data from JSON file ',async ({page}) => {
    console.log(data.username);
    console.log(data.password);
    
    // await page.goto("https://testleaf-8c-dev-ed.develop.my.salesforce.com");
    // await page.waitForLoadState();

    // await page.locator("#username").fill("ananthan@testleaf.com");
    // await page.locator("#password").fill("Anantha@123");
    // await page.locator("#Login").click();

   
    
  
});

