"use strict";

const botonRojo = document.getElementById("rojo");
const botonAzul = document.getElementById("azul");
const botonVerde = document.getElementById("verde");
const areaTexto = document.getElementById("texto");


//inicialización
window.addEventListener("load", () => {
    document.getElementById("principal").addEventListener("click", botonClick);
})

function botonClick(evento){
    let id = evento.target.id;
    areaTexto.style.backgroundColor = evento.target.style.color;
    

}