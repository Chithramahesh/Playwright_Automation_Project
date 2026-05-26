import { test, Page, expect } from "@playwright/test";
import { Loginlocators } from "../PlaywrightFramework/Locators/Loginlocators";
import { BASE_URL, USERNAME, PASSWORD } from "../PlaywrightFramework/utils/envconfig";
import { Loginpage } from "../PlaywrightFramework/Pages/loginpage";

test("Validate Loginpage", async ({ page }) => {
    const loginPage = new Loginpage(page);


    console.log("Name", USERNAME);
   await loginPage.validateLogin(USERNAME, PASSWORD);
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
   await page.waitForTimeout(1000);


})