import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import 'normalize.css'; // eslint-disable-line
import './assets/app.global.css';

const root = document.getElementById('root');
const store = configureStore();
const render = Component => ReactDOM.render( // eslint-disable-line
    <Provider store={store}>
        <Component />
    </Provider>, root);

render(App);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./containers/App', () => {
      const NewApp = require('./containers/App').default; // eslint-disable-line
            render(NewApp);
        });
    }
}

