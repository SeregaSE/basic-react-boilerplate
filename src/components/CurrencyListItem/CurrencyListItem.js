import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCurrencyListItem = styled.div`
    width: 100%;
    padding: 16px;
    border-bottom: 1px solid ${props => props.theme.divider};
`;

const StyledCurrencyListItemName = styled.div`
    color: ${props => props.theme.secondaryText};
    font-size: 14px;
`;

const StyledCurrencyListItemSymbol = styled.div`
    color: ${props => props.theme.primaryText};
    font-size: 16px;
    line-height: 1.8;
`;

const CurrencyListItem = ({ name, symbol }) => (<StyledCurrencyListItem>
    <StyledCurrencyListItemSymbol>{symbol}</StyledCurrencyListItemSymbol>
    <StyledCurrencyListItemName>{name}</StyledCurrencyListItemName>
</StyledCurrencyListItem>);

CurrencyListItem.propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.string,
};

CurrencyListItem.defaultProps = {
    name: '',
    symbol: '',
};

export default CurrencyListItem;
