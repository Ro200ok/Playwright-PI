
// Тест размеров блоков poit.info на больших мониторах (viewport: {width: 1920, height: 1080})



const { webkit, chromium, firefox } = require('playwright');
const expect = require('expect');


const url = 'https://polit.info/';
const urlNew = 'https://new.polit.info/';

(async () => {
 
 for (const browserType of [webkit]) {
  const browser = await browserType.launch({
    headless: true})
  
    const context = await browser.newContext()
    const page = await browser.newPage({viewport: {width: 1920, height: 1080} });
    const responce = await page.goto(url);
  
 
    // Получаем размеры хедера
  
 const headerWidth = await page.$eval('.header-content-block', el => el.clientWidth)
 const headerHight = await page.$eval('.header-content-block', el => el.clientHeight)
 
 console.log("Хедер прод", headerWidth, headerHight)

  // Получаем размеры блока слайдера

  const sliderWidth = await page.$eval('.slider-block__slider', el => el.clientWidth)
  const sliderHight = await page.$eval('.slider-block__slider', el => el.clientHeight)
  
  console.log("Слайдер прод", sliderWidth, sliderHight)

  

  // Получаем размеры блока новостей

  const newsWidth = await page.$eval('.sidebar-item.slider-block__news-list', el => el.clientWidth)
  const newsHight = await page.$eval('.sidebar-item.slider-block__news-list', el => el.clientHeight)
  
  console.log("Блок новостей прод", newsWidth, newsHight)

  
  
  // Получаем размеры первой секции


 

  const sectionFirstWidth = await page.$eval('//*[@id="main"]/article/div[2]/section[1]', el => el.clientWidth)
  const sectionFirstHeight = await page.$eval('//*[@id="main"]/article/div[2]/section[1]', el => el.clientHeight)

  console.log("Секция один прод", sectionFirstWidth, sectionFirstHeight)

  // Получаем размеры второй секции

  const sectionSecondWidth = await page.$eval('//*[@id="main"]/article/div[2]/section[2]', el => el.clientWidth)
  const sectionSecondHeight = await page.$eval('//*[@id="main"]/article/div[2]/section[2]', el => el.clientHeight)

  console.log("Секция два прод", sectionSecondWidth, sectionSecondHeight)

  // // Получаем размеры третьей секции
  
  const thirdWidth = await page.$eval('//*[@id="main"]/article/div[2]/section[3]', el => el.clientWidth)
  const thirdHeight = await page.$eval('//*[@id="main"]/article/div[2]/section[3]', el => el.clientHeight)

  console.log("Секция три прод", thirdWidth, thirdHeight)
  

  // // Получаем размеры четвертой секции

  const forthWidth = await page.$eval('//*[@id="main"]/article/div[2]/section[4]', el => el.clientWidth)
  const forthHeigth = await page.$eval('//*[@id="main"]/article/div[2]/section[4]', el => el.clientHeight)

  console.log("Секция четыре прод", forthWidth, forthHeigth)

  // Получаем размеры пятой секции

  const fithWidth = await page.$eval('//*[@id="main"]/article/div[2]/section[5]', el => el.clientWidth)
  const fithHeigth = await page.$eval('//*[@id="main"]/article/div[2]/section[5]', el => el.clientHeight)

  console.log("Секция пять прод", fithWidth, fithHeigth)

  // Получаем размеры шестой секции

  const sixWidth = await page.$eval('//*[@id="main"]/article/div[2]/section[6]', el => el.clientWidth)
  const sixHeigth = await page.$eval('//*[@id="main"]/article/div[2]/section[6]', el => el.clientHeight)

  console.log("Секция шесть прод", sixWidth, sixHeigth)



  // // Получаем размеры футера
  
  const footerWidth = await page.$eval('.footer-block', el => el.clientWidth)
  const footerHeight = await page.$eval('.footer-block', el => el.clientHeight)

  console.log("Футер прод", forthWidth, forthHeigth, '\n')
  
  
  
 
  // Идем на дев
 
 
  for (const browserType2 of [chromium]) {
    const browser2 = await browserType2.launch({
    headless: true})
  
    // Авторизуемся
    const context2 = await browser2.newContext({ httpCredentials: {
      username: 'nginx',
      password: 'test',
    },
    viewport: {width: 1920, height: 1080}
  
  })
    const page2 = await context2.newPage();
    const responce2 = await page2.goto(urlNew);
  
 

  // Получаем размеры блока слайдера

  let sliderWidth2 = await page2.$eval('.slider-block__slider', el => el.clientWidth)
  let sliderHight2 = await page2.$eval('.slider-block__slider', el => el.clientHeight)
  
  console.log("Слайдер дев", sliderWidth2, sliderHight2)

  // Получаем размеры хедера
  
  const headerWidth2 = await page2.$eval('.header-content-block', el => el.clientWidth)
  const headerHight2 = await page2.$eval('.header-content-block', el => el.clientHeight)
  
  console.log("Хедер дев", headerWidth2, headerHight2)

  // Получаем размеры блока новостей

  const newsWidth2 = await page2.$eval('.sidebar-item.slider-block__news-list', el => el.clientWidth)
  const newsHight2 = await page2.$eval('.sidebar-item.slider-block__news-list', el => el.clientHeight)
  
  console.log("Блок новостей дев", newsWidth2, newsHight2)

  // Получаем размеры первой секции

  const sectionFirstWidth2 = await page2.$eval('.tiles-news-block', el => el.clientWidth)
  const sectionFirstHeight2 = await page2.$eval('.tiles-news-block', el => el.clientHeight)

  console.log("Секция один дев", sectionFirstWidth2, sectionFirstHeight2)

  // Получаем размеры второй секции

  const sectionSecondWidth2 = await page2.$eval('.tiles-list-news-block', el => el.clientWidth)
  const sectionSecondHeight2 = await page2.$eval('.tiles-list-news-block', el => el.clientHeight)

  console.log("Секция два дев", sectionSecondWidth2, sectionSecondHeight2)

  
  // Третья секция

  const thirdWidth2 = await page.$eval('.tiles-news-block:has-text("История")', el => el.clientWidth)
  const thirdHeight2 = await page.$eval('.tiles-news-block:has-text("История")', el => el.clientHeight)

  console.log("Секция история дев", thirdWidth2, thirdHeight2)

  //Четвертая секция
  
  const forthWidth2 = await page.$eval('.tiles-news-block:has-text("Все новости")', el => el.clientWidth)
  const forthHeigth2 = await page.$eval('.tiles-news-block:has-text("Все новости")', el => el.clientHeight)

  console.log("Секция все новости дев", forthWidth2, forthHeigth2)

    
  const footerWidth2 = await page.$eval('.footer-block', el => el.clientWidth)
  const footerHeight2 = await page.$eval('.footer-block', el => el.clientHeight)

  console.log("Футер дев", forthWidth2, forthHeigth2, '\n')


  // Сравниваем размеры

 
  if(sliderWidth === sliderWidth2 && sliderHight === sliderHight2) {
    console.log('Размеры слайдеров одинаковые')
} else {console.log('Размеры слайдеров расходятся')}

if(headerWidth === headerWidth2 && headerHight === headerHight2) {
  console.log('Размеры хедеров одинаковые')
} else {console.log('Размеры хедеров расходятся')}

if(newsWidth === newsWidth2 && newsHight === newsHight2) {
  console.log('Размеры новостных блоков одинаковые')
} else {console.log('Размеры новостных блоков расходятся')}
   
if(sectionFirstWidth === sectionFirstWidth2 && sectionFirstHeight === sectionFirstHeight2) {
  console.log('Размеры первых секций одинаковые')
} else {console.log('Размеры первых секций расходятся')}

if(sectionSecondWidth === sectionSecondWidth2 && sectionSecondHeight === sectionSecondHeight2) {
  console.log('Размеры вторых секций одинаковые')
} else {console.log('Размеры вторых секций расходятся')}

if(thirdWidth === thirdWidth2 && thirdHeight === thirdHeight2) {
  console.log('Размеры третьих секций одинаковые')
} else {console.log('Размеры третьих секций расходятся')}


if(forthWidth === forthWidth2 && forthHeigth === forthHeigth2) {
  console.log('Размеры четвертых секций одинаковые')
} else {console.log('Размеры четвертых секций расходятся')}

if(footerWidth === footerWidth2 && footerHeight === footerHeight2) {
  console.log('Размеры футеров одинаковые')
} else {console.log('Размеры футеров расходятся')}


  await browser2.close();
 }

 
    


  await browser.close();
 }
 
  



 
 
})();

(async()=>{



})();