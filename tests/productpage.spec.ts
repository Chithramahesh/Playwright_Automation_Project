import { test, Page, expect } from "@playwright/test";
import { Productpagelocators } from "../PlaywrightFramework/Locators/Productpagelocators";
import { Loginpage } from "../PlaywrightFramework/Pages/loginpage";
import { BASE_URL, USERNAME, PASSWORD } from "../PlaywrightFramework/utils/envconfig";
import { Productpage } from "../PlaywrightFramework/Pages/Productpage";
import { Loginlocators } from "../PlaywrightFramework/Locators/Loginlocators";
import { data } from "../test_Data/testdata";

test.describe("About Page and Logout Page Validation", () => {
    let login: Loginpage;
    let Product: Productpage;
    test.beforeEach("Before Each", async ({ page }) => {
        login = new Loginpage(page);
        Product = new Productpage(page);
        await page.goto(BASE_URL);
        await login.validateLogin(USERNAME, PASSWORD);
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    })


    test("Validate Logout", async ({ page }) => {

        await Product.Logout();
        await expect(page.locator(Loginlocators.loginButton)).toBeVisible();



    })
    test("About Page",async ({page})=>{
        await Product.validateAbout();
        //await expect(page.locator(Loginlocators.loginButton)).toBeVisible();
        await expect(page.locator(Productpagelocators.aboutpagetryBtn)).toBeVisible();
        
    })
    test("Add first Product",async ({page})=>{

      await   Product.addfirstproduct();
    })
    test("Add All Products",async ({page})=>{
        await Product.AddallproductTocart();

    })
    test("Add Specific Product",async ({page})=>{
        await Product.addspecificproduct(data);

    })
    test.only("Add All Products sample",async ({page})=>{
        await Product.addallproductstocart();
    })
    




})

