import { Component } from '@angular/core';

import { KeyValueItem } from '../key-value-item';
import { SKILL_ITEMS } from './skills-card-skill-items';

@Component({
  selector: 'skills-card',
  templateUrl: 'skills-card.component.html',
  styleUrls: ['skills-card.component.less']
})

export class SkillsCardComponent {

  skillItems: KeyValueItem[];

  constructor() {
    this.skillItems = SKILL_ITEMS;
  }
}
