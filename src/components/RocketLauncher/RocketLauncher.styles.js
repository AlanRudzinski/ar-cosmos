import { ReactComponent as LandingGear } from '../../assets/landing_gear.svg';
import { ReactComponent as SmokeLeft } from '../../assets/smoke_left.svg';
import { ReactComponent as SmokeRight } from '../../assets/smoke_right.svg';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';

import CustomButton from '../CustomButton/CustomButton.component';


import styled from 'styled-components';

export const StyledPlanetWrapper = styled.div`
margin-top: 5px;
position: relative;
`
export const AnimationRocketWrapper = styled.div`
position: absolute;
top: -72px;
left: 135px;
width: 100px;
`

export const StyledRocket = styled(Rocket)`
width:100%;
height:100%;
`
export const StyledLandingGear = styled(LandingGear)`
position: absolute;
top: 50px;
left: 152px;
`

export const StyledSmokeLeft = styled(SmokeLeft)`
position: absolute;
top: 10px;
left: 87px;
opacity: 0;
`

export const StyledSmokeRight = styled(SmokeRight)`
position: absolute;
top: 23px;
left: 220px;
opacity: 0;
`

export const StyledCustomButton = styled(CustomButton)`
margin: 19px 96px;
`