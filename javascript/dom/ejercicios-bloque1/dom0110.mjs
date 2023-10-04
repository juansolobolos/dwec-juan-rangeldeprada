/* "use strict";
const campoTexto = document.getElementById("entradaTexto");
const campoNumero = document.getElementById("entradaNumero");

window.addEventListener("load", () => {
    campoTexto.addEventListener("blur", () => {
        let valor = campoTexto.value.trim();
        if(valor === ""){
            campoTexto.style.backgroundColor = "red";
        }else{
            campoTexto.style.backgroundColor = "white";
        }
    });

    campoNumero.addEventListener("change", () => {
        if (campoNumero.value%2==0){
            campoNumero.style.backgroundColor = "white";
        }else{
            campoNumero.style.backgroundColor = "red";
        }
    });


}) */


const validaciones{
    entradaTexto : ,
    entradaNumero : 
}

window.addEventListener("load", () => {

    document.querySelector("form").addEventListener("focusout", (evento) =>{
        
        const input = evento.tager;
        if (input.className.includes("Texto")){
            
        } else if(input.className.includes("Numero")){
            if(validarNumero(input.value))
        }
    });
});

function mostrarError(){

}

function limpiarError(){

}

function validarNumero(valor){
    return !isNaN(valor);
}