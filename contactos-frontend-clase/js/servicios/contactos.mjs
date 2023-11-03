//-----------------------------------------------------------------------------------
// Servicio de contactos
// Permite trabajar con el recurso contactos.
//-----------------------------------------------------------------------------------
// Importa dependencias
import * as http from "/js/biblioteca/http.mjs";

// Exporta 
export {
    getTodos,
    buscarContactos,
    borrarContacto,
    crearContacto,
    actualizarContacto
};

//-----------------------------------------------------------------------------------
// Constantes
//-----------------------------------------------------------------------------------
/**
 * Url para acceder al recurso
 */
const URL_CONTACTOS=`${URL_BASE}/contactos`;

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
function getTodos(onOk, onError, pagina, registrosPorPagina = REGISTROS_POR_PAGINA) {

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
function buscarContactos(filtro, onOk, onError, pagina, registrosPorPagina = REGISTROS_POR_PAGINA) {

    const url = `${URL_CONTACTOS}?q=${filtro}`;

    // Llama a descargar todos los contactos paginados
    http.get(url, onOk, onError, pagina, registrosPorPagina);
}

/**
 * Elim,ina el contacto pasado como argumento
 * 
 * @param {*} id 
 * @param {*} onOk 
 * @param {*} onError 
 */
function borrarContacto(id, onOk, onError) {

    // Monta la URL al recurso
    const url = `${URL_CONTACTOS}/${id}`;

    // Llama a descargar todos los contactos paginados
    http.del(url, onOk, onError);
}


/** 
 * Crea un contando
 * 
 * @param {*} objeto 
 * @param {*} onOk 
 * @param {*} onError 
 */
function crearContacto(objeto, onOk, onError) {

    // Monta la URL al recurso
    const url = URL_CONTACTOS;

    // Crea un contacto
    http.post(url, objeto, onOk, onError);
}


/** MODIFICADO
 * Actualiza el contacto pasado como argumento
 * 
 * @param {*} objeto 
 * @param {*} onOk 
 * @param {*} onError 
 */
function actualizarContacto(objeto, onOk, onError) {

    // Monta la URL al recurso
    const url = `${URL_CONTACTOS}/${objeto.id}`;

    // Crea un contacto
    http.put(url, objeto, onOk, onError);
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

// TODO Gestor de errores por defecto