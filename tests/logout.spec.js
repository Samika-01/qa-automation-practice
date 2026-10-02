const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Verify user can logout successfully', async({page}) =>{
    const loginPage = new LoginPage(page);
    await page.goto('https://practice.expandtesting.com/login');
    await loginPage.login('practice', 'SuperSecretPassword!');
    // await expect(page.getByText('Hi, practice!')).toBeVisible(); -- the text is written as heading in page so we prefer the below:
    await expect(page.getByRole('heading', {name:'Hi, practice!'})).toBeVisible();
    await loginPage.logout();
    await expect(page.getByText('You logged out of the secure area!')).toBeVisible();
    await expect(page).toHaveURL('https://practice.expandtesting.com/login');

})