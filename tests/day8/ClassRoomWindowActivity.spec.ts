import {test, expect } from "@playwright/test";
import { log } from "console";
test("Frame Handeling using frame Locator", async({page,context}) =>{

    console.log('--->>'+__dirname);
    
    await page.goto("https://testleaf-8c-dev-ed.develop.my.salesforce.com");
    await page.waitForLoadState();

    await page.locator("#username").fill("ananthan@testleaf.com");
    await page.locator("#password").fill("Anantha@123");
    await page.locator("#Login").click();
    await page.waitForLoadState('load');
   
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText('Learn More',{exact:true}).click(),
       
    ])
    await page.waitForLoadState('load');
    await newPage.click('//*[text()=\'Confirm\']');
    console.log(newPage.url());
    await expect(newPage).toHaveURL(/mysalesforce/);
    await expect(newPage).toHaveTitle('Create and Publish Custom-Branded Mobile Apps - Salesforce.com');
    
});
