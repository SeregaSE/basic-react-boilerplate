import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSentences as getSentencesAction, clearSentences as clearSentencesAction } from '../../actions/sentences';
import Sentence from '../../components/Sentence/Sentence';
import preloader from '../../assets/images/preloader.svg';
import './style.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.props.getSentences();
    }

    render() {
        const { sentences, fetching, getSentences, clearSentences } = this.props;
        return (<div className="app">
            <h2>Random sentences:</h2>
            {sentences.length > 0 ? sentences.map((sentence, i) => <Sentence key={`sentence-${i}`} data={sentence}/>)
                : !fetching && <div className="error"> No available sentences! </div> }
            {fetching ?
                <div className="preloader">
                    <img src={preloader} alt="preloader"/>
                </div> :
                <div className="button-group">
                    <button className="button" onClick={getSentences}> Show more </button>
                    <button className="button" onClick={clearSentences}> Clear all </button>
                </div>}
        </div>);
    }
}

App.propTypes = {
    sentences: PropTypes.arrayOf(PropTypes.string),
    fetching: PropTypes.bool,
    error: PropTypes.shape(),
    getSentences: PropTypes.func.isRequired,
    clearSentences: PropTypes.func.isRequired
};

App.defaultProps = {
    sentences: [],
    fetching: false,
    error: {}
};

const mapStateToProps = state => ({
    sentences: state.sentences.data,
    fetching: state.sentences.fetching,
    error: state.sentences.error,
});

const mapDispatchToProps = dispatch => ({
    getSentences: () => dispatch(getSentencesAction()),
    clearSentences: () => dispatch(clearSentencesAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
