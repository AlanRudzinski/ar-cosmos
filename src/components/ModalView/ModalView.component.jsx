import React, { useState } from 'react';
import { StyledBox, StyledTableOverlay, StyledTableWrapper, StyledCross,
     StyledFlexRow, StyledHeader, StyledTitle, StyledContentWrapper, StyledSimpleBar} from './ModalView.styles';
import SortingButton from '../SortingButton/SortingButton.component';
import Loader from '../Loader/Loader.component';
import ModalTable from '../ModalTable/ModalTable.component';
import { keyResolver } from '../../utils/dataParser'
import { cleanTitle } from '../../utils/cleanTitle';


const ModalView = ({ title, data, loading, error, triggerClose }) => {
    const { name, status } = keyResolver(title);
    const [sorting, setSorting] = useState({ collection: null, direction: null});

    const handleSorting = (type) => {
        setSorting({ 
            collection: sorting.direction === -1 ? null : type, 
            direction: sorting.direction === null ? 1 : sorting.direction === 1 ? -1 : null})
    };
    return (
        <StyledBox>
        <StyledFlexRow>
            <StyledTitle>{cleanTitle(title)}</StyledTitle>
            <StyledCross onClick={triggerClose} />
        </StyledFlexRow>
        <StyledContentWrapper>
            <StyledHeader>
                <SortingButton type={keyResolver().name} handleSorting={handleSorting} text={cleanTitle(name)} sorting={sorting} />
                <SortingButton type={keyResolver().status} handleSorting={handleSorting} text={cleanTitle(status)} sorting={sorting} />
            </StyledHeader>
            <StyledTableWrapper>
                <StyledSimpleBar>
                {loading ? <Loader/> : <ModalTable sorting={sorting} data={data} title={title}/>}
                </StyledSimpleBar>
            </StyledTableWrapper>
            <StyledTableOverlay />
        </StyledContentWrapper>
        </StyledBox>
    )};
export default ModalView;