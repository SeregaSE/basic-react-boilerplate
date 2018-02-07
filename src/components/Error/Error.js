// @flow
import * as React from 'react';
import style from './style.css';

type Props = {
    children?: React.Node | string,
};

const Error = ({ children }: Props) => (<div className={style.error}>
    {children}
</div>);

Error.defaultProps = {
    children: 'Error!',
};

export default Error;
