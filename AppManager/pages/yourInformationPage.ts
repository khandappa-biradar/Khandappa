import { Page, Locator, expect } from "@playwright/test";

export class yourInformationPage {


    readonly page: Page;
    readonly title: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueBtn = page.locator('[data-test="continue"]');
    }

    async enterFirstName(fisrtName: string): Promise<void> {

        await this.firstName.fill(fisrtName)
    }

     async enterLasttName(lastName: string): Promise<void> {

        await this.lastName.fill(lastName)
    }

     async enterPostalCode(postalCode: string): Promise<void> {

        await this.postalCode.fill(postalCode)
    }

    async clickContinueButton():Promise<void>{
        await this.continueBtn.click();
    }
}
