import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import './theme/global.css';
import App from './components/App';
            
render(
    <App initialCount={0}/>,
    document.getElementById('root')
);
