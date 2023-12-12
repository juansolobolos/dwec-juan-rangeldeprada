import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MangaComponent } from './pages/manga/manga.component';
import { ComicComponent } from './pages/comic/comic.component';
import { NovelComponent } from './pages/novel/novel.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


@NgModule({
  declarations: [
    MangaComponent,
    ComicComponent,
    NovelComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
