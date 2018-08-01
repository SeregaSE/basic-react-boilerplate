import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import theme from '../../theme';
import robotoLight from '../../assets/fonts/Roboto-Light.ttf';
import MaterialIcons from '../../assets/fonts/MaterialIcons-Regular.ttf';

// eslint-disable-next-line
injectGlobal`
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
    
    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Roboto, sans-serif;
        font-weight: 100;
        font-size: 24px;
        color: ${theme.onPrimary};
        background: ${theme.primary};
    }
      
    div, header {
        box-sizing: border-box;
    }
`;

const App = ({ title }) => title;

App.propTypes = {
    title: PropTypes.string,
};

App.defaultProps = {
    title: 'Basic React Boilerplate 1.0.0',
};

export default App;
