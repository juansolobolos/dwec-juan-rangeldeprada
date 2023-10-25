// Funciones realicionadas con el protocolo HTTP

// Exportaciones
export { get,
del
};

/**
 * Método HTTP GET para descargar información paginada de un servidor
 * 
 * @param {*} url URL del recurso incluyendo parámetros 
 * @param {*} onOk En caso de éxito se llama a esta función con el resultado
 * @param {*} onError En caso de error se llama a esta función con información del error
 * @param {*} pagina El número de página. Se empieza por el 1.
 * @param {*} registrosPorPagina Número de registros por página
 */
function get(url, onOk, onError, pagina, registrosPorPagina) {

    // Hay que montar la url incluyendo página y registros por página
    if(pagina) {
        if(!url.includes('?')) url += '?';
        url = `${url}&_page=${pagina}`;
    }

    if(registrosPorPagina) {
        if(!url.includes('?')) url += '?';
        url = `${url}&_limit=${registrosPorPagina}`;
    }

    fetch(url)
    .then(response => response.text())
    .then(texto => {          

        // Datos en formato JSON
        const datos = JSON.parse(texto);      
  
        // Entregamos los datos al invocador
        onOk(datos);
  });      

}

/**
 * 
 * @param {*} url 
 * @param {*} onOk 
 * @param {*} onError 
 */
function del(url, onOk, onError) {
    fetch(
        url,
        {
            method: 'DELETE'
        }
    
    )
    .then(respuesta => onOk());
}