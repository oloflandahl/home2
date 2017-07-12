import { InterestItem } from '../models/interest-item';

// Can only contain 7 items
export const INTEREST_ITEMS: InterestItem[] = [
  { iconPrefix: 'fa', iconName: 'music', title: 'Interest_Music', description: 'Interest_Music_Description' },
  { iconPrefix: 'fa', iconName: 'futbol-o', title: 'Interest_Football', description: 'Interest_Football_Description' },
  { iconPrefix: 'map-icon', iconName: 'trail-walking', title: 'Interest_Nature', description: 'Interest_Nature_Description' },
  { iconPrefix: 'map-icon', iconName: 'surfing', title: 'Interest_Surfing', description: 'Interest_Surfing_Description' },
  { iconPrefix: 'fa', iconName: 'camera', title: 'Interest_Photo', description: 'Interest_Photo_Description' },
  { iconPrefix: 'map-icon', iconName: 'restaurant', title: 'Interest_Food', description: 'Interest_Food_Description' },
  { iconPrefix: 'map-icon', iconName: 'bar', title: 'Interest_Beer', description: 'Interest_Beer_Description' }
];
