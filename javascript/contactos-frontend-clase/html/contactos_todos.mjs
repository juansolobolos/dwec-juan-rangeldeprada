//importar¡ dependencias


import * as contactos from "/js/servicios/contactos.mjs";

//Exports
export{getTodos};

const plantilla = {
    '<>': 'tr', 'html': [
        {'<>': 'th', 'scope': 'row', 'html':'${id'},
        {'<>': 'td', 'html': '${nombre'},
        {'<>': 'td', 'html': '${apellidos'}
    ]
};

//Carga inicial de los datos. cuando garga la pantalla carga en la tabla todos los contactos
contactos.getTodos((contactos)=> mostrarContactos(contactos), 
(error)=>{

});


//implementacion de las busquedas
document.getElementById("btBuscar").addEventListener("click", (evento) => {
    
    //Obtengo la cadena de texto en el campo
    const iFiltro = document.getElementById("iFiltro");
    const filtro = iFiltro.value;
    


    //Descargamos los datos
    fetch('http://localhost:3000/contactos?q=${filtro}&_page=1&_limit=10')
    .then(response => response.text())
    .then(datos => {


        //lsita de contactos
        const contactos =JSON.parse(datos);

        $("#tablaContactos").empty();
        $("#tablaContactos").json2html(contactos, plantilla);
    })

});


function mostrarContactos(contactos){
    $("#tablaContactos").empty();
    $("#tablaContactos").json2html(contactos, plantilla);
}