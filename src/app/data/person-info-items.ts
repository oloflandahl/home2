import dateService from '../services/date.service';
import { KeyValueItem } from '../models/key-value-item';

export const INFO_ITEMS: KeyValueItem[] = [
    {key: 'PersonInfo_Age', value: dateService.getYearsToNow(1982, 8, 3)},
    {key: 'PersonInfo_Years_Experience', value: dateService.getYearsToNow(2008, 2, 15)},
    {key: 'PersonInfo_City', value: 'Lund'},
    {key: 'PersonInfo_Employment', value: 'HiQ Skåne'},
    {key: 'PersonInfo_Email', value: 'oloflandahl@gmail.com'},
];
