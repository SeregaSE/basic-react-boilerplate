import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import 'normalize.css';
import './assets/app.global.css';

const root = document.getElementById('root');
const store = configureStore();
const render = Component => ReactDOM.render(
    <Provider store={store}>
        <Component />
    </Provider>, root);

render(App);

if (process.env.NODE_ENV === "development") {
    if (module.hot) {
        module.hot.accept('./containers/App', function () {
            const NewApp = require('./containers/App').default;
            render(NewApp);
        });
    }
}

