"use strict";
const prompt = require('prompt-sync')();

function sumaNumeros(){
    let result = 0;
    for(let n = 0; n < arguments.lenth; n++){
        result = result + arguments[n];
    }
    return result;
}

function multiplicaNumeros(){
    let result = 0;
    for(let n = 0; n < arguments.lenth; n++){
        result = result * arguments[n];
    }
    return result;
}

function minimo()
{
    let result = arguments[0]
    for(let n = 1; n < arguments.lenth; n++){
        if(arguments[n] < result){
            result = arguments[n];
        }
    }
    return result;
}

function maximo(){
    let result = arguments[0]
    for(let n = 1; n < arguments.lenth; n++){
        if(arguments[n] > result){
            result = arguments[n];
        }
    }
    return result;
}