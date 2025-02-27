//dashboard_page.ts

import { expect, Locator, Page } from "@playwright/test";
import { LoginPage } from "../login_page";

export class DashboardPageFluent {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly warningIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.warningIcon = page.locator("#user_notifications_report .fa");
  }

  async logout() {
    await expect(this.warningIcon).toBeVisible(); // počka na načtení ikony (dokončení načítání stránky)
    await this.profileButton.click();
    await this.logoutButton.click();
    return new LoginPage(this.page);
  }
}
