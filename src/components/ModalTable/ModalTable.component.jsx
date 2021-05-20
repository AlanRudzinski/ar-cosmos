import React from 'react';
import { dataNameKey } from '../../utils/dataNameKey'

import { StyledCell, StyledRow, StyledTable } from './ModalTable.styles';



const ModalTable = ({ data, title }) => {
    if(!data) return ''
    const objectData = data.map(element => { 
        return ({
            name: element[dataNameKey[title].name], status: element[dataNameKey[title].status]
        })
    })
    return (
        <React.Fragment>
            <StyledTable>
                <tbody>
                    {
                        objectData.map((element, idx) => (
                            <StyledRow key={idx}>
                                <StyledCell>{element.name}</StyledCell>
                                <StyledCell>{String(element.status)}</StyledCell>
                            </StyledRow>
                        ))
                    }
                </tbody>
            </StyledTable>

        </React.Fragment>
    );}

export default ModalTable;