import { Page, Locator, expect } from "@playwright/test";



export class cartPage {

    page: Page
    readonly checkoutBtn: Locator
    readonly removeButton: Locator

    constructor(page: Page) {
        this.page = page
        this.checkoutBtn = page.locator('[data-test="checkout"]');
        this.removeButton = page.getByText("Remove");



    }

    async clickCheckoutButton(): Promise<void> {

        await this.checkoutBtn.click()
    }
    //02 TC
    async clickRemoveButton(): Promise<void> {

        await this.removeButton.click()
    }





}
