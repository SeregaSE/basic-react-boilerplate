import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import configureStore from './store/configureStore';
import theme from './theme';

const root = document.getElementById('root');
const store = configureStore();

// eslint-disable-next-line
const render = (Component, store) => ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Component />
        </ThemeProvider>
    </Provider>,
    root,
);

render(App, store);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./components/App', async () => {
            const Next = await import('./components/App');
            render(Next.default, store);
        });
    }
}
