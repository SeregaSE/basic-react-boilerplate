import { createAsyncActionsFlow } from './factory';
import {
    FETCH_CURRENCIES,
    FETCH_CURRENCY,
    NETWORK_FETCH,
} from '../constants';

export const currencies = createAsyncActionsFlow(FETCH_CURRENCIES);
export const currency = createAsyncActionsFlow(FETCH_CURRENCY);
export const network = createAsyncActionsFlow(NETWORK_FETCH);

export default {
    currencies,
    currency,
    network,
};
