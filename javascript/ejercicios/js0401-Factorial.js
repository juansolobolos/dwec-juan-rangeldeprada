"use strict";
const prompt = require('prompt-sync')();
let num;
let a = 1;


num=prompt("introduzca un numero para hacer su factorial: ");
for(let n=1; n <= num; n++){
    a = a * n;
}

console.log(a);