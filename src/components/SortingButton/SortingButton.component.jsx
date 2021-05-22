import React, { useState } from 'react';

import { StyledButton } from './SortingButton.styles';
import { ReactComponent as BothArrows } from '../../assets/bothArrows.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrow_up.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow_down.svg';




const SortingButton = ({ text, handleSorting, type, sorting}) => {
    const [isHovered, setIsHovered] = useState(null);
    const { collection: sortingType, direction: sortingDirection } = sorting;

    return (
    <StyledButton
    isHovered={isHovered}
    isSorted={sortingType === type}
    onClick={() => handleSorting(type)}
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {text}
        {isHovered && !sortingDirection? <BothArrows /> : ''}
        {sortingType === type && sortingDirection === 1 ? <ArrowDown /> : ''}
        {sortingType === type && sortingDirection === -1 ? <ArrowUp /> : ''}
    </StyledButton>
)};      


export default SortingButton;