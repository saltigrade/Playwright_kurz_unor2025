import { test } from "@playwright/test";
import { LoginPageFluent } from "../pages/fluent/login_page";

test("Fluent Interface Test", async ({ page }) => {
  const loginPage = new LoginPageFluent(page);
  await loginPage
    .openPmTool()
    .then((page) => page.fillUsername("playwright_jaro24"))
    .then((page) => page.fillPassword("Playwright!2024"))
    .then((page) => page.clickLogin())
    .then((page) => page.logout());
});
