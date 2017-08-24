import configureStoreForProd from './configureStore.prod';
import configureStoreForDev from './configureStore.dev';

let configureStore = configureStoreForProd;

if (ENV === "dev") {
    configureStore = configureStoreForDev;
}

export default configureStore;
