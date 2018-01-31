import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

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

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot(),
    Ng2PageScrollModule.forRoot()
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
