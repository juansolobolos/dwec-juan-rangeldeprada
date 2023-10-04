"use strict";

const parrafo = document.getElementById("parrafo");


//inicialización
window.addEventListener("load", () => {
    document.getElementById("botones").addEventListener("click", botonClick);
});

function botonClick(evento){
    const boton = evento.target;

    parrafo.innerText += boton.innerText;

}