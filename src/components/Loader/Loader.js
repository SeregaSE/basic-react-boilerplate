import styled from 'styled-components';
import src from '../../assets/images/loader.svg';

const Loader = styled.img.attrs({
    alt: 'Loading...',
    src,
})`
    height: 75px;
`;

export default Loader;
