import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'normalize.css';
import './theme/global.css';
            
render(
    <App initialCount={0}/>,
    document.getElementById('root')
);
