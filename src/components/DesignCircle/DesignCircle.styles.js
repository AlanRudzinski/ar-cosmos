import styled from 'styled-components';

export const StyledDesignCircle = styled.div`
    width: 346.5px;
    height: 346.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, ${props => props.theme.colors.lightBg} 0%, ${props => props.theme.colors.mainBg} 100%);
    position: absolute;
    border-radius: 50%;
    top: ${props => props.top}px;
    ${props => props.left ? `left: ${props.left}px`:`right: ${props.right}px`};
    `;
export const StyledInnerCircle = styled.div`
    width: 246.5px;
    height: 246.5px;
    background: ${props => props.theme.colors.mainBg};
    border-radius: 50%;
`;
