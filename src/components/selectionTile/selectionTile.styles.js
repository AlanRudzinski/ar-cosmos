import styled from 'styled-components';

export const StyledTileContainer = styled.div`
    border: 1px #342957 solid
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
`

export const StyledTileImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(360deg, #2B224A 0%, rgba(43, 34, 74, 0) 100%), url(${props => props.imgUrl}) ;
    &:hover {
        background: linear-gradient(rgba(43, 34, 74, 0.92) 7.69%, rgba(70, 58, 113, 0.92) 100%), url(${props => props.imgUrl}) ;
        background-position: center;
        background-size: cover;
    }
`

