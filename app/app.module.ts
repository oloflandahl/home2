import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppHeaderComponent }   from './app-header/app-header.component';
import { AppBackImgComponent }   from './app-back-img/app-back-img.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppHeaderComponent, AppBackImgComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }