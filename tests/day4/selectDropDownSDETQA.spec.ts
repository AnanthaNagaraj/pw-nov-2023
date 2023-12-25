import { chromium, expect, firefox, test } from "@playwright/test";

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

test("Launch Leaf Tap and Creat Lead", async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    

    await page.selectOption('#country',{label:'India'}); // Using Lable 
   // await page.waitForTimeout(2000);

    await page.selectOption('#country','Canada');// Visible text
   // await page.waitForTimeout(3000);
   console.log("--->>:: "+await page.locator('#country').nth(1).textContent());

    await page.selectOption('#country',{value:'uk'}); // Value text
   // await page.waitForTimeout(3000);

    await page.selectOption('#country',{index:0}); // Value text
   // await page.waitForTimeout(3000);

    // Assertion
    //1. Check the number of options  in dropdown
    const options= page.locator('#country option')
    console.log('-->>'+await options.count());
    
    await expect(options).toHaveCount(10);


    //2. Check number of option in dropdown using array 
    const options2= await page.$$('#country option'); // using $$ it will store in array format
    console.log((options2).length);
    expect((options2).length).toBe(10);

    //3. Chceck presence of value in dropdown
    const content=await page.locator('#country').textContent();
    expect(content?.includes('India')).toBeTruthy(); //includes Indaia if it is ture then pass

    //4. Using For loop enhance for loop
    // capture the value in the from of array 
    console.log('-------- Using For loop enhance for loop ----------');
    
    const options3= await page.$$('#country option'); // options3 is webLocator
    console.log('Type :: '+typeof options3);

    let status = false;
    // for loop
    for(const opt of options3){
        //console.log(await opt.textContent());
        let value=await opt.textContent();
        if(value?.includes('France'))
        {
            status = true;
            console.log('Seached Value :: ' +value.toString());
            
            break;
        }
        
    }

    expect(status).toBeTruthy();
});
