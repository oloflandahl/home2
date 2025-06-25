import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.less'],
    standalone: false
})

export class AppComponent {
    constructor(translate: TranslateService) {
      this.initLanguage(translate);
    }

    initLanguage(translate): void {
      const defaultLang = 'en';

      translate.addLangs([defaultLang, 'sv']);
      translate.setDefaultLang(defaultLang);

      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|sv/) ? browserLang : defaultLang);
    }
}
