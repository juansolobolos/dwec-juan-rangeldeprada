import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './pages/contador/contador.component';
import { MenuComponent } from './menu/menu/menu.component';



@NgModule({
  declarations: [
    ContadorComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
