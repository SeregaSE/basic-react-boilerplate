import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import theme from '../../theme';
import Alert from '../Alert';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Container from '../Container';
import Loader from '../Loader';
import Sentence from '../Sentence';
import Title from '../Title';

// eslint-disable-next-line
injectGlobal`
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 200;
    src: url('../../assets/fonts/Roboto-Light.ttf') format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url('../../assets/fonts/Roboto-Thin.ttf') format('truetype');
}

  body {
    padding: 0 15px 15px;
    font-family: Roboto, sans-serif;
    font-weight: 200;
    font-size: 16px;
    color: ${theme.main};
  }
`;

class App extends Component {
    static defaultProps = {
        sentences: [],
        fetching: false,
    };

    componentDidMount() {
        this.props.getSentences();
    }

    render() {
        const {
            sentences,
            fetching,
            getSentences,
            clearSentences,
        } = this.props;
        return (
            <Fragment>
                <Title>Random sentences:</Title>

                {sentences.map(sentence => <Sentence key={`sentence-${Math.random()}`} >{sentence}</Sentence>)}

                {sentences.length === 0 && !fetching && <Container justify="center">
                    <Alert>No available sentences!</Alert>
                </Container>}

                {fetching ? <Container justify="center"><Loader /></Container> : <ButtonGroup>
                    <Button onClick={getSentences}>{sentences.length === 0 ? 'Load' : 'More'}</Button>
                    {sentences.length > 0 ? <Button onClick={clearSentences}>Clear</Button> : null}
                </ButtonGroup>}

            </Fragment>);
    }
}

App.propTypes = {
    sentences: PropTypes.arrayOf(PropTypes.string),
    fetching: PropTypes.bool,
    getSentences: PropTypes.func.isRequired,
    clearSentences: PropTypes.func.isRequired,
};

export default App;
