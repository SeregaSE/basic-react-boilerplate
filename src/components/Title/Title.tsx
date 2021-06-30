import React from 'react';
import style from './style.scss';

interface Props {
    children: string;
}

const Title = ({ children }: Props) => {
    return <h1 className={style.title}>{children}</h1>;
};

export default Title;
