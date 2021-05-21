import React, { useState } from 'react';

import { StyledButton } from './SortingButton.styles';
import { ReactComponent as BothArrows } from '../../assets/bothArrows.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrow_up.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow_down.svg';


const SortingButton = ({ text }) => {
    const [isHovered, setIsHovered] = useState(null);
    const [sortingAsc, setSortingAsc] = useState(false);
    const [sortingDesc, setSortingDesc] = useState(false);

    function manageSorting() {
        if(!sortingDesc && !sortingAsc) setSortingAsc(true)
        if(sortingAsc) {
            setSortingAsc(false);
            setSortingDesc(true);
        } else {
            setSortingDesc(false)
        }
    }
    return (
    <StyledButton
    isHovered={isHovered}
    sortingAsc={sortingAsc}
    sortingDesc={sortingDesc}
    onClick={manageSorting}
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {text}
        {isHovered && (!sortingDesc && !sortingAsc) ? <BothArrows /> : ''}
        {sortingDesc ? <ArrowDown /> : ''}
        {sortingAsc ? <ArrowUp /> : ''}
    </StyledButton>
)};      

export default SortingButton;