import { Component } from '@angular/core';

import { InterestItem } from '../../../models/interest-item';

import { INTEREST_ITEMS } from '../../../data/interest-items';

@Component({
    selector: 'app-interests-card',
    templateUrl: 'interests-card.component.html',
    styleUrls: ['interests-card.component.less'],
    standalone: false
})

export class InterestsCardComponent {

  interestItems: InterestItem[];
  activeItem: InterestItem;
  activeIndex: number;

  constructor() {
    this.interestItems = INTEREST_ITEMS;
  }

  toggle(item: InterestItem, index: number) {
    if (this.activeItem === item) {
      this.activeItem = null;
      this.activeIndex = null;
    } else {
      this.activeItem = item;
      this.activeIndex = index;
    }
  }
}
