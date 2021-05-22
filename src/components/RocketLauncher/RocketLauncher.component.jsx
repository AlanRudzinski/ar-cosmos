import React, { useEffect, useState } from 'react';

import { StyledCustomButton, StyledLandingGear, StyledRocket, StyledPlanetWrapper, 
    StyledSmokeLeft, StyledSmokeRight, AnimationRocketWrapper } from './RocketLauncher.styles'
import { ReactComponent as Planet } from '../../assets/planet.svg';

import { generateRocketTimeline, generateSmokeAnimation } from '../../animations/rocketAnimations';
import { useRocketContext } from '../../context/rocketContext';



const RocketLauncher = () => {
    const { animate, toggleAnimation } = useRocketContext();
    const [animating, setAnimating] = useState(false);
    const rocketTimeline = generateRocketTimeline('.rocket');
    const smokeLeftTimeline = generateSmokeAnimation('.left-smoke', false, 3);
    const smokeRightTimeline = generateSmokeAnimation('.right-smoke', true, 3);
    const smokeLeftTimelineSingle = generateSmokeAnimation('.left-smoke', false, 1);
    const smokeRightTimelineSingle = generateSmokeAnimation('.right-smoke', true, 1);
    useEffect(() => {
        if(animate && !animating){
            setAnimating(true)
            smokeLeftTimeline.play()
            smokeRightTimeline.play()
            setTimeout(() => rocketTimeline.play(), 2000);
            setTimeout(() => {
                smokeLeftTimelineSingle.play()
                smokeRightTimelineSingle.play()
                setAnimating(false)
                toggleAnimation()
            }, 9500)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }}, [animate])


    return (
    <div>
        <StyledPlanetWrapper>
            <Planet/>
            <StyledLandingGear />
            <StyledSmokeLeft className="left-smoke" />
            <StyledSmokeRight className="right-smoke" />
            <AnimationRocketWrapper className="rocket" >
                <StyledRocket />
            </AnimationRocketWrapper>
        </StyledPlanetWrapper>
        <StyledCustomButton />
    </div>

    )}


export default RocketLauncher;