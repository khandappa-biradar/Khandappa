// Assignment
// Playwright Assignment_SauceDemo
// Open " https://www.saucedemo.com"
// Login
// Click Add to Cart button for any product
// Click Add to Cart Icon in right top
// Verify product is added in cart
// Click CheckOut
// Enter Info and click Continue
// Verify payment information section and capture SauceCard number


import { test } from '@playwright/test';
import { loginPage } from "../AppManager/pages/loginPage";
import { productsPage } from '../AppManager/pages/productsPage';
import { cartPage } from '../AppManager/pages/cartPage';
import { yourInformationPage } from '../AppManager/pages/yourInformationPage';
import { overviewPage } from '../AppManager/pages/overviewPage';
import { completePage } from '../AppManager/pages/completePage';

test('TC01', async ({ page }) => {

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
    await cart.clickCheckoutButton()
    await page.pause();
    //Your information Page
    const yourInformation = new yourInformationPage(page)
    await yourInformation.enterFirstName("john");
    await yourInformation.enterLasttName("Doe");
    await yourInformation.enterPostalCode("560066");
    await yourInformation.clickContinueButton()

    //OverView Page
    const overview = new overviewPage(page)
    await overview.getSauceCardNumber()     

    //extra step to continue to finsh 
    await overview.clickFinishButton()

    //Complete Page
    const complete = new completePage(page)
    page.pause ();
    await complete.verifyOrderConfirmaton()
});
