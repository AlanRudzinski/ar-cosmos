import React from 'react';

import TILE_DATA from './tile-data';

import styled from 'styled-components';


import SelectionTile from '../selection-tile/selection-tile.component'

const Menu = styled.div`
    display: inline-grid;
    max-width: 400px;
    grid-template-columns: auto auto;
    column-gap: 30px;
    row-gap: 13px;
    margin-right: 220px;

`

const SelectionTileMenu = () => (
    <Menu>
        {
            TILE_DATA.map(tile => (
                <SelectionTile key={tile.id} title={tile.title} imgUrl={tile.img}/>
            ))
        }
    </Menu>
)
export default SelectionTileMenu;