import React from 'react';

import { StyledButton } from './customButton.styles';

const CustomButton = ({ className }) => (
    <StyledButton className={className}>
        Launch Rocket!
    </StyledButton>
);      

export default CustomButton;