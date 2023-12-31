window.addEventListener("load", () => {
    const helper = document.getElementById("helper");
    
    //Añadimos el metodo de validar a nuestros input con el evento blur. Uso blur en vez de focusout por que focus no burbujea    
    document.querySelectorAll("input").forEach(element => {
        element.addEventListener("blur", validar);
    });

    document.getElementById("accept").addEventListener("click", enviar);
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
function enviar(){
    //fallo me sirve para validar si se puede mandar el documento
    let fallo = false;
    //recorremos los fallos, la variable gloval que declaramos antes, si hay un campo con error le dara un focus y saldra de el for.
    for (const tipoerror in fallos) {
        if (fallos[tipoerror] === true) {
            fallo = true;
            let campo = document.getElementById(tipoerror);
            campo.focus();
            break;
        }
    }
    //la validacion de contraseña la hago directamente en la funcion enviar
    if(document.getElementById("password1").value != document.getElementById("password2").value){
        fallo = true;
        document.getElementById("password1").focus();
        document.getElementById("password1").style.backgroundColor = "red";
        helper.innerText = "Ambas contraseñas deben ser iguales";
    }
    //si no hay fallo hace el post
    if(fallo == false){
        document.getElementById("miFormulario").submit();
    }
}