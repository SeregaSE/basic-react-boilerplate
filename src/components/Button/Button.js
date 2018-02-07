// @flow
import * as React from 'react';
import style from './style.css';

type ButtonProps = {
    children: React.Node | string,
    onClick: (event: SyntheticEvent<any>) => void,
};

const Button = ({ children, onClick }: ButtonProps) => (<button
    className={style.button}
    onClick={onClick}
>
    {children}
</button>);

type GroupProps = {
    children: React.Element<typeof Button>
        | React.ChildrenArray<React.Element<typeof Button> | null>,
};

const Group = ({ children }: GroupProps) => (<div className={style.group}>
    {children}
</div>);

Button.Group = Group;

export default Button;
