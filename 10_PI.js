
//Тест поиска



const {chromium} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:true, slowMo:50})
    const context = await browser.newContext({viewport: null})
    const page = await context.newPage()
   
    await page.goto(url)

    let search = 'Макрон'



    await page.waitForSelector('.menu-search') 
    await page.click('.menu-search')
   
    await page.waitForSelector('#search-field')
    await page.click('#search-field')
    await page.fill('#search-field', search)
    await page.waitForTimeout(1000)
    await page.click('button')

   

    await page.waitForTimeout(2000)

    const links = await page.$$eval('.category__small-block', (links) =>
    links.map((link) => { return {src: link.innerText}})
    )
    let count = 0;
    
    links.forEach(el =>{
       
        if(el.src.includes(search)) {
            count++;
        }
    })

    expect(count).toBeGreaterThanOrEqual(5)
    
    
    console.log(await count)


    
    


  

    
    await browser.close()
    
}) ()