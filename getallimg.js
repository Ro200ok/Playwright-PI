const {chromium} = require('playwright');
const fs = require('fs');
const request = require('request');
// const axios = require('axios');
const https = require('https');
const http = require('http');

(async() => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('')

  
        

   
    const images = await page.$$eval("img", (images) =>
    images.map((image) => { return {src: image.src, alt: image.alt, width:image.clientWidth, height:image.clientHeight}})
    )
                              
    // console.log(images) 
    
    
    
  
        
    images.forEach(image => {
       
        let fileName = Date.now();
        let exp =  image.src.split('.');

        let path = `./images/${fileName}.${exp[exp.length-1]}`;
        // console.log(image.src) 


        request(image.src).pipe(fs.createWriteStream(path))


    })
    
    

    await browser.close()
}) ()





