//-----------------------------------------------------------------------------------
// Servicio de contactos
// Permite trabajar con el recurso contactos.
//-----------------------------------------------------------------------------------
// Importa dependencias
import * as entorno from "/entorno.mjs";
import * as http from "/js/biblioteca/http.mjs";

// Exporta 
export {
    getTodos,
    buscarContactos
};

//-----------------------------------------------------------------------------------
// Constantes
//-----------------------------------------------------------------------------------
/**
 * Url para acceder al recurso
 */
const URL_CONTACTOS=`${entorno.URL_BASE}/contactos`;

//-----------------------------------------------------------------------------------
// Implementación
//-----------------------------------------------------------------------------------

/**
 * Descarga todos los contacto
 * 
 * @param {*} url La dirección
 * @param {*} onOk Función a llamar cuando se tengan los datos
 * @param {*} okError 
 * @param {*} pagina 
 */
function getTodos(onOk, onError, pagina, registrosPorPagina = entorno.REGISTROS_POR_PAGINA) {

    // Llama a descargar todos los contactos paginados
    http.get(URL_CONTACTOS, onOk, onError, pagina, registrosPorPagina);

}

/**
 * Permite obtener los contactos hacendo una búsqueda de texto
 * 
 * @param {*} filtro filtro de búsqueda
 * @param {*} onOk 
 * @param {*} onError 
 * @param {*} pagina 
 * @param {*} registrosPorPagina 
 */
function buscarContactos(filtro, onOk, onError, pagina, registrosPorPagina = entorno.REGISTROS_POR_PAGINA) {

    const url = `${URL_CONTACTOS}?q=${filtro}`;

    // Llama a descargar todos los contactos paginados
    http.get(url, onOk, onError, pagina, registrosPorPagina);
}



// Estilo Angular
// Un método por consulta.
// El método recibe los parámetros y los callbacks
// Permitir por parámetros generar la paginación. Debe recibir los parámetros para paginación
// en todas las consultas
// La url no está entre los parámetros

// Tendré el de 
// - todos
// Por letra
// Por nombre
// Por apellidos

