import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.less']
})

export class AppComponent {
    constructor(private translate: TranslateService) {
      const defaultLang = 'en';

      translate.addLangs([defaultLang, 'sv']);
      translate.setDefaultLang(defaultLang);

      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|sv/) ? browserLang : defaultLang);
    }
}
