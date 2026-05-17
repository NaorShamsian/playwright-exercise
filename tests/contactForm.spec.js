const { test, expect } = require('@playwright/test');
const ContactPage = require('../pages/ContactPage');

// Created by Naor Shamsian

test('Assignment: Fill contact form and validate success', async ({ page }) => {
  
  const contactPage = new ContactPage(page);

  // 1. NAVIGATE TO TARGET PAGE
  await contactPage.navigate();


  // 2. FILL THE FORM FIELDS
  // For each field, I find its unique 'id' in the HTML and use 'page.locator('#id').fill()'
  // The '#' symbol means I'm looking for an element by its ID.
  await contactPage.fillContactForm('Naor Shamsian',
     'naorshamsian1@gmail.com',
      '0558819809',
       'QA Automation Inc',
        'https://google.com');


  // 3. BONUS - CHANGE DROPDOWN
  // After research I found that Playwright has method called 'selectOption' in aim to control <select> dropdowns 
  // I pass the exact text of the option I want to select.
  await contactPage.selectEmployees('51-500');

  // 4. TAKE SCREENSHOT BEFORE SUBMIT
  // I specify the path where the screenshot will be saved.
  // Using Date.now() ensures every screenshot has a unique name (a timestamp) so they don't overwrite each other.
  const timestamp = Date.now(); 
  await page.screenshot({ path: `./screenshots/form-before-submit-${timestamp}.png` });

  // 5. CLICK "REQUEST A CALL BACK"
  // I locate the target button by its exact visible text using 'getByRole'.
  await contactPage.clickSubmit();

  // 6. VALIDATE SUCCESS PAGE
  // After clicking, the page navigates to a "thank-you.html" page.
  // I use 'expect(page).toHaveURL()' to verify that the URL actually changed to the success page.
  // This is how I prove our test actually succeeded!
  await expect(page).toHaveURL(/.*thank-you\.html/);

  // 7. PRINT SUCCESS LOG
  // If the test reaches this line without failing, I know everything worked perfectly.
  console.log("Form submitted successfully");
});
