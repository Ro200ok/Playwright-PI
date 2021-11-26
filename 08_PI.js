
// Тест главной страницы на Redmi Note 7



const { webkit, chromium, firefox } = require('playwright');
const expect = require('expect');


const url = 'https://polit.info/';

(async () => {
 
 for (const browserType of [chromium]) {
  const browser = await browserType.launch({
    headless: false,
    })
  const context = await browser.newContext({hasTouch: true})
  const page = await browser.newPage({viewport: { width: 393, height: 851 }});
  
  const responce = await page.goto(url);
  
  const burger = await page.waitForSelector('.header-close-btn', { state: 'visible' });
  
  await burger.tap()

  await browser.close();
 

}         // Конец цикла
     
 
 
 
})();