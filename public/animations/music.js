

var disco = document.querySelector(".disk");

var on = document.getElementById('encendido')
var astro = document.getElementById('solyluna');
var bg = document.querySelector('main');

var sound = document.getElementById("song__one");
function playSongOne(){
    soundtwo.pause();
    soundthree.pause();
    sound.play();
}

var soundtwo = document.getElementById("song__two");
function playSongTwo(){
    sound.pause();
    soundthree.pause();
    soundtwo.play();
}

var soundthree = document.getElementById("song__three");
function playSongThree(){
    if(on.getAttribute("status")=="off"){
    sound.pause();
    soundtwo.pause(); 
    soundthree.play();
    }else{sound.pause();
        soundtwo.pause(); 
        soundthree.pause();};
}

on.addEventListener('click',(e)=>{
    //rotateAnimation(disco,10);
    //console.log("hola");
    if(on.getAttribute("status")=="on"){
        on.setAttribute("status","off");
        astro.setAttribute("src","img/moon.gif");
        for(var i =0; i< 30;i++){
            var estrella = document.querySelectorAll('.star')[i]; 
            estrella.style.display = "inline-block";  
        }
        bg.style.backgroundImage = "url('/img/noche.jpg')";
        disco.style.animation = "sound 1s linear 0s infinite";
    }else{
        on.setAttribute("status","on");
        astro.setAttribute("src","img/sun.gif");
        for(var i =0; i< 30;i++){
            var estrella = document.querySelectorAll('.star')[i]; 
            estrella.style.display = "none";  
        }
        bg.style.backgroundImage = "url('/img/dia.jpg')";
        disco.style.animation = "none";
        sound.pause();
        soundtwo.pause();
        soundthree.pause();
    };
    
});


   

