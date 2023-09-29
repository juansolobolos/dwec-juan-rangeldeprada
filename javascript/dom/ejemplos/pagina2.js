"use strict";

/* 
const divHola = document.getElementById("hola");
console.log(divHola.innerHTML);
divHola.innerHTML = '<input type="text" value="10"></input>'; */


const texto3 = document.getElementById("texto3");
texto3.parentNode.removeChild(texto3);

const input = document.getElementsByName("nombre")[0];
input.disabled = true;
