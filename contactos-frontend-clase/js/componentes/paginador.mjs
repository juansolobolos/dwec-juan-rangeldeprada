//aqui vamos a meter el codigo necesario para inicializar un paginador
//si hay plantilla html la vamos a meter como un html junto al codigo js ma que nada por claridad

//Para obtener los nombres de los recursos vamos a basarnos en App.js
//tentra una funcion para obtener el nombre de un componente, servicio, etc
export{renderizar};

let __onPaginaCambiada = null;
let __numeroPagina = 1;

/**
 * 
 * @param {*} idElemento identificador del elemento HTML donde se va a renderizar
 * @param {*} numeroPagina Numero de pagina a mostrar
 * @param {*} onPaginaCambiada funcion a la que se le van a notificar los cambios de pagina
 */
function renderizar(idElemento, numeroPagina, onPaginaCambiada){

    //Inyecta el codigo html
    $('#'+idElemento).load(
   
   //URL de la plantilla
    URL_COMPONENTE_PLANTILLA("paginador"),

    //funcion callback que se invoca cuando finaliza la carga de la flantilla
    () =>{
        //asigno el numero de pagina
        actualizarNumeroPagina(numeroPagina);
        __numeroPagina = numeroPagina;

        //gestores de evento
        $('#pgAnterior').on('click', onAnterior);
        $('#pgSiguiente').on('click', onSiguiente);

        //guardo el gestor de evento
        __onPaginaCambiada = onPaginaCambiada;

    });
}


///////////////////////////Funciones del componente///////////////////////////////////////
function actualizarNumeroPagina(numeroPagina){
    $('#pgPaginaActiva').text(numeroPagina);
}

//////////////////////////Gestores de evdentos///////////////////////////////////////////////////
function onAnterior(){
    if(__numeroPagina > 1){
        //decrementa la pagina
        __numeroPagina--;
        //actualiza el html
        actualizarNumeroPagina(__numeroPagina);
        //invoca el envento
        __onPaginaCambiada(__numeroPagina);
    }
}

function onSiguiente(){
    //Incrementa la página
    __numeroPagina++

    // Actualiza el html
    actualizarNumeroPagina(__numeroPagina);

    // Invoca al evento
    __onPaginaCambiada(__numeroPagina++);
}
