import { test } from "@playwright/test";

test("Click test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#name").fill("Sabina Sabuela");
  await page.locator("#datepicker").fill("2000-09-11");
  await page.locator("#email").fill("sabina@example.net");
  await page.locator("#password").fill("heslo");
  await page.locator("#confirm-password").fill("heslo");
  await page.locator("#basic").check();
  await page.locator("#age").fill("30");
  await page.locator("#gender").selectOption("female");
  await page.locator("#address").fill("pod mostem");
  await page.locator("#interests-sports").check();
  await page.locator("#interests-travel").check();
  await page.locator("#newsletter").check();
  await page.locator('[type="submit"]').click();
});
