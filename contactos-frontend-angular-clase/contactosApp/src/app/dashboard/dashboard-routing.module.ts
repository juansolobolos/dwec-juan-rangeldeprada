import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from '../contactos/pages/listado/listado.component';
import { EditarComponent } from '../contactos/pages/editar/editar.component';
import { VerComponent } from '../contactos/pages/ver/ver.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    // No es necesario especificar nada en este atributo
    // Ya que estamos definiendo rutas hijas.
    path: '',
    children: [
      {
        // tareas/listado
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        // Por defecto, envía al listado.
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
