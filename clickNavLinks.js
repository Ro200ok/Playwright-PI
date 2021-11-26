const {chromium} = require('playwright');




(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:false, slowMo:50})
    const context = await browser.newContext({viewport : null})
    const page = await context.newPage()
   
    await page.goto('https://slovodel.com/')

    // await page.mouse.move(244.796875, 19)
    
    const frame = await page.waitForSelector(".header-content__menu-list")
    await 
    
    await page.screenshot({path: '123.png'})
    
    
    // const frame = await page.waitForSelector(".header-content__menu-list");   ----- узнать координаты элемента

    // // const rect = await page.evaluate(el => {
    // //     const {x, y} = el.getBoundingClientRect();
    // //     return {x, y};
    // //   }, frame);

    // //   console.log(rect)
    
    await browser.close()
    
}) ()