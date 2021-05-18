import React from 'react';

import styled from 'styled-components';
import { ReactComponent as Rocket} from '../../assets/rocket.svg';
import { ReactComponent as Planet } from '../../assets/planet.svg';
import { ReactComponent as LandingGear } from '../../assets/landing_gear.svg';
import { ReactComponent as SmokeLeft } from '../../assets/smoke_left.svg';
import { ReactComponent as SmokeRight } from '../../assets/smoke_right.svg';
import CustomButton from '../custom-button/custom-button.component';


const PlanetWrapper = styled.div`
    margin-top: 5px;
    position: relative;
`

const StyledRocket = styled(Rocket)`
    position: absolute;
    top: -72px;
    left: 135px;
`
const StyledLandingGear = styled(LandingGear)`
    position: absolute;
    top: 50px;
    left: 152px;
`

const StyledSmokeLeft = styled(SmokeLeft)`
    position: absolute;
    top: 10px;
    left: 87px;
`

const StyledSmokeRight = styled(SmokeRight)`
    position: absolute;
    top: 23px;
    left: 220px;
`

const StyledCustomButton = styled(CustomButton)`
    margin: 19px 96px;
`

const RocketLauncher = () => (
    <div>
        <PlanetWrapper>
            <Planet/>
            <StyledLandingGear />
            <StyledSmokeLeft />
            <StyledSmokeRight />
            <StyledRocket />
        </PlanetWrapper>
        <StyledCustomButton />
    </div>

    )

export default RocketLauncher;