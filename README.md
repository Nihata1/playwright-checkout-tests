# SauceDemo Checkout Tests

An end-to-end Playwright test for the SauceDemo checkout flow, written in JavaScript.

## What the test covers

- Signs in with the standard demo account.
- Adds the Sauce Labs Backpack and verifies it appears in the cart.
- Fills in the checkout form with sample data and reaches the order summary.
- Completes the order and verifies the confirmation message.

## Run locally

Install Node.js LTS, then run these commands from the repository root.

```bash
npm ci
npx playwright install chromium
npx playwright test tests/checkout.spec.js --project=chromium
```

On Windows PowerShell, use `npm.cmd` and `npx.cmd` if the PowerShell scripts are blocked.