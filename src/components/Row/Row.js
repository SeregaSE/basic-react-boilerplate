// @flow
import * as React from 'react';
import style from './style.css';

type Props = {
    align?: 'top' | 'middle' | 'bottom' | 'stretch',
    className?: string,
    children?: React.Node | string,
    justify?: 'start' | 'space-around' | 'space-between' | 'center' | 'end',
};

const Row = ({ align, className, children, justify }: Props) => (<div
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
