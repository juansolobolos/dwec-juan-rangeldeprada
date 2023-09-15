const prompt = require('prompt-sync')();

const numeron = Number(prompt('cuantos numeros a sumar: '));
sumado = 0;
for(n = 1; n < numeron+1; n++){
    x = Number(prompt('Introduce un numero: '));
    sumado = sumado + x;
}

console.log(sumado);