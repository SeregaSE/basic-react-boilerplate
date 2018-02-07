// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSentences as getSentencesAction, clearSentences as clearSentencesAction } from '../../actions/sentences';
import { Button, Row, Error, Header, Loader, Sentence } from '../../components';
import style from './style.css';

const ButtonGroup = Button.Group;

type Props = {
    sentences: Array<string>,
    fetching?: boolean,
    getSentences: () => void,
    clearSentences: () => void,
};

class App extends Component<Props> {
    static defaultProps = {
        sentences: [],
        fetching: false,
    };

    constructor(props) {
        super(props);
        this.props.getSentences();
    }

    render() {
        const { sentences, fetching, getSentences, clearSentences } = this.props;
        return (<div className={style.app}>
            <Header>Random sentences:</Header>

            {sentences.map(sentence => <Sentence key={`sentence-${Math.random()}`} data={sentence} />)}

            {sentences.length === 0 && !fetching && <Row justify="center">
                <Error> No available sentences! </Error>
            </Row>}

            {fetching ? <Row justify="center"><Loader /></Row> : <ButtonGroup>
                <Button onClick={getSentences}>{sentences.length === 0 ? 'Load' : 'More' }</Button>
                {sentences.length > 0 ? <Button onClick={clearSentences}>Clear</Button> : null}
            </ButtonGroup>}

        </div>);
    }
}

const mapStateToProps = state => ({
    sentences: state.sentences.data,
    fetching: state.sentences.fetching,
});

const mapDispatchToProps = dispatch => ({
    getSentences: () => dispatch(getSentencesAction()),
    clearSentences: () => dispatch(clearSentencesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
