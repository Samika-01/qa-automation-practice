const {test, expect} = require('@playwright/test');


// //create a test to verify the heading of the example domain page:
// test('Verify Example Domain heading', async ({page})=> {
//   //opens the website https://example.com:
//   await page.goto('https://example.com');

//   //find the heading element and verify that it has the text "Example Domain":

//   await expect(page.locator('h1')).toHaveText('Example Domain');
  
// });

// test.describe('Example Domain Tests', () => {

//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://example.com');
//   });

//   test('Verify page title', async ({ page }) => {
//     await expect(page).toHaveTitle('Example Domain');
//   });

//   test('Verify heading', async ({ page }) => {
//     await expect(page.locator('h1')).toHaveText('Example Domain');
//   });
  
//   test('Verify heading is visible', async ({ page }) => {
//     await expect(page.locator('h1')).toBeVisible();
//   });
// });


// practical practice using the real site= Expand Testing's Test Login Page

// test('Verify successful login', async ({ page}) =>{

//   await page.goto('https://practice.expandtesting.com/login');

//   await page.getByLabel('Username').fill('practice');

//   await page.getByLabel('Password').fill('SuperSecretPassword!');

//   await page.getByRole('button', {name: 'Login'}).click();

//   await expect(page.getByText('Welcome')).toBeVisible();

// });

test('Verify unsuccessful login with incorrect password', async({page}) =>{

  await page.goto('https://practice.expandtesting.com/login');

  await page.getByLabel('Username').fill('practice');

  await page.getByLabel('Password').fill('WrongPassword');

  await page.getByRole('button', {name:'Login'}).click();

  await page.pause();

  await expect(page.getByText('Your Password is invalid!')).toBeVisible();

});