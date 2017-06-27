import dateService from '../../services/date-service';
import {KeyValueItem} from '../key-value-item';

export const INFO_ITEMS: KeyValueItem[] = [
    {translationKey: 'PersonInfo_Age', value: String(dateService.getYearsToNow(1982, 8, 3))},
    {translationKey: 'PersonInfo_Years_Experience', value: String(dateService.getYearsToNow(2008, 2, 15))},
    {translationKey: 'PersonInfo_City', value: 'Lund'},
    {translationKey: 'PersonInfo_Employment', value: 'HiQ Skåne'},
    {translationKey: 'PersonInfo_Email', value: 'oloflandahl@gmail.com'},
];
