import React from 'react';
import style from './style.css';

const Sentence = ({ data }) => (<p className={style.sentence}>
    {data}
</p>);

Sentence.defaultProps = {
    data: 'Hello world!',
};

export default Sentence;
