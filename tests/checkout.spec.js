const { test, expect } = require('@playwright/test');

test('Standard user can reach the checkout overview', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page).toHaveURL(url => url.pathname === '/inventory.html');

  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await page.getByTestId('shopping-cart-link').click();
  await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Checkout', exact: true }).click();
  await expect(page).toHaveURL(url => url.pathname === '/checkout-step-one.html');

  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByPlaceholder('Zip/Postal Code').fill('12345');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(page).toHaveURL(url => url.pathname === '/checkout-step-two.html');

  await page.getByRole('button', { name: 'Finish', exact: true }).click();
  await expect(page).toHaveURL(url => url.pathname === '/checkout-complete.html');
  await expect(page.getByText('Thank you for your order!', { exact: true })).toBeVisible();
});