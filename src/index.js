import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './containers/AppContainer';
import configureStore from './store/configureStore';
import theme from './theme';
// eslint-disable-next-line
import 'normalize.css';

const root = document.getElementById('root');
const store = configureStore();


// eslint-disable-next-line
const render = (Component, store) => ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Component />
        </ThemeProvider>
    </Provider>, root);

render(App, store);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./containers/AppContainer', () => {
            // eslint-disable-next-line
            const NewApp = require('./containers/AppContainer').default;
            render(NewApp, store);
        });
    }
}

