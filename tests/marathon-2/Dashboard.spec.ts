import { test, expect } from "@playwright/test";

test('Creat DashBoard', async ({ page }) => {

	/**
	 * 1. Login to Salesforce
			- URL: https://login.salesforce.com
		- Expected Result: Successful login to the Salesforce homepage.
	 */

	await page.goto("https://testleaf-8c-dev-ed.develop.my.salesforce.com");
	await page.waitForLoadState();
	await page.locator("#username").fill("ananthan@testleaf.com");
	await page.locator("#password").fill("Anantha@123");
	await page.locator("#Login").click();
	await page.waitForLoadState('networkidle');
	console.log("Home page Title ::" + await page.title());
	expect(await page.title()).toBe("Home | Salesforce") // soft assertion
	console.log('--------- Step 1 completed ----------');


	/**
	 * 2. Access the Toggle Menu
			 - Action: Click on the toggle menu button ‘App Launcher’ in the top left corner.
			 - Expected Result: The main navigation menu expands, displaying various options.
	 */

	await page.click('[class="slds-icon-waffle"]');
	await page.waitForLoadState('networkidle');
	await expect(page.locator('//button[text()=\'View All\']')).toBeVisible();
	console.log('--------- Step 2 completed ----------');

	/**
	 * 3. Navigate to Dashboards
			- Action: Click "View All" and type "Dashboards" from the App Launcher.
			- Expected Result: The Dashboards link is displayed
	 */
	await page.click('//button[text()=\'View All\']');
	await page.waitForLoadState('networkidle');
	const appLauncherSearchBar = page.locator('input[placeholder="Search apps or items..."]');
	await expect(appLauncherSearchBar).toBeVisible();
	await appLauncherSearchBar.fill('Dashboards')
	await expect(page.locator('//*[text()=\'All Items\']/../../../..//*[text()=\'Dashboards\']')).toBeVisible();
	console.log('--------- Step 3 completed ----------');

	/**
	 * 4. Click on the ‘Dashboards link
			 - Expected Result: The Dashboards page is displayed, showing existing dashboards
	 */
	await page.click('//*[text()=\'All Items\']/../../../..//*[text()=\'Dashboards\']');
	console.log("Dashboard Title ::" + await page.title());
	expect(await page.title()).toBe("Lightning Experience") // assertion

	/**
	 * 5. Create New Dashboard
		- Action: Click on the "New Dashboard" option.
		- Expected Result: A new window or tab opens to create a new dashboard.
	 */
	await page.click('//*[text()=\'New Dashboard\']');
	await page.waitForLoadState('load');

	/**
	 * 6. Enter the Dashboard Name and Create
		- Action: Enter Name as 'Salesforce Automation by [Your Name]' and click on "Create."
		- Expected Result: A new dashboard is created with the specified name, and you are redirected to the dashboard
		editing page
	 */
	const dashboardFrame = page.frameLocator("[title='dashboard']");
	dashboardFrame.locator('#dashboardNameInput').fill('Salesforce Automation by Anantha N');
	// Create Button
	dashboardFrame.locator('#submitBtn').click();
	await page.waitForLoadState('load');

	/**
	 * 7. Save and Verify Dashboard Name
		- Action: Click on "Save."
		- Expected Result: The dashboard is successfully saved. The dashboard name 'Salesforce Automation by [Your
		Name]' is visible on the top or in the dashboard list, confirming that the dashboard has been named correctly.
		Ensure to replace '[Your Name]' with your actual name in the dashboard title.

	 */
	const dashboardTitle = await dashboardFrame.locator('//span[text()=\'Salesforce Automation by Anantha N\']').innerText();
	console.log("Edit Dashboard Title :: " + dashboardTitle);
	expect(dashboardTitle).toContain('Salesforce Automation by Anantha N')
	dashboardFrame.locator('//*[text()=\'Save\']').click();

	/**
	 * REST API
	 */



})
