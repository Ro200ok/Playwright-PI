const header = document.querySelector('.header');
console.log(header);

header.addEventListener('click', function() {
    this.style.color = 'red';
    this.style.fontWeight = 'bold';
    this.style.marginTop = '200px';

    setTimeout(() =>{
        this.style.color = 'blue';
        this.style.textTransform = 'upperCase';
    }, 2000)
})