import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
    width: 184px;
    height: 48px;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 16px;
    padding: 12px 32px;
    background-color: #7860D7;
    cursor: pointer;
    &:hover {
        background-color: #05C9B7;
    }
`;

const CustomButton = ({ className }) => (
    <StyledButton className={className}>
        Launch Rocket!
    </StyledButton>
);      

export default CustomButton;