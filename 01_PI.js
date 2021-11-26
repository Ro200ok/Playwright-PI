
// Тест главной страницы



const { webkit, chromium, firefox } = require('playwright');
const expect = require('expect');


const url = 'https://polit.info/';

(async () => {
 
 for (const browserType of [webkit, chromium, firefox]) {
  const browser = await browserType.launch({
    headless: true,
    
  })
  const page = await browser.newPage();
  const responce = await page.goto(url);
  if(responce.ok()) {
     console.log(`Responce ${browserType.name()} ок`)
     expect(url).toContain('polit.info')
  }
  

  await browser.close();
 }
 
 
 
 
})();