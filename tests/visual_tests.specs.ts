import { expect, test } from "@playwright/test";

test("Pmtool login, visual test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page).toHaveScreenshot("loginPage.png");
});
test("Masking Dynamic Data in Projects Table", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  // Přihlásíme se do aplikace
  await page.locator("#username").fill("protest");
  await page.locator("#password").fill("copilotProtest1");
  await page.locator("[type='submit']").click();
  // Otevřeme stránku s projekty
  await page.locator("#Projects").click();
  // Počkáme na načtení tabulky s projekty
  await expect(page.locator(".table-striped")).toBeVisible();
  // Provedeme vizuální kontrolu s maskováním dynamických dat
  await expect(page).toHaveScreenshot("projects-table-masked.png", {
    mask: [
      page.locator("//td"), // Maskování všech buněk tabulky
      page.locator('[test_id="search_input"]'), // Maskování vyhledávacího pole
    ],
    fullPage: true,
  });
});
