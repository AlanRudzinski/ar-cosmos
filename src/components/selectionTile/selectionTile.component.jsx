import React from 'react';

import { StyledTileContainer, StyledTileImage, StyledTileTitle} from './selectionTile.styles';

const SelectionTile = ({ title, imgUrl }) => {

    return (
    <StyledTileContainer> 
        <StyledTileImage imgUrl={imgUrl}/>
        <StyledTileTitle>{title}</StyledTileTitle>
    </StyledTileContainer>
)
}
export default SelectionTile;