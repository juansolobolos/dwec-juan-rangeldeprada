"use strict";
const prompt = require('prompt-sync')();

let acumulador = 0;


//Funciones Menus:


function mostar_menu(){
    console.log("-- Manu --");
    console.log("s) Sumar ");
    console.log("r) Restar ");
    console.log("q) Salir ");
}



function menu_calculadora(){
    let fin = false;

    
    while(!fin) {
        console.log("Acumulador: " + acumulador);
        mostar_menu();
        let opcion = prompt('Opcion : ');
        let y = 0;

        switch(opcion){
            case '+':
                y = Number(prompt('Operando: '));
                acumulador = sumar(acumulador, y);
                break;
            case '-':
                y = Number(prompt('Operando: '));
                acumulador = restar(acumulador, y);
                break;
            case 'f':
                acumulador = factorial(acumulador);
                break;
            case 'q':
                fin = true;
                break;
        }
    }
}

menu_calculadora();


//Funciones de operaciones:

function sumar(x, y){
    return x + y;
}

function restar(x, y){
    return x - y;
}

function factorial(x){
    if(x == 1){
        return 1;
    }else{
        return x * factorial(x - 1);
    }
}