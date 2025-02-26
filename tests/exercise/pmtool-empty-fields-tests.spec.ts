import { test, expect } from "@playwright/test";

test("Validační zprávy zobrazeny", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator(".btn").click();
  await expect(page.locator("#username-error")).toBeVisible();
  await expect(page.locator("#username-error")).toHaveText(
    "This field is required!"
  );
  await expect(page.locator("#password-error")).toBeVisible();
  await expect(page.locator("#password-error")).toHaveText(
    "This field is required!"
  );
});

test("Validační zprávy nezobrazeny", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator("#username-error")).not.toBeVisible();
  await expect(page.locator("#password-error")).not.toBeVisible();
});
