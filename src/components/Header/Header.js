// @flow
import * as React from 'react';

type Props = {
    children?: React.Node | string,
};

const Header = ({ children }: Props) => (<h2>
    {children}
</h2>);

Header.defaultProps = {
    children: '',
};

export default Header;
