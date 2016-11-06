import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'app',
    templateUrl: 'app/app.html'
})

export class AppComponent {
    constructor(private translate: TranslateService) {
      const defaultLang = 'en';

      translate.addLangs([defaultLang, 'sv']);
      translate.setDefaultLang(defaultLang);

      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|sv/) ? browserLang : defaultLang);
    }
}