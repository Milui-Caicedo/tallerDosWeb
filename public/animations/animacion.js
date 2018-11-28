//let tl = new TimelineLite();

//vamos si funciona la transicion de los productos XD
    window.onload = function(){
        var pro = document.querySelector(".productos");
        TweenLite.from(pro, 2, {opacity:0, y:50});
        //tl.add(TweenLite.to(pro, 3 ,{opacity:0, y:50}));
        //console.log(pro);
        //TweenLite.to(pro, 3 ,{opacity:0, y:50});
    
    // animaion del logo
        var logo = document.querySelector(".img-landing");
        //console.log(logo);
        //TweenLite.to(logo, 2, {bezier:[{left:100, top:50}, {left:100, top:0}, {left:200, top:150}], ease:Power1.easeInOut});
    }
    