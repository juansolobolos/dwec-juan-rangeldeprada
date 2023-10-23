//servicio de contactos
//Permite trabajar con el recurso contactos
import * as entorno from "/entorno.mjs"
import * as http from "/js/biblioteca/http.mjs";

export{
    getTodos,
    buscarContactos
};

const URL_CONTACTOS=`${URL_BASE}/contactos`;
/**
 * 
 * @param {*} onOk 
 * @param {*} onError 
 * @param {*} pagina 
 */

function getTodos(onOk, onError, pagina, registrosPorPagina = entorno.REGISTROS_POR_PAGINA){

    //llama a descargar todos los contactos paginados
    http.get(url, onOk, onError, pagina, registrosPorPagina);
}


function buscarContactos(filtro, onOk, onError, pagina, registrosPorPagina = entorno.REGISTROS_POR_PAGINA){

    const url = `${URL_CONTACTOS}?q=${filtro}`;

    //llama a descargar todos los contactos paginados
    http.get(url, onOk, onError, pagina, registrosPorPagina);


}

// Estilo Angular
//Un metodo por consulta
