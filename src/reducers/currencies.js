import { FETCH_CURRENCIES, SUCCESS } from '../constants/index';
import { withPostfix } from '../actions/factory';

const initialState = {
    data: [],
    metadata: {
        num_cryptocurrencies: 0,
    },
};

export default function currencies(state = initialState, action) {
    switch (action.type) {
    case withPostfix(FETCH_CURRENCIES, SUCCESS):
        return {
            ...state,
            ...action.payload.data,
        };
    default:
        return state;
    }
}
