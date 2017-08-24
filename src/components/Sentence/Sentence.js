import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classname';
import './style.scss';

const Sentence = ({ data }) => (<p className="sentence">
    {data}
</p>);

Sentence.propTypes = {
    data: PropTypes.string
};

Sentence.defaultProps = {
    data: 'Hello world!'
};

export default Sentence;
