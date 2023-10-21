"use strict";
const campoTexto = document.getElementById("entradaTexto");
const campoNumero = document.getElementById("entradaNumero");

window.addEventListener("load", () => {
    campoTexto.addEventListener("focusout", () => {
        let valor = campoTexto.value.trim();
        if(valor === ""){
            campoTexto.style.backgroundColor = "red";
        }else{
            campoTexto.style.backgroundColor = "white";
        }
    });

    campoNumero.addEventListener("focusout", () => {
        if (campoNumero.value%2==0){
            campoNumero.style.backgroundColor = "white";
        }else{
            campoNumero.style.backgroundColor = "red";
        }
    });


})