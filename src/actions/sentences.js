import { FETCH_SENTENCES, FETCH_SENTENCES_SUCCESS, FETCH_SENTENCES_ERROR, CLEAR_SENTENCES } from '../constants/sentences';

const fetchSentences = () => ({
    type: FETCH_SENTENCES,
});

const fetchSentencesSuccess = data => ({
    type: FETCH_SENTENCES_SUCCESS,
    data,
});

const fetchSentencesError = error => ({
    type: FETCH_SENTENCES_ERROR,
    error,
});

export const getSentences = () => (dispatch) => {
    dispatch(fetchSentences());

    const url = 'https://baconipsum.com/api/?type=all-meat';
    const options = {
        method: 'GET',
    };

    fetch(url, options)
        .then(res => res.json())
        .then(data => dispatch(fetchSentencesSuccess(data)))
        .catch(error => dispatch(fetchSentencesError(error)));
};

export const clearSentences = () => ({
    type: CLEAR_SENTENCES,
});
