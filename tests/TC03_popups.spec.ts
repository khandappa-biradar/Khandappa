import { test,chromium,expect } from "@playwright/test";
import * as path from 'path';

//=====Handling Alert, Confirms and Prompt=====////

test('Simple Alert--accept',async({page})=>{
await page.goto('https://www.qaplayground.com/practice/alert'); //Alerts page

//Register dialog listner before clicking the trigger
page.once('dialog',async (dialog)=>{
    expect(dialog.type()).toBe('alert')  //native alert   
    //optionally assert the message text if you know it:
    //expect('dialog.message()).toContain('This is a simple alert');
    await dialog.accept();
});

//click the button that triggers the  simple alert
await page.getByRole('button',{name:'Simple Alert'}).click();

});

test('confirm Alert --accept(OK)',async({page})=>{

    await page.goto('https://www.qaplayground.com/practice/alert');

    page.once('dialog',async(dialog)=>{
        expect(dialog.type()).toBe('confirm');  //native confirm
//expect(dialog.message()).toContain('Are you sure'); //optional
        await dialog.dismiss();

});
page.pause ();
await page.getByRole('button',{name:'Confirm alert'}).click();
// await page.locator('[id="prompt-alert"]').click();

});