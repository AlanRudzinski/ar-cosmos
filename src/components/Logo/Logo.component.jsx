import React from 'react';

import { StyledLogoContainer } from './Logo.styles';

import { ReactComponent as Usertive} from '../../assets/usertive.svg'


const Logo = () => (
    <StyledLogoContainer>
        <Usertive />
    </StyledLogoContainer>
);      

export default Logo;