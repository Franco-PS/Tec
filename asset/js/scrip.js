// let button= document.getElementById('menu__icon');
// button.addEventListener('click',()=>{
//     let barra= document.getElementById('menu__nav')
//     barra.classList.toggle('menu__nav--show')
// })
// let button2= document.getElementById('nav__a');
// button2.addEventListener('click',()=>{
//     let barra2= document.getElementById('nav__ulSecont')
//     barra2.classList.toggle('nav__ulSecont--show')
// })

let button= document.getElementById('menu__content');
button.addEventListener('click',e=>{
    let t= e.target,
        menuBarras= document.getElementById('menu__icon'),
        menuNav= document.getElementById('menu__nav'),
        navLink= document.getElementById('nav__a'),
        menuSubNav= document.getElementById('nav__ulSecont');
    if(t== menuBarras){
        menuNav.classList.toggle('menu__nav--show')
    }else if(t== navLink){
        menuSubNav.classList.toggle('nav__ulSecont--show')
    }
    
})