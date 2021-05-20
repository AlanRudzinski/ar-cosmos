import React from 'react';
import TILE_DATA from './SelectionTileMenu.data';

import { StyledMenu } from './SelectionTileMenu.styles';

import SelectionTile from '../SelectionTile/SelectionTile.component';


const SelectionTileMenu = () => (
    <StyledMenu>
        {
            TILE_DATA.map(tile => (
                <SelectionTile key={tile.id} title={tile.title} imgUrl={tile.img} />
            ))
        }
    </StyledMenu>
)
export default SelectionTileMenu;