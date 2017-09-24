import configureStoreForProd from './configureStore.prod';
import configureStoreForDev from './configureStore.dev';

let configureStore = configureStoreForProd; // eslint-disable-line

if (process.env.NODE_ENV === 'development') {
    configureStore = configureStoreForDev;
}

export default configureStore;
