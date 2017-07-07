import { Component } from '@angular/core';

import { KeyValueItem } from '../../../models/key-value-item';
import { SocialLinkItem } from '../../../models/social-link-item';

import { INFO_ITEMS } from '../../../data/person-info-items';
import { SOCIAL_LINK_ITEMS } from '../../../data/social-link-items';

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
    this.socialLinkItems = SOCIAL_LINK_ITEMS;
  }
}
