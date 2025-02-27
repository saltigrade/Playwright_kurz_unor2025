import { test, expect } from "@playwright/test";

test("Patch train test - by sapa", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody = await response.json();
  // Kontrola typu
  expect(typeof responseBody.timestamp).toBe("string");
  console.log("Použití typeof (typu): " + typeof responseBody.timestamp);
  // Kontrola hodnot
  expect(responseBody.id).toBe(1);
});
