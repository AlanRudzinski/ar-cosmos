import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 184px;
    height: 48px;
    border-radius: 8px;
    border: none;
    color: ${props => props.theme.colors.mainFont};
    font-size: 16px;
    padding: 12px 32px;
    background-color: ${props => props.theme.colors.lightViolet};
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.greenActive};
    }
`;

