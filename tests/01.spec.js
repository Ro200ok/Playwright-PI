const { test, expect } = require('@playwright/test');

test('Matching screen', async ({ browser, page }) => {
  
  
//   const context = await browser.newContext({viewport: null, httpCredentials: {
//     username: 'nginx',
//     password: 'test',
//   },

// },)

  await page.goto('https://polit.info/news');
  expect(await page.screenshot({
    fullPage:true
  })).toMatchSnapshot('Obrazetc.png');
});