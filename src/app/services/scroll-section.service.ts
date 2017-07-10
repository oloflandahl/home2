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

  readonly NotInViewClass = 'not-in-view';

  constructor(private scrollService: ScrollService) {
    this.sections = [];
  }

  registerSection(section: ScrollSectionItem): void {
    section.element.nativeElement.classList.add(this.NotInViewClass);
    this.sections.push(section);
  }

  getSectionInView(viewLine: Line): ScrollSectionItem {
    let sectionMeasures = this.sections.map(s => {
      var el = s.element.nativeElement;
      var elLine = { start: el.offsetTop, length: el.clientHeight };
      return { 
        section: s, 
        overlap: viewLine.getOverlap(elLine),
        distance: viewLine.getDistanceFromTop(elLine.start)
      }
    });

    return sectionMeasures.sort((a, b) => a.distance - b.distance || b.overlap - a.overlap)[0].section;
  }

  onWindowScroll() {
    const viewLine = this.scrollService.getViewLine();
    const section = this.getSectionInView(viewLine);

    const activeItem = this.menuItems.filter(i => i.isActive)[0];
    const newActiveItem = this.menuItems.filter(i => i.id === section.id)[0];
    if (activeItem !== newActiveItem) {
      activeItem.isActive = false;
      newActiveItem.isActive = true;

      const sectionEl = section.element.nativeElement;
      if (sectionEl.classList.contains(this.NotInViewClass)) {
        sectionEl.classList.remove(this.NotInViewClass);
      }
    }
  }

}
