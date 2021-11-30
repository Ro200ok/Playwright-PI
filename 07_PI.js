// Тест сравнения размеров слайдера и навбара на дев и прод



const {chromium} = require('playwright');
const expect = require('expect');
const pixelmatch = require('pixelmatch');



const urlNew = 'https://new.polit.info/';
const url = 'https://polit.info/';



(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:false, slowMo:50, },
     )
    const context = await browser.newContext({viewport: null, httpCredentials: {
        username: 'nginx',
        password: 'test',
      },
    
    },)
    const page = await context.newPage()
    await page.goto(url)
    // await page.screenshot({ path: 'screenshot.png', fullPage: true });
    
    const sliderWidthNew = await page.$eval('.slider-block__slider', el => el.clientWidth)
    const sliderHeightNew = await page.$eval('.slider-block__slider', el => el.clientHeight)

    const headerWidthNew = await page.$eval('.header-content-block__right', el => el.clientWidth)
    const headerHeightNew = await page.$eval('.header-content-block__right', el => el.clientHeight)


    console.log(sliderWidthNew, sliderHeightNew)

    console.log(headerWidthNew, headerHeightNew)
   
      await context.newPage()
      await page.goto(urlNew)
      
      const sliderWidth = await page.$eval('.slider-block__slider', el => el.clientWidth)
      const sliderHeight = await page.$eval('.slider-block__slider', el => el.clientHeight)

      const headerWidth = await page.$eval('.header-content-block__right', el => el.clientWidth)
      const headerHeight = await page.$eval('.header-content-block__right', el => el.clientHeight)
    

      console.log(sliderWidth, sliderHeight)

      console.log(headerWidth, headerHeight)
     
     
     
     
     
      if(sliderWidthNew === sliderWidth && sliderHeightNew === sliderHeight) {
          console.log('Ширина и высота слайдера одинаковые')
      } else {'Ширина и высота слайдера расходятся'}
     
      if(headerWidthNew === headerWidth && headerHeightNew === headerHeight) {
        console.log('Ширина и высота навбара одинаковые')
    } else {'Ширина и высота навбара расходятся'}
    
    

   
    await browser.close()
    
}) ()