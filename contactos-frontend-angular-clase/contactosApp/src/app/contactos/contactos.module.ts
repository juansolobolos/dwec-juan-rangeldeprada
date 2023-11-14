import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { VerComponent } from './pages/ver/ver.component';
import { ContactoComponentComponent } from './components/contacto.component/contacto.component.component';


@NgModule({
  declarations: [
    ListadoComponent,
    EditarComponent,
    VerComponent,
    ContactoComponentComponent
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule
  ]
})
export class ContactosModule { }
