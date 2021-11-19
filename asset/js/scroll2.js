function barTopCero(menu){
    if(scrollPage == 0){
        menu.classList.toggle('menu--bg-color-show')
    }
}

function barScroll(scrollPage){
    console.log(scrollPage) 
    const menu= document.getElementById('menu');
    // menu1.classList.add('menu--bg-color-show') TODO: Porque no hace falta poner la variable (menu.class--- puede ser leido investigar)
    if(scrollPage >=200){
        menu.classList.add('menu--bg-color-show')
    }else if(scrollPage == 0){
        menu.classList.remove('menu--bg-color-show')
    }
}
let scrollPage= document.documentElement.scrollTop;
addEventListener('scroll',()=>{
    scrollPage= document.documentElement.scrollTop;
    // console.log(scrollPage)
    barScroll(scrollPage)
    
});

addEventListener('click', e=>{
    let elem= e.target;
    const menu= document.getElementById('menu');
    const menuIcon= document.getElementById('menu__icon');
    let menuNav= document.getElementById('menu__nav');
    const drawer= document.getElementById('drawer');
    let menuShow= document.querySelector('.menu__nav--show');

    if(elem == drawer){
        menuNav.classList.remove('menu__nav--show');
        drawer.classList.remove('drawer--show');
        barTopCero(menu);
        document.body.style.overflowY = "";
    }else if(elem == menuIcon){
        
        if(menuShow){
            menuNav.classList.remove('menu__nav--show');
            drawer.classList.remove('drawer--show');
            document.body.style.overflowY = "";
            barTopCero(menu);
        }else{
            menuNav.classList.add('menu__nav--show');
            drawer.classList.add('drawer--show');
            document.body.style.overflowY = "hidden";
            barTopCero(menu);
        }
    }
    
})

