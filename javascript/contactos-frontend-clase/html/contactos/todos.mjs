//importar¡ dependencias

import * as paginador from "/js/componentes/paginador.mjs";
import * as contactos from "/js/servicios/contactos.mjs";

//Exports
export{init, onPaginaCambiada};

////////////////Variables////////////////////////7






const plantilla = {
    '<>': 'tr', 'html': [
        {'<>': 'th', 'scope': 'row', 'html':'${id'},
        {'<>': 'td', 'html': '${nombre'},
        {'<>': 'td', 'html': '${apellidos'}
    ]
};


let filtroBusqueda = "";

function init(){

    //muestra todos los contactos
    cargarContactos();

    document.getElementById("btBuscar").addEventListener("click", onBuscarClick);

    paginador.renderizar("paginador", 1);
}

function onBuscarClick(){
    //obtengo la cadena de texto en el campo
    const iFiltro = document.getElementById("iFiltro");
    filtroBusqueda = iFiltro.value;

    cargarContactos();
}



function onPaginaCambiada(numeorPagina){
    cargarContactos(numeorPagina);
}


function cargarContactos(numeroPagina = 1){
    if(filtroBusqueda.length == 0){
        contactos.getTodos(
            contactos => mostrarContactos(contactos),
            (error) => { },
            numeroPagina
        );
    }else{
        contactos.buscarContactos(
            filtroBusqueda,
            contactos => mostrarContactos(contactos),
            (error) => { },
            numeroPagina
        );
    }
}

function mostrarContactos(contactos){
    $("#tablaContactos").empty();
    $("#tablaContactos").json2html(contactos, plantilla);
}