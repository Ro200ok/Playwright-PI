// const header = document.querySelector('.header');
// console.log(header);

// header.addEventListener('click', function() {
//     this.style.color = 'red';
//     this.style.fontWeight = 'bold';
//     this.style.marginTop = '200px';

//     setTimeout(() =>{
//         this.style.color = 'blue';
//         this.style.textTransform = 'upperCase';
//         this.style.margin = 'auto';
//     }, 2000)
// })





 async function toBeWithinRange(received, ceiling) {
      let ceilingA = ceiling -5;
      let ceilingB = ceiling + 5;
      const pass = await received >= ceilingA && received <= ceilingB;
      console.log(pass)
      
      if (pass) {
        console.log( `Полученное значение ${received} в пределах диапазона от ${ceilingA} до ${ceilingB} с учетом погрешности`)
            
        }
       else {
        
          console.log( `Полученное значение ${received} за пределами диапазона от ${ceilingA} до ${ceilingB} с учетом погрешности`)
            
          
        }
    
    };


  
   

   
   console.log(toBeWithinRange(140, 100));
  
