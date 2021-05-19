import styled from 'styled-components';

export const StyledDesignDot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.color};
    position: absolute;
    top: ${props => props.top}px;
    ${props => props.left ? `left: ${props.left}px`:`right: ${props.right}px`};
`
