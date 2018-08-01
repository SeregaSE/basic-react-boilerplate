import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line
import rootSaga from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const configureStore = () => {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

    if (module.hot) {
        module.hot.accept(
            '../reducers',
            () => store.replaceReducer(import('../reducers')),
        );
    }

    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
