import{test,expect,Locator} from '@playwright/test';

test('TC01', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[id="user-name"]').fill('standard_user');
    await page.locator('[id="password"]').fill('secret_sauce');
    await page.pause();
    await page.locator('[id="login-button"]').click();
    await page.pause ();
    await expect(page.locator('[class="title"]')).toHaveText('Products');
    //await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[name="add-to-cart-sauce-labs-backpack"]').click();
    await page.pause ();
    await page.locator('[class="shopping_cart_link"]').click();
    await page.pause ();
    await expect(page.locator('[class="inventory_item_name"]')).toHaveText('Sauce Labs Backpack');
    
});