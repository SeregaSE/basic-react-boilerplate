import { all, call } from 'redux-saga/effects';
import sentencesSaga from './sentences';

function* rootSaga() {
    yield all([
        call(sentencesSaga),
    ]);
}

export default rootSaga;
