
//Тест бургер-меню на на Redmi Note 7



const {webkit} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await webkit.launch({args: ['--start-maximized'], headless:false, slowMo:50})
    const context = await browser.newContext({viewport: {width: 393, height: 851}, hasTouch: true})
    const page = await context.newPage()
    await page.goto(url)

    
    const burger = await page.waitForSelector('.header-close-btn', { state: 'visible' });
    await burger.tap()

    
    const modal = await page.waitForSelector('.modal-menu-wrap', { state: 'visible' });
    
  
    
    

   
    
    await browser.close()
    
}) ()