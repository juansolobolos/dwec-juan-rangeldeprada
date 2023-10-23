"use strict";
$(document).ready( () => {
    const helper = $("#helper");
    
    //Añadimos el metodo de validar a nuestros input con el evento blur. Uso blur en vez de focusout por que focus no burbujea    
    $("input").on("blur", validar);
    $("#accept").on("click", enviar);
});

////////variables globales///////

//almacenamos de manera gloval si existe algun fallo en un campo
let fallos = {
    "nombre":false,
    "apellidos":false,
    "nif":false,
    "email":false,
};



////////////Funciones//////////////

function validar(evento){
    //En entradas guardamos un array asociativo con los campos que queremos validar y el mensaje de error
    let entradas = {"nombre":"El nombre no debe esta vacio", "apellidos":"El campo apellidos no debe estar vacio", 
    "nif":"Debe introducir un DNI valido", "email":"Debe introducir un email valido"};
    let id = evento.target.id;
    //recogemos el valor del campo con el atributo value
    let contenido = evento.target.value;
    //fallo me sirve para aplicar los estilos al final de la funcion.
    let fallo = false;
    //Este switch contiene las validaciones de todos los campos que queremos validar
    switch(id){
        case "nombre":
            if(contenido.trim() == ""){
                fallo = true;
                fallos["nombre"] = true;
            }else{
                fallo = false;
                fallos["nombre"] = false;
            }
            break;
        case "apellidos":
            if(contenido.trim() == ""){
                fallo = true;
                fallos["apellidos"] = true;
            }else{
                fallo = false;
                fallos["apellidos"] = false;
            }
            break;
        case "nif":
            let patronDNI = /^[0-9]{8}[A-Za-z]$/;
            if(patronDNI.test(contenido)){
                fallo = false;
                fallos["nif"] = false;
            }else{
                fallo = true;
                fallos["nif"] = true;
            }
            break;
        case "email":
            if(contenido.includes("@")){
                fallo = false;
                fallos["email"] = false;
            }else{
                fallo = true;
                fallos["email"] = true;
            }
            break;
    }
    //si alguna de las validaciones ha dado un error cambiamos el div y el color de fondo. 
    //si no se aplica fondo blanco y se vacia el div
    if(fallo == true){
        helper.innerText = entradas[id];
        evento.target.style.backgroundColor = "red";
    }else{
        helper.innerText = "";
        evento.target.style.backgroundColor = "white";
    }  
}

//La funcion enviar comprobara la existencia de errores en el formulario y si no existen lo mandara 
function enviar() {
    
    // fallo me sirve para validar si se puede mandar el formulario
    let fallo = false;

    // recorremos los fallos, la variable global que declaramos antes, si hay un campo con error le dará un focus y saldrá del bucle.
    for (const tipoerror in fallos) {
        if (fallos[tipoerror] === true) {
            fallo = true;
            let campo = $(tipoerror);
            campo.focus();
            break;
        }
    }

    // La validación de contraseñas la hago directamente en la función enviar
    if ($("#password1").val() !== $("#password2").val()) {
        fallo = true;
        $("#password1").focus();
        $("#password1").css("background-color", "red");
        $("#helper").text("Ambas contraseñas deben ser iguales");
    }

    // Si no hay fallo, hace el envío del formulario
    if (!fallo) {
        $("#miFormulario").submit();
    }
}
