import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import theme from '../../theme';
import Header from '../Bar';
import Loader from '../Loader';
import CurrencyList from '../CurrencyList';
import Title from '../Title';
import robotoLight from '../../assets/fonts/Roboto-Light.ttf';
import robotoThin from '../../assets/fonts/Roboto-Thin.ttf';
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
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 100;
        src: url('${robotoThin}') format('truetype');
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
        font-family: Roboto, sans-serif;
        font-weight: 300;
        font-size: 16px;
        color: ${theme.main};
        background: ${theme.base};
    }
      
    div, header {
        box-sizing: border-box;
    }
`;

class App extends Component {
    static defaultProps = {
        currencies: [],
        fetching: false,
    };

    componentDidMount() {
        this.props.actions.fetchCurrencies();
    }

    render() {
        const {
            currencies,
            errors,
            fetching,
        } = this.props;
        return (
            <Fragment>
                <Header>
                    <Title>Crypto quotes</Title>
                </Header>

                {fetching && <Loader/>}

                {!fetching && !errors.length && <CurrencyList currencies={currencies}/>}
            </Fragment>);
    }
}

App.propTypes = {
    currencies: PropTypes.arrayOf(PropTypes.shape({})),
    errors: PropTypes.arrayOf(PropTypes.shape({})),
    fetching: PropTypes.bool,
    actions: PropTypes.shape({
        fetchCurrencies: PropTypes.func.isRequired,
    }).isRequired,
};

App.defaultProps = {
    currencies: [],
    errors: [],
    fetching: true,
};

export default App;
