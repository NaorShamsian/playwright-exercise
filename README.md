# Playwright Automation Exercise

This repository contains an end-to-end automation project built with Playwright and JavaScript.

The project was created as part of a QA Automation assignment and demonstrates UI test automation using the Page Object Model (POM) design pattern.

---

## Technologies

- Playwright
- JavaScript
- Node.js

---

## Features

The automation performs the following actions:

- Opens the target website
- Fills all contact form fields
- Changes the "Number of Employees" dropdown value
- Takes a screenshot before form submission
- Submits the form
- Validates successful navigation to the thank-you page
- Prints a success message in the console

---

## Design Pattern

This project follows the **Page Object Model (POM)** design pattern.

The locators and page actions are separated from the test logic in order to improve:

- Readability
- Reusability
- Maintainability
- Scalability

---

## Project Structure

```bash
pages/
└── ContactPage.js       # Page Object containing locators and page methods

tests/
└── contactForm.spec.js  # Main Playwright test

screenshots/             # Saved screenshots before form submission

playwright.config.js     # Playwright configuration

package.json             # Project dependencies
```

---

## Installation

```bash
npm install
npx playwright install
```

---

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

---

## Author

Naor Shamsian  
Computer Science Student | QA Automation Enthusiast
