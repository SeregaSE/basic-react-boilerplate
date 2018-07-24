import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from '../CurrencyListItem';

const StyledCurrencyList = styled.div`
    display: flex;
    flex-flow: nowrap column;
`;

const CurrencyList = ({ currencies }) => (<StyledCurrencyList>
    {currencies.map(currency => (<Item
        name={currency.name}
        symbol={currency.symbol}
    />))}
</StyledCurrencyList>);

CurrencyList.propTypes = {
    currencies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        symbol: PropTypes.string,
    })),
};

CurrencyList.defaultProps = {
    currencies: [],
};

export default CurrencyList;
