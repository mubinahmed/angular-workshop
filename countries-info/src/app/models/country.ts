import { State } from './state';
export interface Country {
    name: string;
    isoCode: string;
    isdCode: string;
    capital: string;
    states: State[];
}
