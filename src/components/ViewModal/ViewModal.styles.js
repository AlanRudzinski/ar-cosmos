import styled from 'styled-components';

import { ReactComponent as Cross } from '../../assets/cross.svg';

export const StyledContentWrapper = styled.div`
    width: 90%;
    margin: 5px auto 0;
    border: red solid 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledBox = styled.div`
    height: 360px;
    width: 540px;
    background-color: ${props => props.theme.colors.modalBg};
    position: fixed;
    z-index: 1;
    top: calc(50% - 195px);
    left: calc(50% - 250px);
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
    height: 40px;
    width: 100%;
`;
