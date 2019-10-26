import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ScrollService } from './services/scroll.service';
import { ScrollSectionService } from './services/scroll-section.service';

import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ScrollSectionDirective } from './directives/scroll-section.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BackImgComponent } from './components/back-img/back-img.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { PersonCardComponent } from './components/cards/person-card/person-card.component';
import { ResumeSummaryComponent } from './components/resume-summary/resume-summary.component';
import { SkillsCardComponent } from './components/cards/skills-card/skills-card.component';
import { TimelineComponent } from './components/cards/timeline/timeline.component';
import { DemosComponent } from './components/cards/demo-cards/demo-cards.component';
import { InterestsCardComponent } from './components/cards/interests-card/interests-card.component';
import { PageCardComponent } from './components/cards/page-card/page-card.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    NgxPageScrollModule
  ],
  providers: [
    ScrollService,
    ScrollSectionService,
    { provide: Window, useValue: window }
  ],
  declarations: [
    ClickOutsideDirective,
    ScrollSectionDirective,
    AppComponent,
    HeaderComponent,
    BackImgComponent,
    FooterComponent,
    SocialLinksComponent,
    PersonCardComponent,
    ResumeSummaryComponent,
    SkillsCardComponent,
    TimelineComponent,
    DemosComponent,
    InterestsCardComponent,
    PageCardComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
