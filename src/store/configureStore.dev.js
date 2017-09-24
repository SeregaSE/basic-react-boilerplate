import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

const middleware = [logger, thunk];

const configureStore = () => {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

    if (module.hot) {
        module.hot.accept(
            '../reducers',
            () => store.replaceReducer(require('../reducers')), // eslint-disable-line
        );
    }

    return store;
};

export default configureStore;
