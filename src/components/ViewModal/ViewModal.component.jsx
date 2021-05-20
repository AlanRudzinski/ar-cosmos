import React from 'react';
import { StyledBox, StyledTableOverlay, StyledTableWrapper, StyledCross,
     StyledFlexRow, StyledHeader, StyledTitle, StyledContentWrapper} from './ViewModal.styles';
import SortingButton from '../SortingButton/SortingButton.component';
import Loader from '../Loader/Loader.component';
import ModalTable from '../ModalTable/ModalTable.component';
import { dataNameKey } from '../../utils/dataNameKey';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';



const ViewModal = ({ title, data, loading, error, triggerClose }) => (
        <StyledBox>
        <StyledFlexRow>
            <StyledTitle>{capitalizeFirstLetter(title)}</StyledTitle>
            <StyledCross onClick={() => triggerClose()} />
        </StyledFlexRow>
        <StyledContentWrapper>
            <StyledHeader>
                <SortingButton text={capitalizeFirstLetter(dataNameKey[title].name)} />
                <SortingButton text={capitalizeFirstLetter(dataNameKey[title].status)}/>
            </StyledHeader>
            <StyledTableWrapper>
                {loading ? <Loader/> : <ModalTable data={data} title={title}/>}
            </StyledTableWrapper>
            <StyledTableOverlay />
        </StyledContentWrapper>
        </StyledBox>
    );
export default ViewModal;