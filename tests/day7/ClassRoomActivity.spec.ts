import {test } from "@playwright/test";
test("Frame Handeling using frame Locator", async({page}) =>{

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    
    const iframeResult=page.frame('iframeResult');

    page.on('dialog',async dialog=>{
     await page.waitForTimeout(2000);
     await dialog.accept();
    });
    
});
