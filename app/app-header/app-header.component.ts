import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-header',
  templateUrl: 'app/app-header/app-header.html',
  styleUrls: ['app/app-header/app-header.css']
})

export class AppHeaderComponent implements OnInit {

  public isInit: boolean = false;
  public isSticky: boolean = false;
  public currentLang: string;

  constructor(@Inject(DOCUMENT) private document: Document, private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
  }

  ngOnInit() {
    let self = this;
    setTimeout(function() {
      self.isInit = true;
    }, 0);
  }

  switchLanguage(){
    const allLangs = this.translate.getLangs();
    let currentIndex =  allLangs.indexOf(this.currentLang);
    currentIndex = currentIndex < allLangs.length - 1 ? currentIndex + 1 : 0;
    this.currentLang = allLangs[currentIndex];
    this.translate.use(this.currentLang);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isSticky = this.document.body.scrollTop > 0;
  }
}