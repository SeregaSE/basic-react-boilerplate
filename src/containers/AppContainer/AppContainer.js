import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../../components/App';
import { currencies } from '../../actions';
import {
    selectCurrencies,
    selectCurrenciesFetching,
    selectCurrenciesFetchingErrors,
} from '../../selectors';

const mapStateToProps = state => ({
    currencies: selectCurrencies(state),
    fetching: selectCurrenciesFetching(state),
    errors: selectCurrenciesFetchingErrors(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchCurrencies: currencies.fetchCurrencies }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
