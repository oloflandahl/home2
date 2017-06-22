import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBackImgComponent } from './app-back-img/app-back-img.component';

import { CardsContainerComponent } from './cards/cards-container.component';
import { PersonCardComponent } from './cards/person-card/person-card.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  declarations: [ 
    AppComponent, 
    AppHeaderComponent, 
    AppBackImgComponent, 
    CardsContainerComponent,
    PersonCardComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
