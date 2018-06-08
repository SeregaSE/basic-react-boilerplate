import * as React from 'react';
import style from './style.css';

const Button = ({ children, onClick }) => (<button
    className={style.button}
    onClick={onClick}
>
    {children}
</button>);

const Group = ({ children }) => (<div className={style.group}>
    {children}
</div>);

Button.Group = Group;

export default Button;
