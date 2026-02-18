import { Page, Locator, expect } from "@playwright/test";

export class productsPage {

    page: Page
    productName: Locator;
    cartIcon: Locator

    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.cartIcon = page.locator('#shopping_cart_container');
    }

    async addProduct(): Promise<void> {
        await this.productName.click()

    }

    async verifyProductsAddedToCart(noOfProducts: string): Promise<void> {
        const valueFromCart = await this.page.locator('[data-test="shopping-cart-link"]').textContent()
        expect(valueFromCart, `Verified No Of Products = ${valueFromCart}`).toBe(noOfProducts)
        console.log(`Verified No Of Products = ${valueFromCart}`)

    }

    async clickCartButton(): Promise<void> {

        await this.cartIcon.click();

    }

}
