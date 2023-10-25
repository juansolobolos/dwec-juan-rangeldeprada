
// Importacion de componentes
import * as paginador from "/js/componentes/paginador.mjs";
import * as dialogo from "/js/componentes/dialogo.mjs";

//Importacion de servicios
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
      {'<>':'th','html':'<button name="btEditar" class="btn btn-info bi bi-pencil-fill" value="${id}"></button>'},
      {'<>':'th','html':'<button name="btEliminar" class="btn btn-danger bi bi-trash-fill" value="${id}"></button>'}
    ]
  };

/**
 * Filtro de búsqueda
 */
let filtroBusqueda = '';

//------------------------------------------------------------------------------------------
// Inicialización
//------------------------------------------------------------------------------------------
function init() {

  // Muestra todos los contactos
  cargarContactos();

  // Inicializa los eventos
  document.getElementById("btBuscar").addEventListener("click", onBuscarClick);
  document.getElementById("btAnadir").addEventListener("click", onAnadirClick);
  $('#tablaContactos').on('click', '[name=btEliminar]', (evento) =>{
    
    //obtengo el id del contacto a eliminar
    const boton = evento.target;
    
    //obtengo el id del contacto a eliminar
    const id = boton.value;

    //Solicito confirmacion  del usuario
    dialogo.mostrarPreguntaSiNo("Esta seguro de que desea eliminar el contacto selecttionado?",
    () => {

      //Eliminar el contacto
      contactos.borrarContacto(id,
        () =>{
          
          console.log("contacto eliminado")
        },
        () =>{
          //Error borrando el contacto
        }
        )

    });

  });

  // Paginador
  paginador.renderizar("paginador", 1, onPaginaCambiada);
}


//------------------------------------------------------------------------------------------
// Gestores de eventos
//------------------------------------------------------------------------------------------
function onBuscarClick(evento) {
    // Obtengo la cadena de texto en el campo
    const iFiltro = document.getElementById("iFiltro");
    filtroBusqueda = iFiltro.value;

    // Muestra todos los contactos
    cargarContactos();
}

function onAnadirClick(evento){
 // dialogo.mostrarMensaje("funciona");
  
 //marcar luego como brueba
 dialogo.mostrarPreguntaSiNo("quieres eliminar el registro?", () =>{
    alert('ok');
  });
}

/**
 * Se invoca cuando en el paginador cambiamos de página
 * 
 * @param {} numeroPagina 
 */
function onPaginaCambiada(numeroPagina) {
  cargarContactos(numeroPagina);
}

//------------------------------------------------------------------------------------------
// Funciones de utilidad
//------------------------------------------------------------------------------------------
function mostrarContactos(contactos) {
    $("#tablaContactos").empty();
    $("#tablaContactos").json2html(contactos, plantilla);
}

function cargarContactos(numeroPagina = 1) {  
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