import * as React from 'react';

const Header = ({ children }) => (<h2>
    {children}
</h2>);

Header.defaultProps = {
    children: '',
};

export default Header;
