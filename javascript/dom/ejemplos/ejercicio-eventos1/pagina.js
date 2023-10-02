"use strict";
window.addEventListener("load", inicializarEventos);
function inicializarEventos(){
    let parrafo = document.getElementById("parrafo");
    parrafo.addEventListener("mouseout", event =>{
        event.target.style.color = "purple";
    });
}
