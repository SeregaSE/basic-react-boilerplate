import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../services/api';
import { FETCH_SENTENCES } from '../constants/sentences';
import {
    fetchSentencesError,
    fetchSentencesSuccess,
} from '../actions/sentences';

export function* fetchSentencesFlow() {
    try {
        const data = yield call(api.fetchSentences);
        yield put(fetchSentencesSuccess(data));
    } catch (error) {
        yield put(fetchSentencesError(error));
    }
}

function* watchSentencesFetchRequest() {
    yield takeEvery(FETCH_SENTENCES, fetchSentencesFlow);
}

export default watchSentencesFetchRequest;
