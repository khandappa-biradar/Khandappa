import { Page, Locator, expect } from "@playwright/test";

export class overviewPage {

    page: Page
    paymentInfoValue: Locator
    finishBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.paymentInfoValue = page.locator('[data-test="payment-info-value"]').first();
        this.finishBtn = page.locator('[data-test="finish"]')

    }

    async getSauceCardNumber(): Promise<void> {

        const SauceCardvalue = await this.paymentInfoValue.textContent()
        console.log(SauceCardvalue)   // complted the TC assigned

    }

    async clickFinishButton(): Promise<void> {

        await this.finishBtn.click()

    }

}
