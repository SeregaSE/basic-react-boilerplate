import { connect } from 'react-redux';
import App from '../../components/App';
import { fetchSentences as getSentencesAction, clearSentences as clearSentencesAction } from '../../actions/sentences';

const mapStateToProps = state => ({
    sentences: state.sentences.data,
    fetching: state.sentences.fetching,
});

const mapDispatchToProps = dispatch => ({
    getSentences: () => dispatch(getSentencesAction()),
    clearSentences: () => dispatch(clearSentencesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
