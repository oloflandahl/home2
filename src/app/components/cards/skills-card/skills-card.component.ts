import { Component } from '@angular/core';

import { KeyValueItem } from '../../../models/key-value-item';
import { SKILL_ITEMS } from '../../../data/skill-items';

@Component({
  selector: 'app-skills-card',
  templateUrl: 'skills-card.component.html',
  styleUrls: ['skills-card.component.less']
})

export class SkillsCardComponent {

  skillItems: KeyValueItem[];

  constructor() {
    this.skillItems = SKILL_ITEMS;
  }
}
