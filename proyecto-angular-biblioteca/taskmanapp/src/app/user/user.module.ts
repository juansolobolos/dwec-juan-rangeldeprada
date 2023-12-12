import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NovelComponent } from './pages/novel/novel.component';
import { ComicComponent } from './pages/comic/comic.component';
import { MangaComponent } from './pages/manga/manga.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    NovelComponent,
    ComicComponent,
    MangaComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [
    WelcomeComponent,
    NovelComponent,
    ComicComponent,
    MangaComponent
  ]
})
export class UserModule { }
