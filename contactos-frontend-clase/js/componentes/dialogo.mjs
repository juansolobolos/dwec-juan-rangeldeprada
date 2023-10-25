//Funcuiones para crear cuadros de cialogo

export{ mostrarMensaje, mostrarPreguntaSiNo};


/**
 * Muestra el cuadro de dialogo con un mensaje
 * 
 * @param {*} mensaje 
 */
function mostrarMensaje(mensaje){
    //inyecta el codigo html en la pagina
    if (!$('#modalMensaje').length) {
        $('body').append(
            $('<div>').load(
                //URL de la plantilla
                URL_COMPONENTE_PLANTILLA("dialogo"),

                //funcion callback que se invoca cuando finaliza la carga de la flantilla
                () => {
                    _mostrarMensaje(mensaje);
                }
            )
        );
    }else{
        //mostrar el mensaje
        _mostrarMensaje(mensaje);
    }
}

function _mostrarMensaje(mensaje){

    //Muestra la ventana modal
    $('#modalMensaje .modal-Body').text(mensaje);
    $('#modalMensaje').modal('show');
}



/**
 * Muestra y cuadro de dialogo que pide confirmacion para llevar a cabo una accion
 * 
 * @param {*} texto 
 * @param {*} onSi Callback a invocar 
 */
function mostrarPreguntaSiNo(mensaje, onSi){
    //inyecta el codigo html en la pagina
    if (!$('#modalSiNo').length) {
        $('body').append(
            $('<div>').load(
                //URL de la plantilla
                URL_COMPONENTE_PLANTILLA("dialogo"),

                //funcion callback que se invoca cuando finaliza la carga de la flantilla
                () => {
                    _mostrarPreguntaSiNo(mensaje, onSi);
                }
            )
        );
    }else{
        //mostrar el mensaje
        _mostrarPreguntaSiNo(mensaje, onSi);
    }
}

function _mostrarPreguntaSiNo(mensaje, onSi){

    //Asigna el texto a mostrar
    $('#modalSiNo .modal-Body').text(mensaje);

    //Configuramos el boton aceptar
    $('#modalSiNo [name=botonAceptar]').on("click",() => {

        //llamar a la funcion
        onSi();


        //desactivamos el gestor de eventos
        $('#modalSiNo [name=botonAceptar]').off("click")

        //ocultar el cuadro de dialogo
        $('#modalSiNo').modal('hide');
    });

    //muestra la ventana modal
    $('#modalSiNo').modal('show');
}