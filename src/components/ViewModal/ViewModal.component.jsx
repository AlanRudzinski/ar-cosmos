import React from 'react';
import { StyledBox, StyledCross, StyledFlexRow, StyledHeader, StyledTitle, StyledContentWrapper} from './ViewModal.styles';
import ModalButton from '../ModalButton/ModalButton.component';


const ViewModal = ({ title, data, loading, error, triggerClose }) => (
        <StyledBox>
        <StyledFlexRow>
            <StyledTitle>{title}</StyledTitle>
            <StyledCross onClick={() => triggerClose()} />
        </StyledFlexRow>
        <StyledContentWrapper>
            <StyledHeader>
                <ModalButton text={'Type'} isSorting={true}/>
                <ModalButton text={'Status'}/>
            </StyledHeader>
            {
                data?.name
            }
        </StyledContentWrapper>
        </StyledBox>
    );

export default ViewModal;