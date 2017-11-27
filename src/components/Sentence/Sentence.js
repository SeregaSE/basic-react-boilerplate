// @flow
import React from 'react';
import style from './style.scss';

type Props = {
    data?: string,
};

const Sentence = ({ data }: Props) => (<p className={style.sentence}>
    {data}
</p>);

Sentence.defaultProps = {
    data: 'Hello world!',
};

export default Sentence;
