import { chromium, expect, firefox, test } from "@playwright/test";
 /**
  * Frames can he handeld by 
  * 1.frames and iframe
  * 2. iframe is inline frame  embed diffrent contents like vedios, maps
  * 
  * How to handel 
  * 1. use frame object
  * 2. usr frame locator --> when ever we have chaning then we go for this 
  */


test.only("Frame Handeling using frame object", async({page}) =>{

    await page.goto("https://leafground.com/frame.xhtml");
    
    // Identified the frame
    const frame=await page.frame({url:'https://leafground.com/default.xhtml'});
    console.log(`${frame}`);

    // wait for the element is seen
    await frame?.waitForSelector('button#Click');
    
    //  If frame is null or undefined, the expression will short-circuit, and the click method won't be called.
    await frame?.click('button#Click');

    // get count of frames
    const allFrames = page.frames();
    console.log('COUNT :: ' +allFrames.length);

    await allFrames[4].click('button#Click') // using index
    
    await page.waitForTimeout(5000);
    
});

test("Frame Handeling using frame Locator", async({page}) =>{

    await page.goto("https://leafground.com/frame.xhtml");
    
    // using frame locator
    const frameLocator=await page.frameLocator('iframe').first();
    // Clicking on first locator
    await frameLocator.locator('#Click').click();
    
    // Using frame locator for Nested frame example
    // Located text called 'Click Me (Inside Nested frame)'
    const cardLocator=page.locator('.card').filter({hasText:' Click Me (Inside frame)'})
    
    // Locating 1st frame using frameLocator
    const frameButton=cardLocator.frameLocator('iframe');
    // Locating 2nd frame keeping 1st frame as refrence and clicking Click Me button
    frameButton.frameLocator('iframe').locator('#Click')
    
});
