import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() { }

  //
  private mensajeError : any = {
    noEmpiezaMayuscula: "El valor debe comenzar por mayúscula",
    required: "Campo requerido",
    iguales: "campos iguales"
  }

  //funciones para obtener texto de errorres
  getMensajeError(error: string): string{
    return this.mensajeError(error);
  }

  //permite a otras clases de validacion añadir sis ensajes aqi
  registrarMensajeError(clave:string,valor:string){
    this.mensajeError[clave] = valor;
  }



  validarEmpiezaMayuscula(control: FormControl) : ValidationErrors | null {
      
    // Obtiene el valor en el control
    const inicial :string = control.value?.trim()[0];     
 
    // Si el valor no pasa la validación, tenemos problemas
    if(inicial && inicial != inicial.toUpperCase()) {
      
      // Rengo que devolver un objeto con el error
      return {
        // El atributo indica la validación que no se ha pasado
        // Los campos tendrán estos errores por lo que se puede mostrar un mensaje
        noEmpiezaMayuscula: true
      }  
    }

    // Null implica que todo OK. Nada que notificar
    return null;
  }


  ///////////////////////////////////////7
  //Validaciones de formulario
  ////////////////////////////77

  camposNoiguales(campo1: string, campo2: string){
    //retorna una funcion que trata el formgroup qe va a hacer las comprobaciones
    return (formGroup : AbstractControl): ValidationErrors | null => {

      const valor1 = formGroup.get(campo1)?.value;
      const valor2 = formGroup.get(campo2)?.value;

      if(valor1 == valor2){
        const error = {
          iguales: true
        }

        formGroup.get(campo2)?.setErrors(error);

        return error;
      } else{
        formGroup.get(campo2)?.setErrors(null);
      }


      return null;
    }
  }
}
