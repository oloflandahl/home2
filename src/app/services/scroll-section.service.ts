import { Inject, Injectable, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Line } from '../models/line.model';
import { ScrollSectionItem } from '../models/scroll-section-item';
import { MENU_ITEMS } from '../data/menu-items';


@Injectable()
export class ScrollSectionService {

  private sections: ScrollSectionItem[];
  private menuItems = MENU_ITEMS;

  private scrollTimeout: number;

  constructor(@Inject(DOCUMENT) private _document: Document, @Inject(Window) private _window: Window) {
    this.sections = [];
  }

  registerSection(section: ScrollSectionItem): void {
    this.sections.push(section);
  }

  getSectionInView(viewLine: Line): string {
    let sectionMeasures = this.sections.map(s => {
      var el = s.element.nativeElement;
      var elLine = { start: el.offsetTop, length: el.clientHeight };
      return { 
        id: s.id, 
        overlap: viewLine.getOverlap(elLine),
        distance: viewLine.getDistanceFromTop(elLine.start)
      }
    });

    return sectionMeasures.sort((a, b) => a.distance - b.distance || b.overlap - a.overlap)[0].id;
  }

  onWindowScroll() {
    if (this.scrollTimeout) {
      this._window.clearTimeout(this.scrollTimeout);
    }

    const scrollTop = this._document.documentElement && this._document.documentElement.scrollTop || this._document.body.scrollTop;
    this.scrollTimeout = this._window.setTimeout(this.onWindowScrollWithDelay.bind(this), 100, scrollTop);
  }

  onWindowScrollWithDelay(scrollTop) {
    console.log('scroll');
    const windowVerticalLine = new Line({
      start: scrollTop,
      length: this._window.innerHeight,
    });

    const id = this.getSectionInView(windowVerticalLine);

    const activeItem = this.menuItems.filter(i => i.isActive)[0];
    const newActiveItem = this.menuItems.filter(i => i.id === id)[0];
    if (activeItem !== newActiveItem) {
      activeItem.isActive = false;
      newActiveItem.isActive = true;
    }

    this.scrollTimeout = null;
  }

}
