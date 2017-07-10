import { MenuItem } from '../models/menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {id: 'about', translationKey: 'About_Title', isActive: true},
  {id: 'skills', translationKey: 'Skills_Title', isActive: false},
  {id: 'experience', translationKey: 'Experience_Title', isActive: false},
  {id: 'interests', translationKey: 'Interests_Title', isActive: false}
];
