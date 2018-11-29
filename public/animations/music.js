

var disco = document.getElementById("disk");

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
    sound.pause();
    soundtwo.pause(); 
    soundthree.play();
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
        bg.style.background = "#6D96FF";
        disco.style.animation = "sound 1s linear 0s infinite";
    }else{
        on.setAttribute("status","on");
        astro.setAttribute("src","img/sun.gif");
        for(var i =0; i< 30;i++){
            var estrella = document.querySelectorAll('.star')[i]; 
            estrella.style.display = "none";  
        }
        bg.style.background = "#0CC3E8";
        disco.style.animation = "none";
        stop();
    };

function stop(){
    sound.pause();
    soundtwo.pause();
    soundthree.pause();
}

    
});


   

