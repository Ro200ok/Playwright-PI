
//Тест слайдера на iPad Pro



const {webkit} = require('playwright');
const expect = require('expect');



const url = 'https://polit.info/';



(async() => {
    const browser = await webkit.launch({args: ['--start-maximized'], headless:false, slowMo:50})
    const context = await browser.newContext({viewport: {width: 1024, height: 1366}, hasTouch: true})
    const page = await context.newPage()
    await page.goto(url)

    

    let liCurrent = await page.isVisible('.slider-item.hooper-slide.is-active.is-current')
    console.log(await liCurrent)
    expect(liCurrent).toBeTruthy();

    
   
    await page.waitForSelector('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')
    await page.tap('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')

    await page.waitForTimeout(500)

    liCurrent = await page.isVisible('.slider-item.hooper-slide.is-active.is-current')
    console.log(await liCurrent)
    expect(liCurrent).toBeTruthy();    
 
    await page.waitForSelector('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')
    await page.tap('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')

    await page.waitForTimeout(500)


    liCurrent = await page.isVisible('.slider-item.hooper-slide.is-active.is-current')
    console.log(await liCurrent)
    expect(liCurrent).toBeTruthy();  
  
    await page.waitForSelector('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')
    await page.tap('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')

    await page.waitForTimeout(500)


    liCurrent = await page.isVisible('.slider-item.hooper-slide.is-active.is-current')
    console.log(await liCurrent)
    expect(liCurrent).toBeTruthy();  
  
    await page.waitForSelector('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')
    await page.tap('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')

    await page.waitForTimeout(500)


    liCurrent = await page.isVisible('.slider-item.hooper-slide.is-active.is-current')
    console.log(await liCurrent)
    expect(liCurrent).toBeTruthy();  
  
    await page.waitForSelector('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')
    await page.tap('.tiles-news__slider-block > .slider-wrapper > .hooper-list > .hooper-navigation > .hooper-next')

    await page.waitForTimeout(500)

    
    liCurrent = await page.isVisible('.slider-item.hooper-slide.is-active.is-current')
    console.log(await liCurrent)
    expect(liCurrent).toBeTruthy();  

    
    await browser.close()
    
}) ()