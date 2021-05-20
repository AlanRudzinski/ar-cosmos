import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.colors.sortButton};
    text-align: left;
    padding: 13px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.hoverSortButton}
    }
`
