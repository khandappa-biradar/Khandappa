import { test } from '@playwright/test';
import { loginPage } from "../AppManager/pages/loginPage";
import { productsPage } from '../AppManager/pages/productsPage';
import { cartPage } from '../AppManager/pages/cartPage';

test('TC02', async ({ page }) => {

    //Login Page
    const login = new loginPage(page)
    await login.launchUrl()
    await login.loginDetails("standard_user", "secret_sauce")

    //Products Page
    const products = new productsPage(page)
    await products.addProduct()
    await products.verifyProductsAddedToCart("1")
    await products.clickCartButton()

    //Cart Page
    const cart = new cartPage(page)
    await cart.clickRemoveButton()

});
