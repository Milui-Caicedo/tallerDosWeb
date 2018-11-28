
    //vamos si funciona la transicion de los productos XD
    var pro = document.getElementsByClassName("productos");
    TweenLite.from(pro, 3 ,{opacity:0, y:50});

// animaion del logo
    var logo = document.querySelector("#logo");
    TweenLite.from(logo, 1, {y:-50});