import React from 'react';
import { StyledBox, StyledTableOverlay, StyledTableWrapper, StyledCross,
     StyledFlexRow, StyledHeader, StyledTitle, StyledContentWrapper, StyledSimpleBar} from './ModalView.styles';
import SortingButton from '../SortingButton/SortingButton.component';
import Loader from '../Loader/Loader.component';
import ModalTable from '../ModalTable/ModalTable.component';
import { keyResolver } from '../../utils/dataParser'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';


const ModalView = ({ title, data, loading, error, triggerClose }) => {
    const { name, status } = keyResolver(title)
    return (
        <StyledBox>
        <StyledFlexRow>
            <StyledTitle>{capitalizeFirstLetter(title)}</StyledTitle>
            <StyledCross onClick={triggerClose} />
        </StyledFlexRow>
        <StyledContentWrapper>
            <StyledHeader>
                <SortingButton text={capitalizeFirstLetter(name)} />
                <SortingButton text={capitalizeFirstLetter(status)}/>
            </StyledHeader>
            <StyledTableWrapper>
                <StyledSimpleBar>
                {loading ? <Loader/> : <ModalTable data={data} title={title}/>}
                </StyledSimpleBar>
            </StyledTableWrapper>
            <StyledTableOverlay />
        </StyledContentWrapper>
        </StyledBox>
    )};
export default ModalView;