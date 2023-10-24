"use strict";

//----------------------------------------------------------------------------
// Constantes
//----------------------------------------------------------------------------
const PAGINAS_ROOT = "paginas";
const SERVICIOS_ROOT = "js/servicios";
const COMPONENTES_ROOT = "js/componentes";

//----------------------------------------------------------------------------
// Funciones para calcular los nombres de los recursos
//----------------------------------------------------------------------------
function URL_PAGINA(nombre) {
    return `${PAGINAS_ROOT}/${nombre}.html`
}

function URL_SERVICIO(nombre) {
    return `${SERVICIOS_ROOT}/${nombre}.mjs`
}

function URL_COMPONENTE_JS(nombre) {
    return `${COMPONENTES_ROOT}/${nombre}.mjs`
}

function URL_COMPONENTE_PLANTILLLA(nombre) {
    return `${COMPONENTES_ROOT}/${nombre}.html`
}

//----------------------------------------------------------------------------
// Funciones de navegación por la aplicación
//----------------------------------------------------------------------------

/**
 * Pasado el nombre de una página la carga en el área de trabajo
 * 
 * @param {} nombre nombre de la página a cargar sin extensión
 */
function appCargar(nombre) {
    $("#workspace").load(URL_PAGINA(nombre));
}
