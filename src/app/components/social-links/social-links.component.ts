import { Component, Input } from '@angular/core';

import { SocialLinkItem } from '../../models/social-link-item';
import { SOCIAL_LINK_ITEMS } from '../../data/social-link-items';

@Component({
  selector: 'app-social-links',
  templateUrl: 'social-links.component.html',
  styleUrls: ['social-links.component.less']
})

export class SocialLinksComponent {

  @Input() theme = 'normal';

  socialLinkItems: SocialLinkItem[];

  constructor() {
    this.socialLinkItems = SOCIAL_LINK_ITEMS;
  }
}
