
//Тест бургер-меню на iPad Pro
// настольный монитор — 1600 x 992px;
// ноутбук — 1280 x 802px;
// планшет — 768 x 1024px;
// мобильный телефон — 320 x 480px.



const {webkit} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await webkit.launch({args: ['--start-maximized'], headless:false, slowMo:50})
    const context = await browser.newContext({viewport: {width: 1024, height: 1366}, hasTouch: true})
    const page = await context.newPage()
    await page.goto(url)

    
    const burger = await page.waitForSelector('.header-close-btn', { state: 'visible' });
    await burger.tap()

    
    const modal = await page.waitForSelector('.modal-menu-wrap', { state: 'visible' });
    
  
    
    

   
    
    await browser.close()
    
}) ()