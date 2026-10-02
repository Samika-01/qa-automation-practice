const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Tests', () =>{

        let loginPage; //declaring LoginPage variable outside beforeEach hook so that it can be used in all test cases. If we declare it inside beforeEach, it will be local to that block and cannot be accessed in other test cases.

    //adding beforeEach hook to avoid code duplication in each test case
    test.beforeEach(async ({page}) =>{
        await page.goto('https://practice.expandtesting.com/login');
        loginPage = new LoginPage(page);
    });

    // TOC-001 Valid login
    test('User can login successfully', async ({page}) => {
        // const loginPage = new LoginPage(page);
        // await page.goto('https://practice.expandtesting.com/login');
        
        await loginPage.login('practice', 'SuperSecretPassword!');
        //await page.pause();
        await expect(page.getByRole('heading', {name:'Hi, practice!'})).toBeVisible();
    });

    // TOC-002 Invalid password
    test('Verify Login unsuccessfull', async  ({page})=> {
        //const loginPage = new LoginPage(page);
        // await page.goto('https://practice.expandtesting.com/login');
        await loginPage.login('practice', 'supersecret');
        //await page.pause();
        await expect(page.getByText('Your password is invalid')).toBeVisible();
        
    });

    // TOC-003 empty fields
    test('Verify Login with empty fields', async({page}) => {
        //const loginPage = new LoginPage(page);
        // await page.goto('https://practice.expandtesting.com/login');
        await loginPage.login('', '');
        //await page.pause();
        await expect(page.getByText('Your username is invalid')).toBeVisible();
    });

});