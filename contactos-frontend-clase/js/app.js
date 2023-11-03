"use strict";

//----------------------------------------------------------------------------
// Constantes asociadas al GUI
//----------------------------------------------------------------------------
const APP_ROOT          = "/";
const PAGINAS_ROOT      = "paginas";
const SERVICIOS_ROOT    = "js/servicios";
const COMPONENTES_ROOT  = "js/componentes";

//----------------------------------------------------------------------------
// Constantes asociadas al BACKEND
//----------------------------------------------------------------------------
const LOGIN_RECURSO     = `${URL_BASE}/login`;

//----------------------------------------------------------------------------
// Inicialización
//----------------------------------------------------------------------------
$(document).ready(() => {
    
    // No permite acceso a la página sin iniciar sesión
    protegerAcceso();    
});


//----------------------------------------------------------------------------
// Funciones para calcular los nombres de los recursos
//----------------------------------------------------------------------------
function URL_PAGINA(nombre) {
    return `${PAGINAS_ROOT}/${nombre}.html`
}

function URL_SERVICIO(nombre) {
    return `${SERVICIOS_ROOT}/${nombre}.mjs`
}

function URL_COMPONENTE_JS(nombre) {
    return `${COMPONENTES_ROOT}/${nombre}.mjs`
}

function URL_COMPONENTE_PLANTILLLA(nombre) {
    return `${COMPONENTES_ROOT}/${nombre}.html`
}


//----------------------------------------------------------------------------
// Control de sesión
//----------------------------------------------------------------------------
let jwtToken = null;

function esSesionIniciada() {
    return jwtToken != null;
}

function iniciarSesion() {
    mostrarLogin();
}

function cerrarSesion() {
    jwtToken = null;
}

function protegerAcceso() {
    if(!esSesionIniciada()) {
        iniciarSesion();
    }
}

function getAuthenticationHeader() {
    return `Bearer ${jwtToken}`;
}

//----------------------------------------------------------------------------
// Funciones de navegación por la aplicación
//----------------------------------------------------------------------------

/**
 * Pasado el nombre de una página la carga en el área de trabajo
 * 
 * @param {} nombre nombre de la página a cargar sin extensión. Pasar APP_ROOT hace que se vacíe el espacio
 */
function appCargar(nombre) {

    // Protege el acceso. Si no se ha iniciado sesión no se puede cargar página
    protegerAcceso();

    // Carga la página
    if(nombre == APP_ROOT) {
        $("#workspace").empty();
    } else {
        $("#workspace").load(URL_PAGINA(nombre));
    }
    
}

//----------------------------------------------------------------------------
// Implementación de elementos del GUI globales.
//----------------------------------------------------------------------------

/**
 * Muestra el cuadro de diálogo preparado para iniciar sesión
 */
function mostrarLogin() {
        
        // Inicializa la ventana de login
        $('#loginBotonAceptar').off();
        $('#loginBotonAceptar').on('click', onLoginBotonAceptarClick);

        // Muestra la ventana modal
        $('#loginModal').modal('show');
}

/**
 * Operación a realizar cuando se pincha en iniciar sesión
 */
function onLoginBotonAceptarClick(evento) {

    // Obtiene los datos
    const usuario = $('#loginModal [name=usuario]').val();
    const password = $('#loginModal [name=password]').val();

    // Prepara el objeto para el login
    const parametros = {
        email : usuario,
        password : password
    };

    // Lanza un login
    fetch(
        LOGIN_RECURSO,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parametros)
        }
    ) 
    .then(response => {

        // En caso de error 200 tenemos inicio de sesión correcto
        if(response.status == 200) {

            // Retornamos el texto para poder sacar el token
            return response.text();
        } else {
            throw "Usuario/Contraseña incorrecto";
        }        
    })
    .then(texto => {          

        // Datos en formato JSON
        const datos = JSON.parse(texto);      
  
        // Obtengo el valor del token y lo guardo para uso posterior
        jwtToken = datos.accessToken;       

        // Cargo el raíz
        appCargar("/");

        // Oculto el cuadro de diálogo de login
        $('#loginModal').modal('hide');
    })
    .catch(error => {

        // Aquí entrará debido a la excepción. En este caso se debe mostrar el mensaje de error
        // según se desee y esté implementado en la aplicación
        console.log(error);

        // El token en este caso es null
        jwtToken = null;
    });      
       
}