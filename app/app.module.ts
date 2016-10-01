import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppHeaderComponent }   from './app-header/app-header.component';
import { NavbarComponent }   from './app-header/navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppHeaderComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }