
//Тест рубрик навбара



const {chromium} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:true, slowMo:50})
    const context = await browser.newContext({viewport: null})
    const page = await context.newPage()
   
    await page.goto(url)

    const links = await page.$$eval('.header-content__menu-list > a', el => el.length)

    
    
    
   
    console.log("Test ", links)
  
    
    
    await browser.close()
    
}) ()