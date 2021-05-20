import React from 'react';

import { StyledButton } from './ModalButton.styles';

const ModalButton = ({ text, isSorting=false }) => (
    <StyledButton isSorting={isSorting}>
        {text}
    </StyledButton>
);      

export default ModalButton;