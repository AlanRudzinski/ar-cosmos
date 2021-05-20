import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 50%;
    height: 100%;
    background-color: ${props => props.isSorting ? props.theme.colors.sortButton : props.theme.colors.selectionButton};
    text-align: left;
    padding: 13px;
    cursor: pointer;

`
