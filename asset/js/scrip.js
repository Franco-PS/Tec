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
// const menuBar= document.getElementById('menu')

// let button= document.getElementById('menu__content');
// button.addEventListener('click',e=>{
//     let t= e.target,
//         menuBarras= document.getElementById('menu__icon'),
//         menuNav= document.getElementById('menu__nav'),
//         navLink= document.getElementById('nav__a'),
//         menuSubNav= document.getElementById('nav__ulSecont');
//     if(t== menuBarras){
//         menuNav.classList.toggle('menu__nav--show')
//         window.addEventListener('scroll',()=>{
//             let menuScroll= menuBar.offsetTop
//             console.log(menuScroll)
//             if(menuScroll === 0){
//                 menuBar.classList.toggle('menu--bg-color-show')
                
//             }
//         })
//     }else if(t== navLink){
//         menuSubNav.classList.toggle('nav__ulSecont--show')
//     }
    
// })

// // let scrollPage= window.scrollY;
// window.addEventListener('scroll', ()=>{
//     let scrollPage= window.scrollY;
//     // console.log(scrollPage)
//     if(scrollPage >= 200){
//         menuBar.classList.add('menu--bg-color-show')
//     }else{menuBar.classList.remove('menu--bg-color-show')}
// })
// if(document.readyState === 'complete'){

// }
// window.addEventListener('resize', ()=>{
//     let widthWeb= document.documentElement.clientWidth
//     console.log('hola como estas')
//     // if(widthWeb <= 768){
//     //     console.log('hola como estas')
//     //     let menuContent= document.documentElement;
//     //     menuContent.addEventListener('click',e =>{
//     //         console.log(window.onresize = e.target)
//     //     })
//     // }

// })
const menu= document.getElementById('menu');
function bgw(datoClick1,datoScroll2){
   if(datoClick1==true || datoScroll2==true){
       menu.classList.add('menu--bg-color-show')
   }else if(datoClick1==false && document.documentElement.scrollTop>=200){
    // no hacer nada
   }else{
    console.log('oculta barra')
    menu.classList.remove('menu--bg-color-show')
   }
}

// function cerarBarra(barra){
//     let barra= elem.offsetParent.id;
//     // let subBarra= elem.offsetParent.id;

// }

window.addEventListener('click',e=>{
    let elem= e.target
    console.log(elem);

    let menuIcon= document.getElementById('menu__icon');
    let menuNav= document.getElementById('menu__nav');

    let showMenu= menuNav.classList.contains('menu__nav--show');

    // let barra= elem.offsetParent.id;
    // console.log(barra)
    // if( barra !='menu__nav'){
    //     console.log('submenu')
    // }else if( barra != 'menu' && showMenu){
    //     menuNav.classList.remove('menu__nav--show')
    //     document.body.style.overflowY = "";
    // }
    
    if(elem == menuIcon){
        
        if(showMenu ){
            menuNav.classList.remove('menu__nav--show')
            document.body.style.overflowY = "";
            let datoClick= false;
            bgw(datoClick, "none");
        }else{
            menuNav.classList.add('menu__nav--show')
            document.body.style.overflowY = "hidden";
            let datoClick= true;
            bgw(datoClick, "none");
            
        }
    }
    let subMenuClick= document.getElementById('nav__a');
    let subMenuNav= document.getElementById('nav__ulSecont');
    if(elem == subMenuClick){
        console.log(subMenuNav)
        subMenuNav.classList.toggle('nav__ulSecont--show')
    }
});

window.addEventListener('scroll',()=>{
    let scrollPage= document.documentElement.scrollTop
    if(scrollPage >=200){
        let datoScroll= true;
        bgw("none1", datoScroll);
    }else if(scrollPage == 0 ){
        let datoScroll= false;
        bgw("none1", datoScroll);
    }
});

