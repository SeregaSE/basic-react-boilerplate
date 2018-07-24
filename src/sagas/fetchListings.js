import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../services/api';
import { FETCH_CURRENCIES } from '../constants';
import {
    network,
    currencies,
} from '../actions';

const {
    networkFetch,
    networkFetchSuccess,
    networkFetchFail,
} = network;

const {
    fetchCurrenciesSuccess,
} = currencies;

export function* fetchCurrenciesFlow() {
    yield put(networkFetch({ action: FETCH_CURRENCIES }));

    try {
        const data = yield call([api, api.getListings]);

        yield put(fetchCurrenciesSuccess({ data }));
        yield put(networkFetchSuccess({ action: FETCH_CURRENCIES }));
    } catch (error) {
        yield put(networkFetchFail({
            action: FETCH_CURRENCIES,
            errors: [error],
        }));
    }
}

function* watchCurrenciesFetchRequest() {
    yield takeEvery(FETCH_CURRENCIES, fetchCurrenciesFlow);
}

export default watchCurrenciesFetchRequest;
