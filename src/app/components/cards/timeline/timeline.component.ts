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
  selectedTech: string;

  constructor() {
    this.timelineItems = TIMELINE_ITEMS.sort((a, b): number => {
      if (a.startYear === b.startYear) {
        return b.endYear - a.endYear;
      }

      return b.startYear - a.startYear;
    });
  }

  toggleTechnology(t) {
    this.selectedTech = this.selectedTech === t ? null : t;

    return false;
  }

}
