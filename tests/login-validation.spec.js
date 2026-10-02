
const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');


test.describe('Login Validation Tests', () =>{
    // TOC-001 Invalid password
    test('Verify Login unsuccessfull', async  ({page})=> {
        const loginPage = new LoginPage(page);
        await page.goto('https://practice.expandtesting.com/login');
        await loginPage.login('practice', 'supersecret');
        //await page.pause();
        await expect(page.getByText('Your password is invalid')).toBeVisible();
        
    })
// TOC-002 empty fields
    test('Verify Login with empty fields', async({page}) => {
        const loginPage = new LoginPage(page);
        await page.goto('https://practice.expandtesting.com/login');
        await loginPage.login('', '');
        //await page.pause();
        await expect(page.getByText('Your username is invalid')).toBeVisible();
    })

    //TOC-003 invalid username
    test('Verify Login with invalid username', async({page}) =>{
        const loginPage = new LoginPage(page);
        await page.goto('https://practice.expandtesting.com/login')
        await loginPage.login('practic', 'SuperSecretPassword!');
        await expect(page.getByText('Your password is invalid!')).toBeVisible();
    })

});