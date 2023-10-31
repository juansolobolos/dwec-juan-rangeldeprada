//--------------------------------------------------------------
// Funciones para crear cuadros de diálogo.
//--------------------------------------------------------------

export { mostrarMensaje, mostrarPreguntaSiNo };

/**
 * Muestra un cuadro de dialogo con un mensaje
 * 
 * @param {} mensaje 
 */
function mostrarMensaje(mensaje) {
    // Inyecta el Código HTML en la página
    if(!$('#modalMensaje').length) {
        $('body').append(
            $('<div>').load(
        
                // URL de la plantilla
                URL_COMPONENTE_PLANTILLLA("dialogo"),
    
                // Función callback que se invoca cuando finaliza la carga de la plantilla
                () => {
                    _mostrarMensaje(mensaje);       
                }
            )
        );    
    } else {
        // Mostrar el mensaje
        _mostrarMensaje(mensaje);
    }

    function _mostrarMensaje(mensaje) {
        $('#modalMensaje .modal-body').text(mensaje);

        // Muestra la ventana modal
        $('#modalMensaje').modal('show');
    }
}

/**
 * Muestra un cuadro de diálogo que pide confirmación para llevar a cabo una acción
 * 
 * @param {*} texto 
 * @param {*} onSi Callback a invocar en caso de que se pulse en el si
 */
function mostrarPreguntaSiNo(mensaje, onSi) {
    
    // Inyecta el Código HTML en la página
    if(!$('#modalSiNo').length) {
        $('body').append(
            $('<div>').load(
        
                // URL de la plantilla
                URL_COMPONENTE_PLANTILLLA("dialogo"),
    
                // Función callback que se invoca cuando finaliza la carga de la plantilla
                () => {
                    _mostrarPreguntaSiNo(mensaje, onSi);       
                }
            )
        );    
    } else {
        // Mostrar el mensaje
        _mostrarPreguntaSiNo(mensaje, onSi);
    }

    function _mostrarPreguntaSiNo(mensaje, onSi) {
        // Asigna el texto a mostrar         
        $('#modalSiNo .modal-body').text(mensaje);

        // Configuramos el botón aceptar
        $('#modalSiNo [name=botonAceptar]').on('click', () => {

            // Llamar a la función
            onSi();

            // Desactivamos el gestor de evento
            $('#modalSiNo [name=botonAceptar]').off('click');
            
            // Oculta el cuadro de dialogo
            $('#modalSiNo').modal('hide');    
        });

        // Muestra la ventana modal
        $('#modalSiNo').modal('show');
    }
}