import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

const configureStore = () => {
    const store = createStore(reducer, applyMiddleware(...middleware));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
