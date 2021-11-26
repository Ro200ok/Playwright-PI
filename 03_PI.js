
//Тест рубрик главной страницы



const {chromium} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:false, slowMo:50})
    const context = await browser.newContext({viewport: null})
    const page = await context.newPage()
    
   
    await page.goto(url)



   const header = await page.waitForSelector('.header-content__menu-list') // дожидаемся загрузки навбара
    
  
 

     await page.click('text=Региональная повестка');
     let currentTitle = await page.innerText('.main-title');     
     let currentUrl = await page.url();
     expect(currentTitle).toContain('Региональная повестка'); 
     expect(currentUrl).toContain('category/regionalnaya-povestka');
     
     
     await page.goBack()

   
   
     await page.waitForSelector('.container > .main-block > .tiles-news-block:nth-child(3) > .block-name > .block-name__text')
     await page.click('.container > .main-block > .tiles-news-block:nth-child(3) > .block-name > .block-name__text')
     currentTitle = await page.innerText('.main-title');
     //  console.log(currentTitle)
     currentUrl = await page.url();
     expect(currentTitle).toContain('Россия и мир'); 
     expect(currentUrl).toContain('category/rossiya-i-mir');


     await page.goBack()

     await page.click('text=Ближнее зарубежье');
     currentTitle = await page.innerText('.main-title')    
     currentUrl = await page.url();
     expect(currentTitle).toContain('Ближнее зарубежье'); 
     expect(currentUrl).toContain('category/blizhnee-zarubezhe')
     
    
    
     await page.goBack()

     
     await page.click('text=История');
     currentTitle = await page.innerText('.main-title')    
     currentUrl = await page.url();
     expect(currentTitle).toContain('История'); 
     expect(currentUrl).toContain('category/istoriya')
    

     await page.goBack()

     await page.click('text=Европа и США');
     currentTitle = await page.innerText('.main-title')    
     currentUrl = await page.url();
     expect(currentTitle).toContain('Европа и США'); 
     expect(currentUrl).toContain('category/evropa-i-ssha')

     await page.goBack()


    await page.click('text=Лента Новостей');
     currentTitle = await page.innerText('.main-title')    
     currentUrl = await page.url();
     expect(currentTitle).toContain('Лента'); 
     expect(currentUrl).toContain('news')
  

    
    await browser.close()
    
}) ()