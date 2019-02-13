import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../GlobalStyle';

const App = ({ title }) => (
    <Fragment>
        <GlobalStyle />
        {title}
    </Fragment>
);

App.propTypes = {
    title: PropTypes.string,
};

App.defaultProps = {
    title: 'HELLO WORLD!',
};

export default App;
