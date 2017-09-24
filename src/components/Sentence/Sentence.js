import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Sentence = ({ data }) => (<p className="sentence">
    {data}
</p>);

Sentence.propTypes = {
    data: PropTypes.string,
};

Sentence.defaultProps = {
    data: 'Hello world!',
};

export default Sentence;
