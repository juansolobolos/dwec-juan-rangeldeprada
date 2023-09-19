//realiza un script que muestre la posicion de la primera voca de un texto introducido por teclado
"use strict"
const prompt = require('prompt-sync')();

let texto = prompt('texto = ');
let encontrado = false;

for(let n = 0; n < texto.length && encontrado == false;n++){
    let ch = texto[n].toLowerCase;
    /* switch(ch){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(n+1);
            encontrado = true;
            break;
    } */

    /* if(Vocales.includes(ch)){
        console.log(n+1);
        encontrado = true;
    } */

    /* if(ch.match("^[aeiou]{1}$")){
        console.log(n+1);
        encontrado = true;
    } */
}