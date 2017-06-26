import { Component } from '@angular/core';

import { SocialLinkItem } from './social-link-item';
import { LINK_ITEMS } from './person-card-social-link-items';

@Component({
  selector: 'person-card',
  templateUrl: 'person-card.component.html',
  styleUrls: ['person-card.component.less']
})

export class PersonCardComponent {

  items: SocialLinkItem[];

  constructor() {
  	this.items = LINK_ITEMS;
  }
}
