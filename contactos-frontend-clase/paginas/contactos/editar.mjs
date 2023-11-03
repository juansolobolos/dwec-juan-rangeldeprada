
// Importa los servicios requeridos
import * as contactos from "/js/servicios/contactos.mjs";
import * as formulario from "/js/servicios/formulario.mjs";

// MODIFICADO
export {
    crearFormularioAltaContacto,
    crearFormularioModificacionContacto,
    enviarFormulario
}

// MODIFICADO
// FIXME Creando una clase o tratando el DOM de otra forma no necesitaríamos estas variables
// De todos modos no es problema, ya que solo podemos tener un cuadro de diálogo de contactos al mismo tiempo.
// Objeto donde se va a guardar el objeto del contacto que se va a utilizar para 
// inicializar el formulario
let editando = false;
let contacto = null;
let onAlta = null;
let onModificacion = null;

// MODIFICADO
/**
 * Crea e inicializa el formulario de alta de contacto. 
 */
function crearFormularioAltaContacto(onAltaCallback) {
    
    // Si vamos a dar de alta un contacto, no necesitamos datos
    contacto = null;
    onAlta = onAltaCallback;
    onModificacion = null;
    editando = false;

    // Retorna la función que se va a utilizar para renderizar el formulario
    return renderizarFormularioContacto;
}

// MODIFICADO
function crearFormularioModificacionContacto(c, onModificacionCallback) {

    // Guarda los datos para inicializar los campos posteriormente
    contacto = c;
    onAlta = null;
    onModificacion = onModificacionCallback;
    editando = true;

    // Retorna la función que debe ser utilizada para renderizar el formulario
    return renderizarFormularioContacto;
}


// MODIFICADO
/**
 * Renderiza el formulario pasado el ID
 */
function renderizarFormularioContacto(id) {
    
    // Inyecta el Código HTML en la página
    if(!$('#frmcontacto').length) {
        $('#'+id).append(
            $('<div>').load(
        
                // URL de la plantilla
                URL_PAGINA("contactos/editar"),
    
                // Función callback que se invoca cuando finaliza la carga de la plantilla
                () => {
                    inicializarFormulario();
                }
            )
        );    
    } else {
        inicializarFormulario();
    }
}

/** MODIFICADO
 * Inicializa el formulario
 */
function inicializarFormulario() {
    console.log('formulario cargado')

    // Inicializa el servicio que va a controlar el formulario formulario
    formulario.inicializarFormulario(
        'frmcontacto', 

        // Acción a realizar en caso de que se acepte el formulario
        // MODIFICADO
        (contactoFormulario) => {

            // MODIFICADO
            // Notifica que se ha creado o modificado un nuevo contacto
            if(!editando) {
                // Crea el contacto en la base de datos. Recibe el objeto a almacenar
                contactos.crearContacto(contactoFormulario, () => {
                    
                    // RETO Notifica que se ha hecho un alta
                    onAlta(contactoFormulario);
                }, () => {});
            } else {

                // Pone el identificador en el contacto
                contactoFormulario.id = contacto.id;

                // Actualiza el contacto
                contactos.actualizarContacto(contactoFormulario, () => {

                    // RETO Notifica que se ha modificado un contacto
                    onModificacion(contactoFormulario);
                }, () => {});
            }
        },

        // MODIFICADO Pasa los datos del contacto. Para el caso de la edición
        contacto
    );
}

/**
 * Hace un submit del formulario
 */
function enviarFormulario() {
    console.log('Enviando formulario')

    $('#frmcontacto').submit();
}