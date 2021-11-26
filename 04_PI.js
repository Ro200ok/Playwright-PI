
//Тест мультиплай-пагинации



const {chromium} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:false, slowMo:500})
    const context = await browser.newContext({viewport: null})
    const page = await context.newPage()
   
    await page.goto(url)

    await page.click('text=Региональная повестка')
    await page.waitForLoadState()
    // await page.pause()

    await page.click('text=Показать больше', {delay: 3000})
    
    await page.waitForSelector('.cat-news-list-block', {state : 'visible'})
    

    
    // const urls = await page.$$eval('.cat-news-list-block > a' , (elements) =>
    // elements.map((el) => el.href))
    
    
    await page.waitForSelector('.cat-news-list-block > a', {
      state : 'visible'
    })

    



     console.log()
    
    
 

 

    


  

    
    await browser.close()
    
}) ()