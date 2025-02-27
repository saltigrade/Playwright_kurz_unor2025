import { test } from "@playwright/test";
import { LoginPage } from "../pages/login_page";
import { DashboardPage } from "../pages/dashboard_page";

test("PageObjects Tests", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openPmTool();
  await loginPage.fillUsername("playwright_jaro24");
  await loginPage.fillPassword("Playwright!2024");
  await loginPage.clickLogin();
});

test("Login and logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.login("playwright_jaro24", "Playwright!2024");
  await dashboardPage.logout();
});
