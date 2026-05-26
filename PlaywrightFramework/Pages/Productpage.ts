import { Page, expect } from "@playwright/test";
import { Productpagelocators } from "../Locators/Productpagelocators";
import { data } from "../../test_Data/testdata";

export class Productpage {

    constructor(public page: Page) {

    }
    async validateAbout() {


        await this.page.click(Productpagelocators.settingicon);
        await this.page.click(Productpagelocators.aboutbutton);

    }
    async Logout() {


        await this.page.click(Productpagelocators.settingicon);
        await this.page.click(Productpagelocators.logoutbutton);

    }
    async AddallproductTocart() {
        const buttons = this.page.locator(Productpagelocators.addcart);
        const counts = await buttons.count();
        for (let i = 0; i < counts; i++) {
            await buttons.nth(i).click();
        }


    }
    async addfirstproduct() {
        await this.page.locator(Productpagelocators.addcart).first().click();
    }
    async addspecificproduct(specificname: string[]) {
        const adddproducts = this.page.locator(Productpagelocators.productNames);
        const count = await adddproducts.count();
        for (let i = 0; i < count; i++) {
            const name = await adddproducts.nth(i).textContent();
            if (name && specificname.includes(name.trim())) {
                await this.page.locator(Productpagelocators.addcart).nth(i).click();
                await this.page.waitForTimeout(1000);
            }
        }


    }

    async addallproductstocart() {
        const count = await this.page.locator(Productpagelocators.addcart).count();

        for (let i = 0; i < count; i++) {
            await this.page.locator(Productpagelocators.addcart).nth(i).click();

        }

    }
}