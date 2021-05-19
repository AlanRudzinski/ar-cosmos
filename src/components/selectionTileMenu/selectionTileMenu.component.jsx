import React from 'react';
import TILE_DATA from './selectionTileMenu.data';

import { StyledMenu } from './selectionTileMenu.styles';

import SelectionTile from '../selectionTile/selectionTile.component'

const SelectionTileMenu = () => (
    <StyledMenu>
        {
            TILE_DATA.map(tile => (
                <SelectionTile key={tile.id} title={tile.title} imgUrl={tile.img}/>
            ))
        }
    </StyledMenu>
)
export default SelectionTileMenu;