import { all, fork } from 'redux-saga/effects';
import fetchListings from './fetchListings';

function* rootSaga() {
    yield all([
        fork(fetchListings),
    ]);
}

export default rootSaga;
