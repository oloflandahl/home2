import { Component } from '@angular/core';

import { DemoItem } from '../../../models/demo-item';
import { DEMO_ITEMS } from '../../../data/demo-items';

@Component({
    selector: 'app-demos',
    templateUrl: 'demo-cards.component.html',
    styleUrls: ['demo-cards.component.less'],
    standalone: false
})

export class DemosComponent {

  demoItems: DemoItem[];

  constructor() {
    this.demoItems = DEMO_ITEMS;
  }
}
