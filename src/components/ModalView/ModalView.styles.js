import styled from 'styled-components';

import { ReactComponent as Cross } from '../../assets/cross.svg';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const StyledContentWrapper = styled.div`
    width: 92%;
    margin: 5px auto 0;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 270px;
    position: relative;

`;

export const StyledBox = styled.div`
    height: 360px;
    width: 540px;
    background-color: ${props => props.theme.colors.modalBg};
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-46%, -54%);
    border-radius: 16px;
`;

export const StyledTitle = styled.h2`
    padding: 3px 0 0 0;
    font-size: 17px;
    font-weight: 700;
`;

export const StyledFlexRow = styled.div`
    padding: 9px 25px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledCross = styled(Cross)`
    padding: 0 5px 0 0;
    cursor: pointer;
`;

export const StyledHeader = styled.header`
    margin: 0;
    height: 40px;
    width: 100%;
    display: flex;
`;

export const StyledTableWrapper = styled.div`
    width: 100%;
`;

export const StyledTableOverlay = styled.div`
    width: 100%;
    height: 52px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(180deg, rgba(43, 34, 74, 0) 0%, ${props => props.theme.colors.modalBg} 100%);

`

export const StyledSimpleBar = styled(SimpleBar)`
    max-height: 230px;
    & .simplebar-scrollbar:before {
        background-color: ${props => props.theme.colors.scrollBar};
        left: 0;
        width: 4px;
    }

    & .simplebar-track {
        margin: 15px 5px 0 0 ;
        width: 4px;
        background-color: ${props => props.theme.colors.scrollBarBg};
    }
`