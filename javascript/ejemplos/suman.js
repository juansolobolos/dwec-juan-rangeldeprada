const prompt = require('prompt-sync')();

const numeron = Number(prompt('cuantos numeros a sumar: '));
sumado = 0;
for(n = 0; n < numeron; n++){
    x = Number(prompt('Introduce un numero: '));
    sumado += x;
}

console.log(sumado);