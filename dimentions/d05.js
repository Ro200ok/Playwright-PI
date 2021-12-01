const { webkit, chromium, firefox } = require('playwright');
const expect = require('expect');
const data = require('./dimentionsPi.js')

const url = 'https://polit.info/';

const blocksPi = {
   
   
    viewport1900x1600: {
        header: {
            width: 1920,
            height: 65
        },
     
        slider: {
         width: 752,
         height: 567
        },
     
        sidebar: {
         width: 342,
         height: 567
        },

    } 
        
      
 
    
 
 
    
 
 
};
 
 


(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:true, slowMo:50})
    const context = await browser.newContext()
    const page = await context.newPage()
   
    await page.goto(url)

    console.log(blocksPi.viewport1900x1600.slider)

 

    


  

    
    await browser.close()
    
}) ()