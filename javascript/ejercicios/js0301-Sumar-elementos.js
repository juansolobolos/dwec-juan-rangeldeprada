"use strict";
const prompt = require('prompt-sync')();
let entrada;
let lista = new Array();
let longitud = 0;

do{
    do{
        entrada = prompt("Introduzca un numero: ")
    }while(entrada!= "")
    if(entrada != ""){
        lista.push(entrada);
        longitud++;
    }
}while(entrada != "")

console.log("La lista mide: "+ longitud);
for(let n=0;n<longitud;n++){
    console.log(lista[n]);
}

let invertido = lista.reverse
for(let n=0;n<longitud;n++){
    console.log(invertido[n]);
}

let suma;
for(let n=0;n<longitud;n++){
    suma = suma + lista[n];
}
console.log(suma);
