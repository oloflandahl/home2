import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBackImgComponent } from './app-back-img/app-back-img.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  declarations: [ AppComponent, AppHeaderComponent, AppBackImgComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
