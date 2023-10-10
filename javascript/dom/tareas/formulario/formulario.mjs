"use strict";
window.addEventListener("load", () => {
    const helper = document.getElementById("helper");
    document.querySelectorAll("input").forEach(element => {
        element.addEventListener("focusin", ayuda);
        element.addEventListener("focusout", () =>{
            helper.innerText = ("");
        });
    });

    /* document.querySelectorAll("input").addEventListener("focusin", ayuda);
    document.querySelectorAll("input").addEventListener("blur", () =>{
        helper.innerText = ("");
    }); */

});

function ayuda(evento){
    let id = evento.target.id;
    switch(id){
        case 'nombre':
            helper.innerText = "Introduzca su nombre";
            break;
        case 'apellidos':
            helper.innerText = "Introduzca sus apellidos";
            break;
        case 'nif':
            helper.innerText = "Introduzca su DNi";
            break;
        case 'email':
            helper.innerText = "Introduzca su dirección correo electrónico";
            break;
        case 'password1':
            helper.innerText = "Añada una contraseña segura";
            break;
        case 'password2':
            helper.innerText = "Repita la contraseña introducida";
            break;
    }
}