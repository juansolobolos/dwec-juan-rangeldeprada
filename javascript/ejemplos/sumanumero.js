/**Carga ek modulo. Funcion de node.js para cargar modulos */
const prompt = require('prompt-sync')();

/**Lee un par de numeros */
const numero1 = Number(prompt('numero 1 = '));
const numero2 = Number(prompt('numero 2 = '));

/**Muestra el resultado */
console.log(numero1+numero2);

/**Bucle for */
for(n = 1; n < 10; n++){
    console.log(n);
}