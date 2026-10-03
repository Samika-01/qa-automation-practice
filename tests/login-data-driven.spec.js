const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const loginValidationData = require('../test-data/loginValidationData');

test.describe('Data Driven Login Tests', () =>{

    for(const data of loginValidationData){

        test(`Verify login with ${data.username} and ${data.password}`, async({page}) => {

            const loginPage = new LoginPage(page);

            await page.goto('https://practice.expandtesting.com/login');

            await loginPage.login(
                data.username,
                data.password
            );

            await expect(page.getByText(data.expectedMesage)).toBeVisible();
        });
    }
});