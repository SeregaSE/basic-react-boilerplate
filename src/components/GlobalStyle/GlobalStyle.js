import { createGlobalStyle } from 'styled-components';
import robotoLight from '../../assets/fonts/Roboto-Light.ttf';
import MaterialIcons from '../../assets/fonts/MaterialIcons-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        src: url('${robotoLight}') format('truetype');
    }
    
    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: url('${MaterialIcons}') format('truetype');
    }
    
    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;
        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;
        /* Support for IE. */
        font-feature-settings: 'liga';
    }

    html, body {
        width: 100%;
        height: 1px;
        min-height: 100%;
    }

    #root {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.onPrimary};
        font-family: ${props => props.theme.typography.fontFamily};
        font-weight: ${props => props.theme.typography.fontWeight};
        font-size: ${props => props.theme.typography.fontSize};
        background: ${props => props.theme.colors.primary};
    }
`;

export default GlobalStyle;
