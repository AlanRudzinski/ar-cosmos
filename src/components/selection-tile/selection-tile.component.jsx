import React from 'react';

import styled from 'styled-components';

const TileContainer = styled.div`
    border-radius: 16px;
    width: 160px;
    height 208px;
    position: relative;
`

const TileTitle = styled.span`
    margin: 0;
    width: 100%;
    font-weight: 600;
    font-style: normal;
    text-align: center;
    position: absolute;
    bottom: 24px;
`

const TileImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(360deg, #2B224A 0%, rgba(43, 34, 74, 0) 100%), url(${props => props.imgUrl}) ;
    
`


const SelectionTile = ({ title, imgUrl }) => (
    <TileContainer> 
        <TileImage imgUrl={imgUrl}/>
        
        <TileTitle>{title}</TileTitle>
    </TileContainer>
)

export default SelectionTile;