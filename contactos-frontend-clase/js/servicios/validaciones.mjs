

/**
 * Falla si un campo está vacío
 * 
 * @param {*} v 
 */
export async function novacio(v) {
    if(v.trim().length == 0) {
        throw "El campo está vacío";
    }       
}

/**
 * Valida un nombre. 
 * 
 * @param {*} v true si el nombre es válido o el mensaje de error.
 */
export function nombre(v) {
   novacio(v);

   //throw "El nombre no es válido";
}

/**
* Valida un apellido. 
* 
* @param {*} v true si el apellidos es válido o el mensaje de error.
*/
export function apellido(v) {
   novacio(v);

   //throw "El apellidos no es válido";
}

/**
* Valida que el nif es correccto. Para ello comprueba la letra de control
* @param {*} v 
*/
export function nif(v) {
   novacio(v);

   if(!validarNIF) {
       throw "El nif introducido no es correcto";
   }    
}

/**
* Valida que el nif es correccto. Para ello comprueba la letra de control
* @param {*} v 
*/
export function iban(v) {
   //throw "El IBAN introducido no es correcto";
}

/**
* Código postal
* 
* @param {*} v 
*/
export function codigoPostal(v) {
   //throw "El código postal introducido no es correcto";
}

/**
* móvil
* 
* @param {*} v 
*/
export function telefonoMovil(v) {
   return true;
}

/**
* Valida que el nombre del contacto no exista
* 
* @param {*} v 
* @returns 
*/
export async function nombreExiste(v) {
     
    // Busca un contacto por nombre
   const respuesta = await fetch(
        `${URL_BASE}/contactos?nombre=${v}`,
        {
            headers: {
                "Authorization": getAuthenticationHeader()
            }    
        }
    );

    // Creo un objeto a partir del JSON
    const objeto = await respuesta.json();

    // Si no hay resultado, comprueba la longitud
   if(objeto.length > 0) {
        // TODO para hacer esta validación más completa sería necesario contar con más información
        // concretamente el ID de la entidad que se está validando y si estamos en modo edición
        // o alta. De ese modo, en caso de que sea la misma entidad no será necesario lanzar esta validación
        throw 'El nombre ya existe';
   }
}
