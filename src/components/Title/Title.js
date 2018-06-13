import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => (<h2>
    {children}
</h2>);

Title.defaultProps = {
    children: '',
};

Title.propTypes = {
    children: PropTypes.node,
};

export default Title;
