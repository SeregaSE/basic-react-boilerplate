import { combineReducers } from 'redux';
import currencies from './currencies';
import network from './network';

export default combineReducers({
    currencies,
    network,
});
