"use strict";

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

import { factorial } from './modulo-mates.mjs';

const numero = prompt('Introduce un numero: ');


const resultado = factorial(numero);

console.log('El factorial de '+ numero + ' es ' + resultado);