import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  
  // Los imports los haremos en el siguiente orden
  // 1. Los de Angular
  // 2. Los de terceros
  // 3. Los de nuestra aplicación
  // ! siempre en orden alfabético
  imports: [

    // Este módulo ofrece algunas funcionalidades para trabajar con plantillas HTML
    CommonModule,

    // Aquí se define el enrutamiento de este módulo
    TasksRoutingModule,

    // Módulo Shared
    SharedModule
  ]
})
export class TasksModule { }