import { LinkItem } from './link-item';

export interface TimelineItem extends LinkItem {
  startYear: number;
  endYear: number;
  logo: string;
  city: string;
  title: string;
  subTitleTranslationKey: string;
  descriptionTranslationKey: string;
  technologies: string[];
}
