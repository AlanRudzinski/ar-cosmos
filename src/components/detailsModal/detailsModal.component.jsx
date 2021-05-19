import React from 'react';

import { StyledBox, StyledCross, StyledFlexRow, StyledHeader, StyledTitle} from './detailsModal.styles';

const detailsModal = () => (
    <StyledBox>
        <StyledFlexRow>
            <StyledTitle>Starlink</StyledTitle>
            <StyledCross/>
        </StyledFlexRow>
        <StyledHeader>
            <button></button>
            <button></button>
        </StyledHeader>
    </StyledBox>
);      

export default detailsModal;