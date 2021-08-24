let button= document.getElementById('menu__icon');
button.addEventListener('click',()=>{
    let barra= document.getElementById('menu__nav')
    barra.classList.toggle('menu__nav--show')
})
let button2= document.getElementById('nav__a');
button2.addEventListener('click',()=>{
    let barra2= document.getElementById('nav__ulSecont')
    barra2.classList.toggle('nav__ulSecont--show')
})