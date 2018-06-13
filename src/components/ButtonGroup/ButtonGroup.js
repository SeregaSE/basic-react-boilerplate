import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

const ButtonGroup = styled.div`
    display: flex;
    
    & > button {
        margin-right: 25px;
    }
    
    & > button:last-of-type {
        margin-right: 0;
    }
`;

ButtonGroup.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Button),
        PropTypes.arrayOf(PropTypes.instanceOf(Button)),
    ]),
    onClick: PropTypes.func,
};

export default ButtonGroup;
