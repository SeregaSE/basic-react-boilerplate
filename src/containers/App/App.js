// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSentences as getSentencesAction, clearSentences as clearSentencesAction } from '../../actions/sentences';
import Sentence from '../../components/Sentence/Sentence';
import loader from '../../assets/images/loader.svg';
import style from './style.scss';

type Props = {
    sentences?: Array<string>,
    fetching?: boolean,
    getSentences: () => void,
    clearSentences: () => {},
};

class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.props.getSentences();
    }

    render() {
        const { sentences, fetching, getSentences, clearSentences } = this.props;
        return (<div className={style.app}>
            <h2>Random sentences:</h2>
            {sentences.length > 0 ? sentences.map(sentence => <Sentence key={`sentence-${Math.random()}`} data={sentence} />)
                : !fetching && <div className={style.error}> No available sentences! </div> }
            {fetching ?
                <div className={style.loader}>
                    <img src={loader} alt="loading..." />
                </div> :
                <div className={style.buttonGroup}>
                    <button className={style.button} onClick={getSentences}> Show more </button>
                    <button className={style.button} onClick={clearSentences}> Clear all </button>
                </div>}
        </div>);
    }
}

App.defaultProps = {
    sentences: [],
    fetching: false,
};

const mapStateToProps = state => ({
    sentences: state.sentences.data,
    fetching: state.sentences.fetching,
});

const mapDispatchToProps = dispatch => ({
    getSentences: () => dispatch(getSentencesAction()),
    clearSentences: () => dispatch(clearSentencesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
