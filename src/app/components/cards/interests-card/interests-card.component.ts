import { Component } from '@angular/core';

import { IconItem } from '../../../models/icon-item';

import { INTEREST_ITEMS } from '../../../data/interest-items';

@Component({
  selector: 'app-interests-card',
  templateUrl: 'interests-card.component.html',
  styleUrls: ['interests-card.component.less']
})

export class InterestsCardComponent {

  interestItems: IconItem[];

  constructor() {
    this.interestItems = INTEREST_ITEMS;
  }
}
