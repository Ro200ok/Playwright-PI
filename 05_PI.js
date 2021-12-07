
//Тест сингл-подгрузки постов



const {chromium} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:false, slowMo:500})
    const context = await browser.newContext({viewport: null})
    const page = await context.newPage()
   
    await page.goto(url)

    await page.click('.sidebar__block-title')

    await page.evaluate(async () => {
        
        for (let i = 0; i < document.body.scrollHeight; i += 1000) {
          
                setTimeout(function(){
                  window.scrollTo(0, i);
      
              }, 1000); 

              
              }
         });

         await page.click('text=Показать больше', {delay: 1000})
         let posts = await page.$$eval('article', (el) => el.length >= 2)
         
         console.log(await posts)
     
  
    
    await browser.close()
    
}) ()