import * as React from 'react';
import style from './style.css';

const Row = ({ align, className, children, justify }) => (<div
    className={[className, style.container, style[align], style[justify]].join(' ')}
>
    {children}
</div>);

Row.defaultProps = {
    align: 'top',
    className: '',
    children: '',
    justify: 'start',
};

export default Row;
