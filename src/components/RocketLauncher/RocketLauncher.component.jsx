import React from 'react';

import { StyledCustomButton, StyledLandingGear, StyledRocket, StyledPlanetWrapper, 
    StyledSmokeLeft, StyledSmokeRight } from './RocketLauncher.styles'
import { ReactComponent as Planet } from '../../assets/planet.svg';

import { useRocketContext } from '../../context/rocketContext'




const RocketLauncher = () => {
    const { animating } = useRocketContext();
    console.log(animating) 
    return (
    <div>
        <StyledPlanetWrapper>
            <Planet/>
            <StyledLandingGear />
            <StyledSmokeLeft />
            <StyledSmokeRight />
            <StyledRocket />
        </StyledPlanetWrapper>
        <StyledCustomButton />
    </div>

    )}

export default RocketLauncher;