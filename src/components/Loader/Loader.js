import React from 'react';
import style from './style.css';
import loader from '../../assets/images/loader.svg';

const Loader = () => (<img
    alt="loading..."
    className={style.loader}
    src={loader}
/>);

export default Loader;
