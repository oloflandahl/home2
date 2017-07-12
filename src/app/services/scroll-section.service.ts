import { Inject, Injectable, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { ScrollService } from '../services/scroll.service';

import { Line } from '../models/line.model';
import { ScrollSectionItem } from '../models/scroll-section-item';
import { MENU_ITEMS } from '../data/menu-items';


@Injectable()
export class ScrollSectionService {

  private sections: ScrollSectionItem[];
  private menuItems = MENU_ITEMS;

  private scrollTimeout: number;

  readonly NotActivatedClass = 'not-activated';

  constructor(private scrollService: ScrollService, @Inject(Window) private _window: Window) {
    this.sections = [];
  }

  registerSection(section: ScrollSectionItem): void {
    section.element.nativeElement.classList.add(this.NotActivatedClass);
    this.sections.push(section);
  }

  // Ordered by 'view points'
  getSectionsInView(viewLine: Line): ScrollSectionItem[] {
    const sectionMeasures = this.sections.map(s => {
      const el = s.element.nativeElement;
      const elLine = { start: el.offsetTop, length: el.clientHeight };
      return {
        section: s,
        overlap: viewLine.getOverlap(elLine),
        distance: viewLine.getDistanceFromTop(elLine.start)
      }
    });

    return sectionMeasures
      .filter(item => item.overlap > 100)
      .sort((a, b) => a.distance - b.distance || b.overlap - a.overlap)
      .map(item => item.section);
  }

  onWindowScroll() {
    if (this.scrollTimeout) {
      this._window.clearTimeout(this.scrollTimeout);
    }
    
    this.scrollTimeout = this._window.setTimeout(this.onWindowScrollDelay.bind(this), 100);
  }

  onWindowScrollDelay() {
    const viewLine = this.scrollService.getViewLine();
    const sectionsInView = this.getSectionsInView(viewLine);
    const sectionToActivate = sectionsInView[0];

    const activeItem = this.menuItems.filter(i => i.isActive)[0];
    const newActiveItem = this.menuItems.filter(i => i.id === sectionToActivate.id)[0];
    if (activeItem !== newActiveItem) {
      activeItem.isActive = false;
      newActiveItem.isActive = true;
    }

    sectionsInView.map(s => s.element.nativeElement.classList).forEach(cl => {
      cl.remove(this.NotActivatedClass);
    });
    
    this.scrollTimeout = null;
  }

}
