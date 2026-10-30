const { test, expect } = require('@playwright/test');

// MISSION 3 — Add two realistic tests:
// (a) invalid email gives visible error without a POST to /api/reservations
// (b) a successful reservation; intercept/mock POST /api/reservations and assert
//     the JSON request payload and success message.

test.skip('invalid email blocks reservation', async ({ page }) => {
  // TODO
});

test.skip('reservation sends correct payload and confirms booking', async ({ page }) => {
  // TODO
});
