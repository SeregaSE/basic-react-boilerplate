import { FETCH_SENTENCES, FETCH_SENTENCES_SUCCESS, FETCH_SENTENCES_ERROR, CLEAR_SENTENCES } from '../constants/sentences';

export const fetchSentences = () => ({
    type: FETCH_SENTENCES,
});

export const fetchSentencesSuccess = data => ({
    type: FETCH_SENTENCES_SUCCESS,
    data,
});

export const fetchSentencesError = error => ({
    type: FETCH_SENTENCES_ERROR,
    error,
});

export const clearSentences = () => ({
    type: CLEAR_SENTENCES,
});
