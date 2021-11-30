
//Тест рубрик навбара



const {chromium} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:false, slowMo:50})
    const context = await browser.newContext({viewport: null})
    const page = await context.newPage()
   
    await page.goto(url)

    
    await page.waitForTimeout(1000)


    const links = await page.$$eval('.tiles-list-news-block:has-text("Европа и США")')
    
    
    
    
   
    console.log()
  
    
    
    await browser.close()
    
}) ()