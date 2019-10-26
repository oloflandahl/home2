import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PageScrollConfig } from 'ngx-page-scroll';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.less']
})

export class AppComponent {
    constructor(private translate: TranslateService) {
      this.initLanguage(translate);
      this.initPageScroll();
    }

    initLanguage(translate): void {
      const defaultLang = 'en';

      translate.addLangs([defaultLang, 'sv']);
      translate.setDefaultLang(defaultLang);

      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|sv/) ? browserLang : defaultLang);
    }

    initPageScroll(): void {
      PageScrollConfig.defaultScrollOffset = 100;
      PageScrollConfig.defaultDuration = 500;
    }
}
