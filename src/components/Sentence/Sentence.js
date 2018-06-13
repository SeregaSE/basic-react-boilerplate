import PropTypes from 'prop-types';
import styled from 'styled-components';

const Sentence = styled.div`
    margin: 15px 0;
    padding: 15px;
    box-sizing: border-box;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .3);
    background-color: ${props => props.theme.dark};
    color: ${props => props.theme.base};
    font-size: .9rem;
`;

Sentence.defaultProps = {
    children: '',
};

Sentence.propTypes = {
    children: PropTypes.node,
};

export default Sentence;
