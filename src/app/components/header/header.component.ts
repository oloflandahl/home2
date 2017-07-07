import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { TranslateService } from 'ng2-translate';

import { ScrollSectionService } from '../../services/scroll-section.service';

import { MenuItem } from '../../models/menu-item';
import { MENU_ITEMS } from '../../data/menu-items';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.less']
})

export class HeaderComponent implements OnInit {

  public isInit = false;
  public isSticky = false;
  public currentLang: string;
  public items: MenuItem[];

  constructor(@Inject(DOCUMENT) private _document: Document, @Inject(Window) private _window: Window, private translate: TranslateService, private scrollService: ScrollSectionService) {
    this.currentLang = this.translate.currentLang;
    this.items = MENU_ITEMS;
  }

  ngOnInit() {
    const self = this;
    this._window.setTimeout(function() {
      self.isInit = true;
    }, 0);
  }

  select(item: MenuItem) {
    this.items.filter(i => i.isActive)[0].isActive = false;
    item.isActive = true;
  }

  switchLanguage() {
    const allLangs = this.translate.getLangs();
    let currentIndex =  allLangs.indexOf(this.currentLang);
    currentIndex = currentIndex < allLangs.length - 1 ? currentIndex + 1 : 0;
    this.currentLang = allLangs[currentIndex];
    this.translate.use(this.currentLang);

    return false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = this._document.documentElement && this._document.documentElement.scrollTop || this._document.body.scrollTop;
    this.isSticky = scrollTop > 0;

    this.scrollService.onWindowScroll();
  }
}
