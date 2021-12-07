
//Тест рубрик навбара



const {chromium} = require('playwright');
const expect = require('expect');
const axios = require('axios');



const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:true, slowMo:50})
    const context = await browser.newContext({viewport: null})
    const page = await context.newPage()
   
    await page.goto(url)

//     axios.get(url)
//   .then(function (response) {
    
//     console.log(response.data);
//     // console.log(response.statusText);
//     // console.log(response.headers);
//     // console.log(response.json());
//   });


        const icon = await page.$eval('//*[@id="app"]/footer/div[1]/div[1]/div', el => el.innerHTML)
        // expect(icon).toMatch('18+!');
        console.log(await icon) 


    
    
    
   
   
  
    
    
    await browser.close()
    
}) ()