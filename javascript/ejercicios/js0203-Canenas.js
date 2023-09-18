"use strict";
const prompt = require('prompt-sync')();

let cadena ='';
let frase ='';

while(cadena !== 'cancelar'){
    frase = frase + cadena;
    cadena = prompt('escriba aqui: ') + '-'
    
} 

console.log(frase);