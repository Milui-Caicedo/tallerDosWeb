window.onload = function(){
    var tl = new TimelineLite();

    /*var aw = document.querySelector(".awards p");  
    tl.add(TweenMax.from(aw, 0.5, {opacity:0, y:200, scale:0, ease:Bounce.easeOut}));

    var aww = document.querySelector(".awards p");  
    tl.add(TweenMax.to(aw, 0.5, {opacity:0, delay:0.4}));*/

    // animaion del logo
    //var logo = document.querySelector(".logo-img");
    //tl.add(TweenMax.from(logo, 2 ,{opacity:0, scale:0, ease:Bounce.easeOut}))

    //console.log(logo);
    //TweenLite.to(logo, 2, {bezier:[{left:100, top:50}, {left:100, top:0}, {left:200, top:150}], ease:Power1.easeInOut});
    
    //vamos si funciona la transicion de los productos XD
    var aw1 = document.querySelector(".aw1-img");  
    tl.add(TweenMax.from(aw1, 2, {opacity:0, y:200, scale:0, ease:Bounce.easeOut}));

    var aw2 = document.querySelector(".aw2-img");  
    tl.add(TweenMax.from(aw2, 2, {opacity:0, y:200, scale:0, ease:Bounce.easeOut}));

    var aw3 = document.querySelector(".aw3-img");  
    tl.add(TweenMax.from(aw3,2, {opacity:0, y:200, scale:0, ease:Bounce.easeOut}));

    /*var general = document.querySelector(".logo-img");
    tl.add(TweenMax.to(general, 0.5, {opacity:0, delay:0.4}))*/


    //desaparecer la animacion

    /*var g1 = document.querySelector(".aw1-img");
    tl.add(TweenMax.to(g1, 0.5, {opacity:0, delay:0.3}))

    var g2 = document.querySelector(".aw2-img");
    tl.add(TweenMax.to(g2, 0.5, {opacity:0, delay:0.2}))

    var g3 = document.querySelector(".aw3-img");
    tl.add(TweenMax.to(g3, 0.5, {opacity:0, delay:0.1}))*/
    
    

}
