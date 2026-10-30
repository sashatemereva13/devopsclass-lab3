const { test, expect } = require('@playwright/test');

// MISSION 3 — Add two realistic tests:
// (a) invalid email gives visible error without a POST to /api/reservations
// (b) a successful reservation; intercept/mock POST /api/reservations and assert
//     the JSON request payload and success message.

test('invalid email blocks reservation', async ({ page }) => {
  let reservationRequested = false;
  await page.route('**/api/reservations', async route => {
    reservationRequested = true;
    await route.continue();
  });

  await page.goto('/');
  await page.getByRole('button', { name: 'Reserve at Central Square' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('invalid-email');
  await page.getByRole('button', { name: 'Confirm reservation' }).click();

  await expect(page.getByRole('alert')).toContainText('Enter a valid email address.');
  expect(reservationRequested).toBe(false);
});

test('reservation sends correct payload and confirms booking', async ({ page }) => {
  let reservationPayload;
  await page.route('**/api/reservations', async route => {
    reservationPayload = route.request().postDataJSON();
    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({ reservationId: 'CB-CENTRAL' })
    });
  });

  await page.goto('/');
  await page.getByRole('button', { name: 'Reserve at Central Square' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('alice@example.com');
  await page.getByRole('button', { name: 'Confirm reservation' }).click();

  await expect(page.getByRole('status')).toHaveText('Reservation confirmed: CB-CENTRAL');
  expect(reservationPayload).toEqual({
    stationId: 'central',
    email: 'alice@example.com'
  });
});
