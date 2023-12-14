import { test, expect } from "@playwright/test";

test("Launch Leaf Tap and Creat Lead", async({page}) =>{

    await page.goto("https://leafground.com/waits.xhtml");
    // const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    // const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    // const buttonHidden = cardToSelect.getByRole("button").filter({hasText:"I am here"});
    // await buttonToClick.click();
    // await expect(buttonHidden).toBeVisible();

    //
    const cardToSelect2 = page.locator(".card").filter({hasText:"Wait for Invisibility"});
    const buttonToClick2 = cardToSelect2.getByRole("button").filter({hasText:"Click"});
    const buttonHidden2= cardToSelect2.getByRole("button").filter({hasText:"I am here"});
    await buttonToClick2.click();
    await expect(buttonHidden2).toBeHidden();
    await page.waitForTimeout(5000);
    
    //
    const cardToSelect3 = page.locator(".card").filter({hasText:"Wait for Text Change"});
    const buttonToClick3 = cardToSelect3.getByRole("button").filter({hasText:"Click"});
    const buttonHidden3= cardToSelect3.getByRole("button").filter({hasText:"I am here"});
    await buttonToClick3.click();
    await expect(buttonHidden3).toHaveText('Did you notice?')
    await page.waitForTimeout(5000);    

   
    
});



