import * as React from 'react';
import style from './style.css';

const Error = ({ children }) => (<div className={style.error}>
    {children}
</div>);

Error.defaultProps = {
    children: 'Error!',
};

export default Error;
