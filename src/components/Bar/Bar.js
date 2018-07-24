import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Title from '../Title';

const StyledBar = styled.header`
    height: 56px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.defaultPrimary};
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, .35);
    color: ${props => props.theme.textPrimary};
`;

const Bar = () => (<StyledBar>
    <Icon type="arrow_back" />
    <Title>crypto quotes</Title>
    <Icon type="search" />
</StyledBar>);

export default Bar;
