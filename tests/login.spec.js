const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');


test.describe('Login Tests', ()=>{

    test('User can login successfully', async ({page}) => {
        const loginPage = new LoginPage(page);
        await page.goto('https://practice.expandtesting.com/login');
        
        await loginPage.login('practice', 'SuperSecretPassword!');
        //await page.pause();
        await expect(page.getByText('Welcome')).toBeVisible();
    });
        
})