import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div.attrs({
    className: props => [props.className, props.align, props.justify].join(' '),
})`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    
    /* Horizontal alignment */
    &.start {
        justify-content: flex-start;
    }
    
    &.space-around {
        justify-content: space-around;
    }
    
    &.space-between {
        justify-content: space-between;
    }
    
    &.center {
        justify-content: center;
    }
    
    &.end {
        justify-content: flex-end;
    }
    
    /* Vertical alignment */
    &.top {
        align-items: flex-start;
    }
    
    &.middle {
        align-items: center;
    }
    
    &.bottom {
        align-items: flex-end;
    }
    
    &.stretch {
        align-items: stretch;
    }
`;

Container.propTypes = {
    align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
    className: PropTypes.string,
    children: PropTypes.node,
    justify: PropTypes.oneOf(['start', 'space-around', 'space-between', 'center', 'end']),
};

Container.defaultProps = {
    align: 'top',
    className: '',
    children: '',
    justify: 'start',
};

export default Container;
