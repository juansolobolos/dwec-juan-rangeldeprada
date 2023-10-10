"use strict";
/* 
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

window.addEventListener("load", () => {

    document.querySelectorAll("form").addEventListener(
        "focusout", (evento) => {
            
            // Obtengo el campo a validar
            const input = evento.target;

            // Obtengo la validación
            const validacion = input.attributes['validacion'].value;

            // Realiza la validación
            if(validacion && validarCampo(validacion, input)) {
                limpiarError(input);
            } else {
                mostrarError(input);
            }    
        }
    );

});



//--------------------------------------------------------------------
// Funciones de GUI
//--------------------------------------------------------------------

function mostrarError(campo) {
    campo.style.backgroundColor = "red";
}

function limpiarError(campo) {
    campo.style.backgroundColor = "white";
}

//--------------------------------------------------------------------
// Funciones de validación
//--------------------------------------------------------------------
function validarCampo(nombreValidacion, campo) {

    // Obtengo el nombre de la función que voy a utilizar para validar
    const nombreFuncionValidacion = "validar"+nombreValidacion;
    const funcionValidacion = eval(nombreFuncionValidacion);

    // Llama a la función para realizar la validación    
    return funcionValidacion(campo.value);
}

//--------------------------------------------------------------------
// Validaciones
//--------------------------------------------------------------------
function validarNumero(valor) {
    return !isNaN(valor);
}

function validarPar(valor) {
    return valor % 2 == 0;
}

function validarNombre(valor) {
    if(valor.lenght > 0){
        return true;
    }else{
        return false;
    }
}