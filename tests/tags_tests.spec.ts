import { test, expect } from "@playwright/test";

test.describe("Smoke tests", { tag: "@smoke" }, () => {
  test("Smoke Test 1", async ({ page }) => {
    console.log("Test Smoke 1");
  });

  test("Smoke Test 2", async ({ page }) => {
    console.log("Test Smoke 2");
  });
});

test.describe("Some Tests", () => {
  test("Smoke Test 3", { tag: "@smoke" }, async ({ page }) => {
    console.log("Test Smoke 3");
  });

  test("Jiný test", async ({ page }) => {
    console.log("Jiný test");
  });
});
