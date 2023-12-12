// Estos imports son similares a los que se hacen en JavaScript. Aquí se importan 
// los recursos externos. Vamos a intentar ordenarlos siempre del siguiente modo
// 1. En primer lugar los módulos de Angular
// 2. Los módulos de terceros
// 3. Nuestros módulos.
// Además, los ordenaremos alfabéticamente y separaremos estas secciones con espacios. 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './shared/pages/contador/contador.component';
import { MenuComponent } from './shared/menu/menu/menu.component';

// Este decorador de la clase es lo que hace que sea un módulo. Describe las 
// características de nuestro módulo
@NgModule({
  declarations: [   // En este array van a aparecer los COMPONENTES que se
                    // declaran en este módulo. Esto no implica exportación
    AppComponent,
    ContadorComponent,
    MenuComponent
  ],
  exports: [        // En este array aparecen los COMPONENTES que se exportan
                    // desde este módulo. Estos componentes podrán ser utilizados
                    // en otros módulos.
  ],
  imports: [        // Aquí se indican los MODULOS que se importan en este módulo
                    // para su utilización. 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],            // Proveedores de servicio. Hablaremos sobre esto más adelante.
  bootstrap: [AppComponent] // Es el componente raíz que Angular crea e inserta en 
                            // el index.html. Por defecto nos crea el AppComponent
})
export class AppModule { }