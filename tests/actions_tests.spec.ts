import { test } from "@playwright/test";

test("Click test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator(".btn").click();
});

test("Fill a pressSequentially test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("Start");
  await page.locator("#username").fill("End");
  await page.locator("#username").pressSequentially("Kde toto bude?"); // ? Vyplňuje pole postupně
  await page
    .locator("#username")
    .pressSequentially("Toto píšu pomalu", { delay: 500 }); // ? Vyplňuje pole postupně, s odstupem kláves 500 ms
});

test("Select tests", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#gender").selectOption("female"); // ? Vybere option s value "female" z selectu #gender
  await page.locator("#gender").selectOption({ label: "Male" }); // ? Vybírám hodnotu v selectu pomocí jeho textu <option>TEXT</option>
});

test("Checkbox, Radio button test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator('[value="option-1"]').check(); // ? zakliknutí checkboxu
  await page.locator('[value="blue"]').check(); // ? zakliknutí radio
  await page.locator('[value="option-1"]').uncheck(); // ? odkliknutí checkboxu
});

test("iFrame test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  // await page.locator("#button-find-out-more").click(); // ! Toto nebude fungovat, prvek je uvnitř iframe
  const frame = page.frameLocator("#frame");
  await frame.locator("#button-find-out-more").click();
});

test("Hover test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/Actions/index.html");
  page.on("dialog", async (dialog) => {
    console.log("Zpráva alertu: " + dialog.message());
    dialog.dismiss();
  });

  await page.locator(".dropdown.hover .dropbtn").hover();
  await page.locator(".dropdown.hover .list-alert").click();
});
