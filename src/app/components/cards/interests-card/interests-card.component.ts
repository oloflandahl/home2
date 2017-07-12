import { Component } from '@angular/core';

import { InterestItem } from '../../../models/interest-item';

import { INTEREST_ITEMS } from '../../../data/interest-items';

@Component({
  selector: 'app-interests-card',
  templateUrl: 'interests-card.component.html',
  styleUrls: ['interests-card.component.less']
})

export class InterestsCardComponent {

  interestItems: InterestItem[];
  activeItem: InterestItem;
  activeIndex: number;

  constructor() {
    this.interestItems = INTEREST_ITEMS;

    this.activeIndex = 0;
    this.activeItem = this.interestItems[this.activeIndex];
  }

  select(item: InterestItem, index: number) {
    this.activeItem = item;
    this.activeIndex = index;
  }
}
