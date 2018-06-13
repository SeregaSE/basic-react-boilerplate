import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    padding: 12px 30px;
    border: 1px solid ${props => props.theme.dark};
    box-sizing: border-box;
    background-color: ${props => props.theme.base};
    font-size: 12px;
    cursor: pointer;
    outline: none;
    transition: .3s all;
    
    &:hover {
      background-color: ${props => props.theme.dark};
      color: ${props => props.theme.base};
    }
`;

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
