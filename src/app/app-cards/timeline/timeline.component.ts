import { Component } from '@angular/core';

import { TimelineItem } from './timeline-item';
import { TIMELINE_ITEMS } from './timeline-items';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.less']
})

export class TimelineComponent {

  timelineItems: TimelineItem[];

  constructor() {
    this.timelineItems = TIMELINE_ITEMS.sort((a, b) : number => {
	    if (a.startYear === b.startYear) {
        return b.endYear - a.endYear;
      }

      return b.startYear - a.startYear;
    });
  }
}
