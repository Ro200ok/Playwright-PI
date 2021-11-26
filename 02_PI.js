
//Тест рубрик навбара



const {chromium} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:false, slowMo:50})
    const context = await browser.newContext({viewport: null})
    const page = await context.newPage()
   
    await page.goto(url)



   const header = await page.waitForSelector('.header-content__menu-list') // дожидаемся загрузки навбара
    
  
 

     await page.click('text=Политика');
     let currentTitle = await page.innerText('.main-title');     
     let currentUrl = await page.url();
     expect(currentTitle).toContain('Политика'); 
     expect(currentUrl).toContain('category/politika');
     
     
   
   
      await page.click('text=Общество');
      currentTitle = await page.innerText('.main-title');  
      currentUrl = await page.url();
      expect(currentTitle).toContain('Общество'); 
      expect(currentUrl).toContain('category/obshchestvo');
     
      

       
      await page.click('text=Экономика');
      currentTitle = await page.innerText('.main-title'); 
      currentUrl = await page.url();
      expect(currentTitle).toContain('Экономика'); 
      expect(currentUrl).toContain('category/ekonomika');
      
      
      await page.click('text=Происшествия');
      currentTitle = await page.innerText('.main-title'); 
      currentUrl = await page.url();
      expect(currentTitle).toContain('Происшествия'); 
      expect(currentUrl).toContain('category/proisshestviya');
 
      
      await page.click('text=Дайджест');
      currentTitle = await page.innerText('.main-title'); 
      currentUrl = await page.url();
      expect(currentTitle).toContain('Дайджест'); 
      expect(currentUrl).toContain('category/daidzhest');
  
      await page.click('text=Армия');
      currentTitle = await page.innerText('.main-title'); 
      currentUrl = await page.url();
      expect(currentTitle).toContain('Армия');
      expect(currentUrl).toContain('category/armiya');  
  
  
      await page.click('text=Лента новостей');
      currentTitle = await page.innerText('.main-title'); 
      currentUrl = await page.url();
      expect(currentTitle).toContain('Лента новостей');
      expect(currentUrl).toContain('news');
 

    


  

    
    await browser.close()
    
}) ()