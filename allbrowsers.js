const {webkit, chromium, firefox} = require('playwright');

(async() => {
    for(const broswerType of [webkit, chromium, firefox]) {
        const browser = await broswerType.launch({headless:false});
        
        
     const page = await browser.newPage()
     await page.setViewportSize({
        width: 1920,
        height: 1080,
      });
    await page.goto('https://slovodel.com/')
    await page.screenshot({
        path: `screenshot-${broswerType.name()}.png`
    })

    
   
    await browser.close()
    }
}) ()