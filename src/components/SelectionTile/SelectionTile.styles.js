import styled from 'styled-components';

//error jak z theme

export const StyledTileButton = styled.button`
    border-radius: 16px;
    width: 160px;
    height 208px;
    position: relative;
    cursor: pointer;
`

export const StyledTileTitle = styled.span`
    margin: 0;
    width: 100%;
    font-weight: 600;
    font-style: normal;
    text-align: center;
    position: absolute;
    bottom: 24px;
    left: 0;
    transition: all .2s ease-out;
    ${props => props.isHovered ? 'transform: translateY(-70px)' : 'transform: translateX(0px)'}
    `

export const StyledTileImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(360deg, #2B224A 0%, rgba(43, 34, 74, 0) 100%), url(${props => props.imgUrl});
    transition: all .5s ease-in-out;
    ${props => props.isHovered ? `filter: blur(${props.theme.other.blur}px)` : ''}

`

export const StyledOverlay = styled.div`
    width: calc(100% + ${props => props.theme.other.blur*2}px);
    height: calc(100% + ${props => props.theme.other.blur*2}px);
    position: absolute;
    border-radius: 16px;
    background: linear-gradient(0deg, rgba(43, 34, 74, 0.92) 7.69%, rgba(70, 58, 113, 0.92) 100%);
    top: -${props => props.theme.other.blur}px;
    left: -${props => props.theme.other.blur}px;
    transition: all .3s ease-in-out;
    opacity: ${props => props.isHovered ? '1' : '0'};
`

