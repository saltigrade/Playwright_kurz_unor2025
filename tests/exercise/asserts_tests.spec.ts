import { test, expect } from "@playwright/test";

test("toContainText test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator(".btn").click();
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  ); // ? Kontroluje, jestli element obsahuje (i část) textu
});

test("toHaveText test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator(".btn").click();
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  ); // ? Kontroluje vždy celý text
});

test("toBeVisible test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await expect(page.locator(".login-page-logo img")).toBeVisible();
});

test("toHaveValue test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("TEST");
  await expect(page.locator("#username")).toHaveValue("TEST");
});

test("toBeChecked test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await expect(page.locator("input[value='option-3']")).toBeChecked();
});

test("toBeDisabled test", async ({ page }) => {
  await page.goto("http://tredgate.com/webtrain/registration.html");
  await expect(page.locator("#occupation")).toBeDisabled();
});

test.skip("Soft assert test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL"); // špatně, padá
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("button[type='submit']").click();
});

test("Negative test ", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator(".alert-danger")).not.toBeVisible();
});

test.skip(
  "FAIL: toContainText test",
  { annotation: { description: "BUG123", type: "Bug" } }, // anotace skipnuté testu (důvod, například bugID)
  async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool/");
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator(".btn").click();
    await expect(page.locator("#welcome-page-header")).toContainText(
      "Vítej v testovací aplikaci222"
    );
  }
);
