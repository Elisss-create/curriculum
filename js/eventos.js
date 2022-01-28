'use strict'

//eventos del raton
var boton=document.querySelector("#boton");
function cambiaColor(){
    console.log("me haz dado click");
    var bg=boton.style.background;
    if(bg=="green"){
        boton.style.background="red"
    }else{
        boton.style.background="green"
    }
    return true;
}