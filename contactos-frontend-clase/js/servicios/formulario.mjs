
export {
    inicializarFormulario
}

//-------------------------------------------------------------------------
// Inicialización
//-------------------------------------------------------------------------
// MOFIFICADO
/**
 * Inicializa el formulario pasado como argumento
 * 
 * @param {*} idFormulario Identificador del formulario
 * @param {*} onSubmit Acción a realizar para enviar el formulario. Se invoca en caso de que
 *                     se pasen las validaciones y esté todo ok.
 * @param {*} objeto   En caso de edición, este objeto contiene los datos a poner en los campos.
 */
function inicializarFormulario(idFormulario, onSubmit, objeto = null) { // MODIFICADO acepta el objeto

    // Obtengo el formulario
    const formulario = $('#'+idFormulario).get(0);

    // MODIFICADO
    // Guarda las funcions callback de las acciones
    formulario.onSubmit = onSubmit;

    // MODIFICADO carga los datos en el formulario
    if(objeto) {
        inicializarCamposDesdeObjeto(formulario, objeto);
    } else {
        // Inicializa los campos.
        formulario.reset();
    }
    

    // Asigna los gestores de eventos
    // MODIFICADO
    $('#'+idFormulario).on('submit', onSubmitEventReceived);
}

//-------------------------------------------------------------------------
// Gestores de eventos
//-------------------------------------------------------------------------
// MODIFICADO
/**
 * Gestiona el evento submit del formulario
 * 
 * @param {} evento 
 */
function onSubmitEventReceived(evento) {

    // Obtengo el formulario
    const formulario = evento.target;

    // Evita que se envíe el formulario
    evento.preventDefault();

    // Prepara objeto para envío al servidor
    const objeto = {};
    
    // Carga en el objeto los valores de los campos en el form
    cargarAtributosDesdeFormulario(formulario, objeto);
    
    // Muestra el objeto que va a enviar al servidor
    console.log(objeto);

    // Enviar información al servidor
    // MODIFICADO
    formulario.onSubmit(objeto);

    // TODO submit realizado o no realizado correctamente
    console.log("Datos guardados");
}

//-------------------------------------------------------------------------
// Funciones de utilidad
//-------------------------------------------------------------------------

/**
 * Recorre todos los campos en el formulario y pone los valores en el objeto resultante
 * utuilizando el campo name.
 */
function cargarAtributosDesdeFormulario(formulario, objeto) {
    $(formulario).find('[name]').each((i, e) => {
        objeto[e.name] = e.value;
    });
}

/**
 * MODIFICADO
 * Recibe un objeto como argumento y para cada uno de los atributos en el objeto
 * inicializa el campo cuyo atribyto name coincide con el nombre.
 * 
 * @param {*} formulario 
 * @param {*} objeto 
 */
function inicializarCamposDesdeObjeto(formulario, objeto) {

    // Recorro los nombres de los campos
    for(let campo in objeto) {
        
        // Obtengo el valor del campo
        const valor = objeto[campo];

        // Si existe en el formulario, asigno el valor
        // Podríamos tener que hacer un tratamiento diferente 
        // para diferentes tipos de campos de entrada o en caso 
        // de utilizar componentes raros de algún tipo.
        // Con esto cubrimos el tipo sencillo
        $(formulario).find(`[name=${campo}]`).val(valor);
    }

}

