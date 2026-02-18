import { Page, Locator, expect } from "@playwright/test";


export class loginPage {

    page: Page
    readonly userName: Locator
    readonly password: Locator
    readonly loginBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.userName = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');

    }

    // function to launch the saucedemo app
    
    async launchUrl(): Promise<void> {
        await this.page.goto("https://www.saucedemo.com/")
    }

    // function to login the saucedemo app

    async loginDetails(username: string, password: string): Promise<void> {

        await this.userName.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()

    }


}
