import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, thunk, sagaMiddleware];

const configureStore = () => {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

    if (module.hot) {
        module.hot.accept(
            '../reducers',
            () => store.replaceReducer(require('../reducers')), // eslint-disable-line
        );
    }

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
