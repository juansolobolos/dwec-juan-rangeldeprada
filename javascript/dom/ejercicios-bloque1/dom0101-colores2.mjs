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

    switch(id){
        case 'rojo':
            areaTexto.style.backgroundColor = "red";
            break;
        case 'azul':
            areaTexto.style.backgroundColor = "blue";
            break;
        case 'verde':
            areaTexto.style.backgroundColor = "green";
            break;
    }

}