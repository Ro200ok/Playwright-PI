// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      browserName: 'webkit',
      viewport: { width: 800, height: 600 },
    },

  };
  
  module.exports = config;