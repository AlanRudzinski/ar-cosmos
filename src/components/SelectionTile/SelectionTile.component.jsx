import React, { useState } from 'react';

import { StyledTileButton, StyledTileImage, StyledTileTitle, StyledOverlay} from './SelectionTile.styles';
import { useModalContext } from '../../context/modalContext';



const SelectionTile = ({ title, imgUrl }) => {
    const { openModal, setCategory } = useModalContext()
    const [isHovered, setIsHovered] = useState(null)

    function runModal(category) {
        openModal()
        setCategory(category.toLowerCase())
    }

    return (
    <StyledTileButton onClick={() => runModal(title)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}> 
        <StyledTileImage isHovered={isHovered} imgUrl={imgUrl}/>
        <StyledOverlay isHovered={isHovered} />
        <StyledTileTitle isHovered={isHovered} >{isHovered ? "Details" : title}</StyledTileTitle>
    </StyledTileButton>
)
}
export default SelectionTile;