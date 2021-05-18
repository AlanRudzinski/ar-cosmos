import React from 'react';

import styled from 'styled-components';

import Logo from '../logo/logo.component';
import SelectionTileMenu from '../selection-tile-menu/selection-tile-menu.component';


const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    height: 100%;
`

const Mainpage = () => (
    <Container>
        <Logo />
        <SelectionTileMenu />
    </Container>
);      

export default Mainpage;