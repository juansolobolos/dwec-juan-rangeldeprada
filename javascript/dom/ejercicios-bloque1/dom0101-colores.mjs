"use strict";

const botonRojo = document.getElementById("rojo");
const botonAzul = document.getElementById("azul");
const botonVerde = document.getElementById("verde");
const areaTexto = document.getElementById("texto");


//inicialización
window.addEventListener("load", () => {
    botonRojo.addEventListener("click", () => {
        areaTexto.style.backgroundColor = "red";
    });

    botonAzul.addEventListener("click", () => {
        areaTexto.style.backgroundColor = "blue";
    });

    botonVerde.addEventListener("click", () => {
        areaTexto.style.backgroundColor = "green";
    });
})