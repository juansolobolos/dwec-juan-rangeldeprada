import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { ListElementComponent } from './components/list-element/list-element.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';



@NgModule({
  declarations: [
    UserNavbarComponent,
    ListContainerComponent,
    ListElementComponent,
    AdminNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserNavbarComponent,
    ListContainerComponent,
    ListElementComponent
  ]
})
export class SharedModule { }
