# Playwright Automation Exercise

This repository contains a simple end-to-end automation exercise built with Playwright and JavaScript.

The project was created as part of a QA Automation assignment.

---

## Technologies

- Playwright
- JavaScript
- Node.js

---

## Automated Flow

The automation performs the following actions:

- Opens the target website
- Fills the contact form fields
- Changes the "Number of Employees" dropdown value
- Takes a screenshot before form submission
- Submits the form
- Prints a console message after reaching the thank-you page

---

## Project Structure

```bash
tests/               # Playwright test files
test-results/        # Screenshots and execution results
playwright.config.js # Playwright configuration
```

---

## Installation

```bash
npm install
npx playwright install
```

---

## Run Tests

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
