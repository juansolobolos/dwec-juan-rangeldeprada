
// Importaciones de componentes
import * as paginador from "/js/componentes/paginador.mjs";
import * as dialogo from "/js/componentes/dialogo.mjs";
import * as ventanaModal from "/js/componentes/ventanaModal.mjs";

// Páginas
import * as frmEditarContacto from "/paginas/contactos/editar.mjs";

// Importaciones de servicios
import * as contactos from "/js/servicios/contactos.mjs";


// Exportaciones
export { init };

//------------------------------------------------------------------------------------------
// Variables
//------------------------------------------------------------------------------------------

/**
 * Plantilla de la tabla de contactos. Esta plantilla es utilizada por json2html para generar
 * el contenido de la tabla.
 */
const plantilla = {
    '<>': 'tr','html': [
      {'<>': 'th','scope':'row','html': '${id}'},
      {'<>': 'td','html': '${nombre}'},
      {'<>': 'td','html': '${apellidos}'},
      {'<>':'td','html':'<button name="btEditar" class="btn btn-info bi bi-pencil-fill" value="${id}"></button>'},
      {'<>':'td','html':'<button name="btEliminar" class="btn btn-danger bi bi-trash-fill" value="${id}"></button>'}
    ]
  };

/**
 * Filtro de búsqueda
 */
let filtroBusqueda = '';

/** MODIFICADO
 * Almacena el número de página actual. Si se recarga se utiliza este número de página
 */
let numeroPaginaActual = 1;

/** MODIFICADO
 * Tabla de contactos. Almacena los contactos que se están mostrando en estos momentos
 */
let tablaContactos = null;

//------------------------------------------------------------------------------------------
// Inicialización
//------------------------------------------------------------------------------------------
function init() {

  // Muestra todos los contactos
  cargarContactos();

  // MODIFICADO Inicializa los eventos 
  $("#btBuscar").on("click", onBuscarClick);
  $("#btAnadir").on("click", onAnadirClick);
  $('#tablaContactos').on('click', '[name=btEliminar]', onEliminarClick);
  $('#tablaContactos').on('click', '[name=btEditar]', onEditarClick); // MODIFICADO

  // Paginador
  paginador.renderizar("paginador", 1, onPaginaCambiada);
}


//------------------------------------------------------------------------------------------
// Gestores de eventos
//------------------------------------------------------------------------------------------
/** 
 * Gestiona el evento click en botón buscar.
 */
function onBuscarClick(evento) {
    // Obtengo la cadena de texto en el campo
    const iFiltro = document.getElementById("iFiltro");
    filtroBusqueda = iFiltro.value;

    // Muestra todos los contactos
    cargarContactos();
}

/**
 * Gestiona el evento click en botón añadir
 * 
 * @param {*} evento 
 */
function onAnadirClick(evento) {
  crearContacto();    
}

function onEliminarClick(evento) {
  
  // Obtengo el botón sobre el que se hecho click
  const boton = evento.target;

  // Obtengo el identificador del contacto a eliminar
  const id = boton.value;

  // Solicito confirmación del usuario
  dialogo.mostrarPreguntaSiNo(
    "¿Está seguro de que desea eliminar el contacto seleccionado?", 
    () => {

      // Eliminar el contacto
      contactos.borrarContacto(id, 
        () => {

          // Eliminar el registro de la tabla en el GUI
          $(evento.target).parents('tr').remove();

          // Elimina el contacto de la tabla local
          for(let n = 1,fin = false;n < tablaContactos.length && ! fin;n++) {
            if(tablaContactos[n].id == id) {
              tablaContactos.splice(n, n);
              fin = true;
            }
          }
        }, 
        () => {
          // Error borrando el contacto
        }
      );

    }
  );
}

/**
 * MODIFICADO
 * Lanza la acción de editar el contacto
 * 
 * @param {} evento 
 */
function onEditarClick(evento) {

  // En primer lugar necesita conocer el índice de que se trata
  const indice = $(evento.target).closest("tr").index();
  
  // Ahora obtengo el objeto
  const contacto = tablaContactos[indice];

  // Edita el contacto
  editarContacto(contacto);
}


/**
 * Se invoca cuando en el paginador cambiamos de página
 * 
 * @param {} numeroPagina 
 */
function onPaginaCambiada(numeroPagina) {
  
  // Cargo los contactos en la página indicada
  cargarContactos(numeroPagina);  

  // MODIFICADO guardo el número de página actual
  numeroPaginaActual = numeroPagina;
}

/** MODIFICADO
 * Esta función se invoca cuando se ha creado un nuevo contacto
 */
function onContactoCreado() {
  console.log("onContactoCreado");

  // MODIFICADO Llama a recargar la página de contactos actual
  refrescarContactos();

  // Oculta la ventana modal
  ventanaModal.ocultarVentanaModal();
}

/** MODIFICADO
 * Esta función se invoca cuando se ha modificado un contacto
 */
function onContactoModificado() {

  console.log("onContactoModificado");

  refrescarContactos();

  // Oculta la ventana modal
  ventanaModal.ocultarVentanaModal();
}

//------------------------------------------------------------------------------------------
// Funciones de utilidad
//------------------------------------------------------------------------------------------
function mostrarContactos(contactos) {
    console.log("mostrarContactos");
  
    $("#tablaContactos").empty();
    $("#tablaContactos").json2html(contactos, plantilla);

    // MODIFICADO deja guardados los contactos que se han cargado
    // Esto lo hace para facilitar la modificación.
    tablaContactos = contactos;
    console.log(contactos);
}

/** MODIFICADO
 * Recarga la página actual de contactos. Carga la página cargada actualmente.
 */
function refrescarContactos() {  

  console.log("Refrescar contactos");
  cargarContactos(numeroPaginaActual);
}

/**
 * Carga la página de cotnactos indicada aplicando el filtro de búsqueda
 * 
 * @param {*} numeroPagina 
 */
function cargarContactos(numeroPagina = 1) {  
  
  console.log("Cargar contactos");

  if(filtroBusqueda.length == 0) {
    // Muestra todos los contactos
    contactos.getTodos(
      contactos => mostrarContactos(contactos), 
      (error) => { },
      numeroPagina
    );  
  } else {

    // Muestra todos los contactos
    contactos.buscarContactos(
      filtroBusqueda,
      contactos => mostrarContactos(contactos), 
      (error) => { },
      numeroPagina
    );
  }
}

/** MODIFICADO
 * Crea un contacto
 */
function crearContacto() {
    
  // Muestro la ventana modal
    ventanaModal.mostrarVentanaModal(
      "Añadir un contacto", 
      // MODIFICADO - Llama a esta función que además permite recibir 
      // una función callback a llamar en caso de alta
      // TODO se puede mejorar haciendo que la funcuión crear retorne un vector
      frmEditarContacto.crearFormularioAltaContacto(onContactoCreado),
      frmEditarContacto.enviarFormulario
  );
}

/**
 * Edita un contacto
 */
function editarContacto(contacto) {

  // Muestro la ventana modal
    ventanaModal.mostrarVentanaModal(
      "Editar un contacto", 
      // MODIFICADO - Llama a esta función que además permite recibir 
      // una función callback a llamar en caso de alta
      // TODO se puede mejorar haciendo que la función crear retorne un vector
      frmEditarContacto.crearFormularioModificacionContacto(contacto, onContactoModificado),
      frmEditarContacto.enviarFormulario
  );
}