import React from 'react';

import { StyledButton } from './CustomButton.styles';

import { useRocketContext } from '../../context/rocketContext';

const CustomButton = ({ className }) => {
    const { toggleAnimation } = useRocketContext()
    return (
    <StyledButton className={className} onClick={() => toggleAnimation()} >
        Launch Rocket!
    </StyledButton>
)};      

export default CustomButton;