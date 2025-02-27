import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Register user in TEG#B and check API", async ({ page }) => {
  const username = faker.internet.username();
  const email = faker.internet.exampleEmail();
  const password = "123456";

  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  await page.locator("//input[@data-testid='username-input']").fill(username);
  await page.locator("//input[@data-testid='email-input']").fill(email);
  await page.locator("//input[@data-testid='password-input']").fill(password);

  // Zapneme odchytávání na response
  const response = page.waitForResponse("**/tegb/register*");
  const request = page.waitForRequest("**/tegb/register*");
  await page.locator("//button[@data-testid='submit-button']").click();

  // čekáme na odchycení response registrace
  const interceptedResponse = await response;
  const interceptedRequest = await request;

  // Test na request část HTTP registrace
  const requestBody = await interceptedRequest.postDataJSON();
  console.log(JSON.stringify(requestBody, null, 2));

  expect(requestBody.email).toBe(email);
  expect(requestBody.username).toBe(username);
  expect(requestBody.password).toBe(password);

  // Testy na response registrace
  const responseBody = await interceptedResponse.json();

  expect(responseBody.username).toBe(username);
  expect(responseBody.email).toBe(email);
  expect(responseBody.userId).toBeDefined();
  expect(typeof responseBody.createdAt).toBe("string");
});

/*
{
    "username": "petr.ttttte",
    "email": "test@example.org",
    "userId": 6514,
    "createdAt": "2025-02-27",
    "updatedAt": null,
    "active": 1
}

*/
