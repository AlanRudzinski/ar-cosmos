import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Usertive} from '../../assets/usertive.svg'

const LogoContainer = styled.div`
    padding: 36px 15px;
`

const Logo = () => (
    <LogoContainer>
        <Usertive />
    </LogoContainer>
);      

export default Logo;