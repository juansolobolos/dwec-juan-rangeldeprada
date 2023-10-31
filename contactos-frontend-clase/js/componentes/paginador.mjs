
export { renderizar };

let __numeroPagina = 1;
let __onPaginaCambiada = null;

/**
 * Renderiza el componente
 * 
 * @param {*} idElemento Identificador del elemento HTML donde se va a renderizar
 * @param {*} numeroPagina Número de página a mostrar
 * @param {*} onPaginaCambiada Función a la que se le van a notificar los cambios de página
 */
function renderizar(idElemento, numeroPagina, onPaginaCambiada) {

    // Inyecta el Código HTML en la página
    $('#'+idElemento).load(
    
        // URL de la plantilla
        URL_COMPONENTE_PLANTILLLA("paginador"),

        // Función callback que se invoca cuando finaliza la carga de la plantilla
        () => {
            
            // Asigno el número de página
            actualizarNumeroPagina(numeroPagina);
            __numeroPagina = numeroPagina;

            // gestores de eventos
            $('#pgAnterior').on('click', onAnterior);
            $('#pgSiguiente').on('click', onSiguiente);

            // Guardo el gestor de evento
            __onPaginaCambiada = onPaginaCambiada;
        }
    );
}

//---------------------------------------------------------------------------
// Funciones del componente
//---------------------------------------------------------------------------
function actualizarNumeroPagina(numeroPagina) {
    $('#pgPaginaActiva').text(numeroPagina);        
}

//---------------------------------------------------------------------------
// Gestores de eventos
//---------------------------------------------------------------------------
function onAnterior() {
    if(__numeroPagina > 1) {
        
        // Decrementa la página
        __numeroPagina--;

        // Actualiza el html
        actualizarNumeroPagina(__numeroPagina);

        // Invoca al evento
        __onPaginaCambiada(__numeroPagina);
    }
}

function onSiguiente() {
    // Incrementa la página
    __numeroPagina++;

    // Actualiza el html
    actualizarNumeroPagina(__numeroPagina);

    // Invoca al evento
    __onPaginaCambiada(__numeroPagina);
}

