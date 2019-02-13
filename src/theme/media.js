import { css } from 'styled-components';

const sizes = {
    sm: 575,
    md: 767,
    lg: 991,
    xl: 1199,
    xxl: 1599,
};

const media = Object.keys(sizes).reduce((acc, size) => ({
    ...acc,
    [size]: (...args) => css`
        @media (max-width: ${sizes[size]}px) {
            ${css(...args)};
        }
    `,
}));

export default media;
