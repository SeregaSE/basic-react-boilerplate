import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const App = () => {
    return <h1 className={style.title}>Basic React Boilerplate</h1>;
};

App.propTypes = {
    initialCount: PropTypes.number.isRequired
}

export default App;
