"use strict";
window.addEventListener("load", inicializarEventos);
function inicializarEventos(){

    const boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", evento => alert("CLICK!!"));
    boton1.addEventListener("mousedown", evento => alert("MOUSEDOWN!!"));
    boton1.addEventListener("mouseup", evento => alert("MOUSEUP!!"));
}
