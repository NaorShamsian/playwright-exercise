const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // The directory where Playwright will look for our tests
  testDir: './tests',
  
  // Custom test file matching to allow any name ending in .js (like test.js)
  testMatch: '**/*.js',
  
  // Maximum time one test can run for. 30 seconds is standard.
  timeout: 30 * 1000,
  
  // Run tests in files in parallel
  fullyParallel: true,
  
  // Configure how the browser behaves here
  use: {
    // Run the browser in "headed" mode (visible) 
    headless: false,
    
    // I use Chromium (the open-source engine behind Google Chrome)
    browserName: 'chromium',
  },
});
