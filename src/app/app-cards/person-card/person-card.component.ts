import { Component } from '@angular/core';

import { KeyValueItem } from '../key-value-item';
import { INFO_ITEMS } from './person-card-info-items';
import { SocialLinkItem } from './social-link-item';
import { LINK_ITEMS } from './person-card-social-link-items';

@Component({
  selector: 'app-person-card',
  templateUrl: 'person-card.component.html',
  styleUrls: ['person-card.component.less']
})

export class PersonCardComponent {

  infoItems: KeyValueItem[];
  socialLinkItems: SocialLinkItem[];

  constructor() {
    this.infoItems = INFO_ITEMS;
    this.socialLinkItems = LINK_ITEMS;
  }
}
