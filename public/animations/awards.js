window.onload = function(){
    var tl = new TimelineLite();

    // animaion del logo
    var logo = document.querySelector(".logo-img");
    tl.add(TweenMax.from(logo, 0.5 ,{opacity:0, scale:0, ease:Bounce.easeOut}))
    //console.log(logo);
    //TweenLite.to(logo, 2, {bezier:[{left:100, top:50}, {left:100, top:0}, {left:200, top:150}], ease:Power1.easeInOut});
    
    //vamos si funciona la transicion de los productos XD
    var aw1 = document.querySelector(".aw1-img");  
    tl.add(TweenMax.staggerFrom(aw1, 0.5, {opacity:0, y:200, rotation:360, scale:2, delay:0.5}, 0.2));
    //awards var =[];
    //tl.add(TweenLite.to(pro, 3 ,{opacity:0, y:50}));
    //TweenLite.to(pro, 3 ,{opacity:0, y:50});

    var general = document.querySelector('.logo-img');
        tl.add(TweenMax.to(general,0.5,{opacity:0, delay:2, onComplete:complete}))
    

}
