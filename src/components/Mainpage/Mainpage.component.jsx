import React from 'react';

import { StyledWrapper, StyledContainer} from './Mainpage.styles';

import Logo from '../Logo/Logo.component';
import SelectionTileMenu from '../SelectionTileMenu/SelectionTileMenu.component';
import RocketLauncher from '../RocketLauncher/RocketLauncher.component'
import DetailsModal from '../DetailsModal/DetailsModal.component';
import BackgroundElements from '../BackgroundElements/BackgroundElements.component';

const Mainpage = () => (
    <div>
    <BackgroundElements />
    <StyledContainer>
        <Logo />
        <StyledWrapper>
            <SelectionTileMenu />
            <RocketLauncher />
            <DetailsModal/>
        </StyledWrapper>
    </StyledContainer>
    </div>

);      

export default Mainpage;