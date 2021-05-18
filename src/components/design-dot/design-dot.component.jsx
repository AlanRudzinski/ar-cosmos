import React from 'react';

import styled from 'styled-components';

const StyledDesignDot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.color};
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
`

const DesignDot = ({left, top, color}) => (
    <StyledDesignDot left={left} top={top} color={color}/>
);      
export default DesignDot;