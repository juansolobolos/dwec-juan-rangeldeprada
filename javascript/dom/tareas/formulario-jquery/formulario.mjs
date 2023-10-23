"use strict";
$(document).ready( () => {
    const helper = $("#helper");
    
    //Añadimos el metodo de ayuda a nuestros input con el evento focus. Uso focus en vez de focusin por que focus no burbujea
    $("input").on("focus", ayuda);
});

////////////Funciones//////////////

//La funcion ayuda identifica el id de el input y devuelve el mensaje que le corresponde a traves del div helper
//A traves de un array asociativo definimos que inputs tendran ayuda. Si no la tienen la funcion lo reconocera como undefined y lo 
//reescribira el div helper en blanco.
function ayuda(evento){
    let entradas = {"nombre":"Introduzca su nombre", "apellidos":"Introduzca sus apellidos", "nif":"Introduzca su DNi"};
    let id = evento.target.id;
    if (entradas[id] != undefined){
        helper.innerText = entradas[id];
    }else{
        helper.innerText = "";
    }
    
}
