import {
    NETWORK_FETCH,
    SUCCESS,
    FAIL,
} from '../constants/index';
import { withPostfix } from '../actions/factory';

const initialState = {};

export default function sentences(state = initialState, action) {
    switch (action.type) {
    case NETWORK_FETCH:
        return {
            ...state,
            [action.payload.action]: {
                fetching: true,
                errors: [],
            },
        };
    case withPostfix(NETWORK_FETCH, SUCCESS):
        return {
            ...state,
            [action.payload.action]: {
                fetching: false,
                errors: [],
            },
        };
    case withPostfix(NETWORK_FETCH, FAIL):
        return {
            ...state,
            [action.payload.action]: {
                fetching: true,
                errors: action.payload.errors,
            },
        };
    default:
        return state;
    }
}
