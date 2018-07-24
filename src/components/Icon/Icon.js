import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type }) => <i className="material-icons">{type}</i>;

Icon.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Icon;
