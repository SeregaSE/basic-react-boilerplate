import PropTypes from 'prop-types';
import styled from 'styled-components';
import loader from '../../assets/images/loader.svg';

const Loader = styled.img.attrs({
    alt: 'loading...',
    src: loader,
})`
    height: 75px;
`;

Loader.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string,
};

export default Loader;
