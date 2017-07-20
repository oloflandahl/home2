import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

import { ScrollService } from '../../services/scroll.service';
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
  public stickyIsHidden = false;
  public isMenuOpen = false;
  public currentLang: string;
  public items: MenuItem[];

  constructor(@Inject(Window) private _window: Window,
    private translate: TranslateService,
    private scrollService: ScrollService,
    private scrollSectionService: ScrollSectionService) {
    this.currentLang = this.translate.currentLang;
    this.items = MENU_ITEMS;
  }

  ngOnInit() {
    const self = this;
    this._window.setTimeout(function() {
      self.isInit = true;
    }, 0);
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  hideSticky() {
    this.closeMenu();
    this.stickyIsHidden = true;
  }

  select(item: MenuItem) {
    this.closeMenu();
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
    const scrollTop = this.scrollService.getScrollTop();
    this.isSticky = scrollTop > 0;

    this.scrollSectionService.onWindowScroll();
  }
}
