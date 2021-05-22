import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 50%;
    height: 100%;
    background-color: ${props => props.isHovered || props.isSorted ? props.theme.colors.hoverSortButton : props.theme.colors.sortButton};
    text-align: left;
    padding: 0 16px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
