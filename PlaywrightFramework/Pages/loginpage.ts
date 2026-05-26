import { Loginlocators } from "../Locators/Loginlocators";
import { Page } from "@playwright/test";
import { BASE_URL, USERNAME, PASSWORD } from "../utils/envconfig";

export class Loginpage {
    constructor(private page: Page) {

    }
    async validateLogin(UserName: string, Password: string) {


       
        await this.page.goto(BASE_URL);
        await this.page.fill(Loginlocators.username, UserName);
        await this.page.fill(Loginlocators.password, Password);
        await this.page.click(Loginlocators.loginButton);

    }
}