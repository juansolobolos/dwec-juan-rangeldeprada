window.addEventListener("load", () => {
    const helper = document.getElementById("helper");
    
    //Añadimos el metodo de ayuda a nuestros input con el evento focus. Uso focus en vez de focusin por que focus no burbujea
    document.querySelectorAll("input").forEach(element => {
        element.addEventListener("focus", ayuda);
    });
});



////////////Funciones//////////////

//La funcion ayuda identifica el id de el input y devuelve el mensaje que le corresponde a traves del div helper
//A traves de un array asociativo definimos que inputs tendran ayuda. Si no la tienen la funcion lo reconocera como undefined y lo 
//reescribira el div helper en blanco.
function ayuda(evento){
    let entradas = {"nombre":"Introduzca su nombre", "apellidos":"Introduzca sus apellidos", "nif":"Introduzca su DNi"};
    let id = evento.target.id;
    if (entradas[id] != undefined){
        helper.innerText = entradas[id];
    }else{
        helper.innerText = "";
    }
    
}





////////////Version anterior////////////////

/* function ayuda(evento){
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
} */