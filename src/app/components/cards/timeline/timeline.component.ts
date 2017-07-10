import { Component } from '@angular/core';

import { TimelineItem } from '../../../models/timeline-item';
import { TIMELINE_ITEMS } from '../../../data/timeline-items';

@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.less']
})

export class TimelineComponent {

  timelineItems: TimelineItem[];
  selectedTechnologies: string[];
  techCount: { [name: string]: number };

  constructor() {
    this.timelineItems = TIMELINE_ITEMS.sort((a, b): number => {
      if (a.startYear === b.startYear) {
        return b.endYear - a.endYear;
      }

      return b.startYear - a.startYear;
    });

    this.selectedTechnologies = [];
    this.techCount = {};
  }

  isTechSelected(t): boolean {
    return this.selectedTechnologies.indexOf(t) !== -1;
  }

  toggleTechnology(t) {
    const indexOfTech = this.selectedTechnologies.indexOf(t);
    if (indexOfTech >= 0) {
      this.selectedTechnologies.splice(indexOfTech, 1);
    } else {
      this.selectedTechnologies.push(t);

      if (!this.techCount[t]) {
        this.techCount[t] = this.timelineItems.filter(item => item.technologies.indexOf(t) !== -1).length;
      }
    }

    return false;
  }

  clearSelectedTechnologies() {
    this.selectedTechnologies = [];
  }
}
