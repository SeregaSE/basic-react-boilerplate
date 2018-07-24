import { FETCH_CURRENCIES } from '../constants';

const emptyArr = [];

const selectNetworkProp = (state, action, prop, fallback) => {
    const status = state.network[action] || {};
    return status[prop] || fallback;
};
const selectFetchingStatus = (state, action) => selectNetworkProp(state, action, 'fetching', false);
const selectErrorsStatus = (state, action) => selectNetworkProp(state, action, 'errors', emptyArr);
export const selectCurrenciesFetching = state => selectFetchingStatus(state, FETCH_CURRENCIES);
export const selectCurrenciesFetchingErrors = state => selectErrorsStatus(state, FETCH_CURRENCIES);

export const selectCurrencies = state => state.currencies.data;
export const selectCurrenciesCount = state => state.currencies.metadata.num_cryptocurrencies;
