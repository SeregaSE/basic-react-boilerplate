import { takeEvery, call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import api from '../services/api';
import watchCurrenciesFetchRequest, { fetchCurrenciesFlow } from './fetchListings';
import { FETCH_CURRENCIES } from '../constants/index';
import {
    currencies,
    network,
} from '../actions';

const {
    networkFetch,
    networkFetchSuccess,
    networkFetchFail,
} = network;

const {
    fetchCurrenciesSuccess,
} = currencies;

jest.mock('../services/api');

test('Currencies fetch request watcher', () => {
    const watcher = watchCurrenciesFetchRequest();

    expect(watcher.next().value).toEqual(takeEvery(FETCH_CURRENCIES, fetchCurrenciesFlow));
});

test('Fetch currencies flow', () => {
    const response = [
        { id: 1, name: 'bitcoin' },
        { id: 2, name: 'etherium' },
    ];
    const error = new Error('Failed to fetch');
    const flow = cloneableGenerator(fetchCurrenciesFlow)();

    expect(flow.next().value).toEqual(put(networkFetch({ action: FETCH_CURRENCIES })));
    expect(flow.next().value).toEqual(call([api, api.getListings]));

    const successFlow = flow.clone();

    expect(successFlow.next(response).value)
        .toEqual(put(fetchCurrenciesSuccess({ data: response })));

    expect(successFlow.next().value)
        .toEqual(put(networkFetchSuccess({ action: FETCH_CURRENCIES })));

    const failureFlow = flow.clone();

    expect(failureFlow.throw(error).value).toEqual(put(networkFetchFail({
        action: FETCH_CURRENCIES,
        errors: [error],
    })));
});
