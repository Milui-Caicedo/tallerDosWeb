//let tl = new TimelineLite();
    window.onload = function(){
        var tl = new TimelineLite();

        // animaion del logo
        var logo = document.querySelector(".img-landing");
        tl.add(TweenLite.from(logo, 1 ,{opacity:0, y:-50}))
        //console.log(logo);
        //TweenLite.to(logo, 2, {bezier:[{left:100, top:50}, {left:100, top:0}, {left:200, top:150}], ease:Power1.easeInOut});
        
        //vamos si funciona la transicion de los productos XD
        var pro = document.querySelector(".productos");
        if(pro != null){
        tl.add(TweenLite.from(pro, 1, {opacity:0, y:50}));}
        //tl.add(TweenLite.to(pro, 3 ,{opacity:0, y:50}));
        //TweenLite.to(pro, 3 ,{opacity:0, y:50});

        var cartitem = document.querySelectorAll('.buyed');
        if(cartitem != null){
            //tl.add(stagger(cartitem,2,{opacity:0, x:-100}));
            tl.add(TweenLite.from(cartitem,1,{opacity:0, x:-100}));
        }
    
    }
    