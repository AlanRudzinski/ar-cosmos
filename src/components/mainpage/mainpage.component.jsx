import React from 'react';

import { StyledWrapper, StyledContainer} from './mainpage.styles';

import Logo from '../logo/logo.component';
import SelectionTileMenu from '../selectionTileMenu/selectionTileMenu.component';
import RocketLauncher from '../rocketLauncher/rocketLauncher.component'
import DetailsModal from '../detailsModal/detailsModal.component';
import BackgroundElements from '../backgroundElements/backgroundElements.component';

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