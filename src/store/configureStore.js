import configureStoreForProd from './configureStore.prod';
import configureStoreForDev from './configureStore.dev';

let configureStore = configureStoreForProd;

if (process.env.NODE_ENV === "development") {
    configureStore = configureStoreForDev;
}

export default configureStore;
