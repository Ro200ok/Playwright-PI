
//Тест рубрик навбара



const {chromium} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:true, slowMo:50})
    const context = await browser.newContext({viewport: null})
    const page = await context.newPage()
   
    await page.goto(url)

    
    await page.waitForTimeout(1000)


   


//   const allUrls = await Promise.all (links.map(async(link, i) => {
//         return await link.innerText()
//     }))
//     console.log(allUrls)
   
   
    // const mass = await links.map(link => {
        
    //     console.log(link.innerText())
    // })
    
    const links = await page.locator('a')

    let c = await links.count
    for (let i = 0; i < c; i++) {
        let text = await links.nth(i).textContent();
        console.log(text)
    }

    
   
   
  
    
    
    await browser.close()
    
}) ()