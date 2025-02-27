import { expect, test } from "@playwright/test";

test("Pmtool login, visual test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page).toHaveScreenshot("loginPage.png");
});
