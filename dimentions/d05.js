const { webkit, chromium, firefox } = require('playwright');
const expect = require('expect');
const data = require('./dimentionsPi.js')

const url = 'https://polit.info/';




//1920, 1280, 1024, 414


const blocksPi = {
   
// vp1920x - viewport: 1920x1080 chromium
// vp1280 -  viewport: 1280x720 chromium
// vp1024 - viewport: 1024x1366 webkit ipad pro
// vp360 - viewport: 360x640 firefox Galaxy s7
    



        header: {
            
            vp1920: {
                w: 1920,
                h: 65
            },

            vp1280: {
                w: 1280,
                h: 65

            },

            vp1024: {
                w: 1007,
                h: 65

            },

            vp360: {
                w: 360,
                h: 65

            },
            
        },


        slider: {

            vp1920: {
                w: 752,
                h: 567
            },

            vp1280: {
                w: 733,
                h: 567

            },

            vp1024: {
                w: 977,
                h: 554

            },

            vp360: {
                w: 330,
                h: 334

            },
            
            
        },
     
        sidebar: {

            vp1920: {
                w: 342,
                h: 567
            },
            
            vp1280: {
                w: 333,
                h: 567

            },

            vp1024: {
                w: 977,
                h: 388

            },

            vp360: {
                w: 330,
                h: 388

            },
         
        },
     
        section1: {

            vp1920: {
                w: 1140,
                h: 427
            },

            vp1280: {
                w: 1110,
                h: 427

            },

            vp1024: {
                w: 977,
                h: 427

            },

            vp360: {
                w: 302,
                h: 1451

            },
         
         
        },

        section2: {

            vp1920: {
                w: 1140,
                h: 782
            },

            vp1280: {
                w: 1110,
                h: 782

            },

            vp1024: {
                w: 977,
                h: 782

            },

            
            vp360: {
                w: 302,
                h: 2204

            },
         
        },
        
        section3: {

            vp1920: {
                w: 1140,
                h: 427
            },

            vp1280: {
                w: 1110,
                h: 427

            },

            vp1024: {
                w: 977,
                h: 427

            },

            vp360: {
                w: 302,
                h: 1471

            },
         
         
        },

        section4: {
            vp1920: {
                w: 1140,
                h: 782
            },

            vp1280: {
                w: 1110,
                h: 782

            },

            vp1024: {
                w: 977,
                h: 782

            },

            vp360: {
                w: 302,
                h: 2204

            },
         
        },

        section5: {
            vp1920: {
                w: 1140,
                h: 428
            },

            vp1280: {
                w: 1110,
                h: 428

            },

            vp1024: {
                w: 977,
                h: 427

            },

            vp360: {
                w: 302,
                h: 1465

            },


        },

        section6: {
            vp1920: {
                w: 1140,
                h: 782
            },

            vp1280: {
                w: 1110,
                h: 782

            },

            vp1024: {
                w: 977,
                h: 782

            },

            vp360: {
                w: 302,
                h: 2204

            },
         
        },

        footer: {
            vp1920: {
                w: 1140,
                h: 782
            },

            vp1280: {
                w: 1110,
                h: 782

            },

            vp1024: {
                w: 977,
                h: 782

            },

            vp360: {
                w: 302,
                h: 2204

            },
         
        },

 
    
 
 
    
 
 
};
 


(async() => {
    const browser = await chromium.launch({args: ['--start-maximized'], headless:true, slowMo:50})
    const context = await browser.newContext()
    const page = await context.newPage()
   
    await page.goto(url)

    // if(blocksPi.viewport_1900.sidebar.width === blocksPi2.viewport_1900.sidebar.w) {
    //     console.log('true')
    // }
    // console.log(blocksPi2.viewport_1900.slider.h)
    
    
    
    const keys = Object.keys(blocksPi2);

   
    


  

    
    await browser.close()
    
}) ()