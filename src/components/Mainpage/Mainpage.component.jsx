import React from 'react';

import { StyledWrapper, StyledContainer} from './Mainpage.styles';

import Logo from '../Logo/Logo.component';
import SelectionTileMenu from '../SelectionTileMenu/SelectionTileMenu.component';
import RocketLauncher from '../RocketLauncher/RocketLauncher.component'
import ModalLogic from '../ModalLogic/ModalLogic.component';
import BackgroundElements from '../BackgroundElements/BackgroundElements.component';


const Mainpage = () => (
    <React.Fragment>
        <BackgroundElements />
        <StyledContainer>
            <Logo />
            <StyledWrapper>
                <SelectionTileMenu />
                <RocketLauncher />
                <ModalLogic/>
            </StyledWrapper>
        </StyledContainer>
    </React.Fragment>

);      

export default Mainpage;