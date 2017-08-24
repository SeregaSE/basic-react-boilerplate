import { FETCH_SENTENCES, FETCH_SENTENCES_SUCCESS, FETCH_SENTENCES_ERROR, CLEAR_SENTENCES } from '../constants/sentences';

const initialState = {
    data: [],
    fetching: false,
    error: {}
};

export default function sentences(state = initialState, action) {
    switch (action.type) {
        case FETCH_SENTENCES:
            return {
                ...state,
                fetching: true
            };
        case FETCH_SENTENCES_SUCCESS:
            return {
                ...state,
                data: [...state.data, ...action.data],
                fetching: false
            };
        case FETCH_SENTENCES_ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            };
        case CLEAR_SENTENCES:
            return {
                ...state,
                data: []
            };
        default:
            return state;
    }
}