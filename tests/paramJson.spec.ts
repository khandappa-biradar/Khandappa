import { test, expect } from '@playwright/test';
// import { TIMEOUT } from 'node:dns';
// import { setTimeout } from 'node:timers/promises';
//done finally changes//
import fs from 'fs';
const testdata = 'AppManager/environments/data.json';
const searchItems:any = JSON.parse(fs.readFileSync(testdata, 'utf-8'));

//const searchItem:string[]=['laptop','Gift card','smartphone','monitor'];
test.describe('Search test for', async() => {
    for (const {item} of searchItems) {

        test(`validate search all 4 items ${item}`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/');
            // await page.pause();
            // await page.locator('[class="search-box-text ui-autocomplete-input"]').fill(item);
            await page.locator('#small-searchterms').fill(item);
            // await page.pause();
            await page.locator('input[type="submit"]').click();
            await page.waitForTimeout(500);
            // await page.pause();
            await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });

            //expect.soft(page.getByRole('link', { name:'14.1-inch Laptop'}).nth(1)).toContainText("14.1-inch Laptop");
        });
    };
});

