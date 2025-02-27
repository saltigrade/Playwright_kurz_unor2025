import { faker } from "@faker-js/faker";
import { test } from "@playwright/test";

test("Generate unique test data for user registration", ({ page }) => {
  const generatedFirstName = faker.person.firstName();
  const generatedLastName = faker.person.lastName();
  const generatedEmail = faker.internet.exampleEmail({
    firstName: generatedFirstName,
    lastName: generatedLastName,
  });
  console.log(generatedFirstName);
  console.log(generatedLastName);
  console.log(generatedEmail);
});
