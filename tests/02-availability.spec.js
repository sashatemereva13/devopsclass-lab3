const { test, expect } = require('@playwright/test');

// MISSION 2 — Add a Playwright test that first FAILS because of BUG-101.
// Behavior required: enabling "Available bikes only" hides Riverside Park (0 bikes)
// and shows exactly three station cards. Fix public/app.js only AFTER the test fails.

test.skip('BUG-101: available-only filter excludes zero-bike stations', async ({ page }) => {
  // TODO: replace test.skip with test and implement reliable locators and assertions.
});
