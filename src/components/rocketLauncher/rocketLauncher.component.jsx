import React from 'react';

import { StyledCustomButton, StyledLandingGear, StyledRocket, StyledPlanetWrapper, 
    StyledSmokeLeft, StyledSmokeRight } from './rocketLauncher.styles'
import { ReactComponent as Planet } from '../../assets/planet.svg';



const RocketLauncher = () => (
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

    )

export default RocketLauncher;