import { Page, Locator, expect } from "@playwright/test";



export class completePage {

    page: Page
    readonly orderConfirmation: Locator

    constructor(page: Page) {
        this.page = page
        this.orderConfirmation = page.locator('[data-test="complete-header"]')

    }


    async verifyOrderConfirmaton(): Promise<void> {
       
        const flag = await this.orderConfirmation.isVisible()
        if(flag){
            console.log("Order Confirmed..")
        }
        else{
            console.log("Order is not Confirmed..")
        }
    }

}
