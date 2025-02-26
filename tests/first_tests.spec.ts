// ! Přístupy do pmtool:
/*
Username: playwright_jaro24
Password: Playwright!2024
URL: https://tredgate.com/pmtool/
*/
/* Selektory
CSS: input[id="username"]
XPATH: //input[@id="username"]
*/

import { test } from "@playwright/test";

test("První test", async ({ page }) => {
  // test kroky
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
});
