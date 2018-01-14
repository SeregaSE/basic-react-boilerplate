import { takeEvery, put } from 'redux-saga/effects';
import { FETCH_SENTENCES } from '../constants/sentences';
import {
    fetchSentencesError,
    fetchSentencesSuccess,
} from '../actions/sentences';

function* fetchSentencesFlow() {
    const url = 'https://baconipsum.com/api/?type=all-meat';
    const options = {
        method: 'GET',
    };
    try {
        const response = yield fetch(url, options);
        const data = yield response.json();
        yield put(fetchSentencesSuccess(data));
    } catch (error) {
        yield put(fetchSentencesError(error));
    }
}

function* watchSentencesFetchRequest() {
    yield takeEvery(FETCH_SENTENCES, fetchSentencesFlow);
}

export default watchSentencesFetchRequest;
