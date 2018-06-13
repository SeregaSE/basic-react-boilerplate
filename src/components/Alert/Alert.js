import PropTypes from 'prop-types';
import styled from 'styled-components';

const Alert = styled.div`
    width: 100%;
    margin: 15px 0;
    padding: 15px;
    box-sizing: border-box;
    background-color: ${props => props.theme.dark};
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .3);
    text-align: center;
    font-size: .9rem;
    color: ${props => props.theme.danger};
`;

Alert.propTypes = {
    children: PropTypes.node,
};

Alert.defaultProps = {
    children: 'Error!',
};

export default Alert;
