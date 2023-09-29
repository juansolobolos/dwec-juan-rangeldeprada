"use strict";
const prompt = require('prompt-sync')();




function persona (nombre, dni, sexo, edad, peso, altura){
    this.nombre = nombre;
    this.dni = dni;
    this. sexo = sexo;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura
}

function calcularIMC(peso, altura){
    let imc = peso/(altura^2);
    switch(imc){
        case '<20': return -1;
        case '>= 2 && <= 25': return 0;
        case '>25': return 1;
    }
}



