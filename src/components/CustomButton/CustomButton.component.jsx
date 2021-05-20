import React from 'react';

import { StyledButton } from './CustomButton.styles';

const CustomButton = ({ className }) => (
    <StyledButton className={className}>
        Launch Rocket!
    </StyledButton>
);      

export default CustomButton;