const { test, expect } = require('@playwright/test');

// MISSION 4 — Mock the first /api/stations GET as 503, confirm the error banner,
// then let Retry loading reach the real server and recover to 4 stations.

test.skip('station API outage shows an error and retry restores results', async ({ page }) => {
  // TODO
});
