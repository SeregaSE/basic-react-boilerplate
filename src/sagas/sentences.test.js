import { takeEvery, call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import api from '../services/api';
import watchSentencesFetchRequest, { fetchSentencesFlow } from './sentences';
import { FETCH_SENTENCES } from '../constants/sentences';
import {
    fetchSentencesError,
    fetchSentencesSuccess,
} from '../actions/sentences';

jest.mock('../services/api');

test('Sentences fetch request watcher', () => {
    const watcher = watchSentencesFetchRequest();

    expect(watcher.next().value).toEqual(takeEvery(FETCH_SENTENCES, fetchSentencesFlow));
});

test('Fetch sentences flow', () => {
    const flow = cloneableGenerator(fetchSentencesFlow)();
    const response = ['test'];
    const error = new Error('service not available');

    expect(flow.next().value).toEqual(call(api.fetchSentences));
    const successFlow = flow.clone();
    const failureFlow = flow.clone();
    expect(successFlow.next(1).value).toEqual(put(fetchSentencesSuccess(response)));
    expect(failureFlow.throw(error).value).toEqual(put(fetchSentencesError(error)));
});




