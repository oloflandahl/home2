import { Component } from '@angular/core';

import { KeyValueItem } from '../../../models/key-value-item';
import { INFO_ITEMS } from '../../../data/person-info-items';

@Component({
    selector: 'app-person-card',
    templateUrl: 'person-card.component.html',
    styleUrls: ['person-card.component.less'],
    standalone: false
})

export class PersonCardComponent {

  infoItems: KeyValueItem[];

  constructor() {
    this.infoItems = INFO_ITEMS;
  }
}
