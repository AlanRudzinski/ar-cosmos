import styled from 'styled-components';

import { ReactComponent as Cross } from '../../assets/cross.svg';


export const StyledBox = styled.div`
    height: 360px;
    width: 540px;
    background-color: #2B224A;
    position: fixed;
    z-index: 1;
    top: calc(50% - 195px);
    left: calc(50% - 250px);
    border-radius: 16px;
    display: none;
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
`;

export const StyledHeader = styled.header`
    border: red solid 1px;
    height: 40px;
    margin: 5px auto 0;
    width: 90%;
`;
