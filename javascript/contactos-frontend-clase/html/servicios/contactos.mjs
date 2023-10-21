//servicio de contactos
//Permite trabajar con el recurso contactos
import * as entorno from "/entorno.mjs"
import * as http from "/js/biblioteca/http.mjs";

export{getTodos};

const URL_CONTACTOS=`${URL_BASE}/contactos`;
/**
 * 
 * @param {*} onOk 
 * @param {*} onError 
 * @param {*} pagina 
 */
function getTodos(onOk, onError, pagina){

    http.get(URL_CONTACTOS, onOk, onError, pagina, entorno.REGISTROS_POR_PAGINA);


}

// Estilo Angular
//Un metodo por consulta
