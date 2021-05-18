import React from 'react';

import styled from 'styled-components';

import Logo from '../logo/logo.component';
import SelectionTileMenu from '../selection-tile-menu/selection-tile-menu.component';
import RocketLauncher from '../rocket-launcher/rocket-launcher.component'
import DesignDot from '../design-dot/design-dot.component';
import DesignCircle from '../design-circle/design-circle.component';
import DetailsModal from '../detailsModal/details-modal.component';


const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    height: 100%;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding: 60px 0 0 110px
`

const Mainpage = () => (
    <div>
    <DesignCircle left={-177} top={322} />
    <DesignCircle right={-190} top={108} />
    <DesignCircle left={480} top={-206} />

    <DesignDot left={81} top={144} color={'#E34A67'}/>
    <DesignDot left={660} top={652} color={'#7860D7'}/>
    <DesignDot left={1259} top={552} color={'#E34A67'}/>
    <DesignDot left={875} top={84} color={'#00C9B7'}/>
    <DesignDot left={297} top={500} color={'#00C9B7'}/>
    <Container>
        <Logo />
        <Wrapper>
            <SelectionTileMenu />
            <RocketLauncher />
            <DetailsModal/>
        </Wrapper>
    </Container>
    </div>

);      

export default Mainpage;