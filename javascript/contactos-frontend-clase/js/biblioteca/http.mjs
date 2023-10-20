//funciones realcionadas con el protocolo http

export{get};

//metodo http get param descargar informacion de la pagina de un servidor
// url
//onOk En caso de exito se llama a esta funcion con el resultado
//onError En caso de error se llama a esta funcion con informaicon del error
//pagina El numero de pagina. empieza por el 1
//resgistrosPorPagina Numero de eregistros por pagina



function get(url, onOk, onError, pagina, registrosPorPagina){

    if(pagina){
        if(!url.includes('?')) url += '?';
        url = `${url}&_page=${pagina}`;
    }

    if(registrosPorPagina){
        if(!url.includes('?')) url += '?';
        url = `${url}&_limits=${registrosPorPagina}`;
    }


    fetch(url)
    .then(response => response.text())
    .then(datos => {

        //Datos en formato JSON
        const datos = JSON.parse(texto);

        //Entregamos los datos al invocador
        onOk(datos);

    });
}