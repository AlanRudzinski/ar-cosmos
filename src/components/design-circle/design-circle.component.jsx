import React from 'react';

import styled from 'styled-components';

const StyledDesignCircle = styled.div`
    width: 346.5px;
    height: 346.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #2B2347 0%, #221B3A 100%);
    position: absolute;
    border-radius: 50%;
    top: ${props => props.top}px;
    ${props => props.left ? `left: ${props.left}px`:`right: ${props.right}px`};
    left: ${props => props.left}px;

    `;
const InnerCircle = styled.div`
    width: 246.5px;
    height: 246.5px;
    background: #221B3A;
    border-radius: 50%;
`;


const DesignCircle = ({left, top, right}) => (
    <StyledDesignCircle left={left} top={top} right={right}>
        <InnerCircle/>
    </StyledDesignCircle>
);      
export default DesignCircle;