import {KeyValueItem} from '../key-value-item';

// TODO Move to provider/service
const getAge = () => (new Date().getFullYear() - new Date(1982, 7, 3).getFullYear());

export let INFO_ITEMS: KeyValueItem[] = [
    {translationKey: 'PersonInfo_Age', value: ''+getAge()},
];
