import { Component, Input } from '@angular/core';

import { IconLinkItem } from '../../models/icon-link-item';
import { SOCIAL_LINK_ITEMS } from '../../data/social-link-items';

@Component({
  selector: 'app-social-links',
  templateUrl: 'social-links.component.html',
  styleUrls: ['social-links.component.less']
})

export class SocialLinksComponent {

  @Input() theme = 'normal';

  socialLinkItems: IconLinkItem[];

  constructor() {
    this.socialLinkItems = SOCIAL_LINK_ITEMS;
  }
}
