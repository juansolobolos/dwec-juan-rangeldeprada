import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  titulo: string = 'contactosApp';     // Este será el título de mi aplicación
  // Aquí defino las propiedades de mi 
  // componente. Puedo añadir, cambiar 
  // lo que sea necesario 
  // para representar el estado de mi
  // componente

  numero: number = 0;                 // Este atributo lo vamos a utilizar 
  // en un ejemplo

  sumar(v: number) {                 // Un par de métodos de ejemplo
    this.numero++;
  }

  restar(v: number) {
    this.numero--;
  }
}
