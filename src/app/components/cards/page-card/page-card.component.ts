import { Component } from '@angular/core';

import { IconLinkItem } from '../../../models/icon-link-item';
import { BRAND_LINK_ITEMS } from '../../../data/brand-link-items';

@Component({
  selector: 'app-page-card',
  templateUrl: 'page-card.component.html',
  styleUrls: ['page-card.component.less']
})

export class PageCardComponent {

  brandItems: IconLinkItem[];

  constructor() {
    this.brandItems = BRAND_LINK_ITEMS;
  }
}
