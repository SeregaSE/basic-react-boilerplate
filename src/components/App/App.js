import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => (
    <Fragment>
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
