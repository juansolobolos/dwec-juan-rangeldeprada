import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EstadisticasNombreComponent } from './component/estadisticas-nombre/estadisticas-nombre.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EstadisticasNombreComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
