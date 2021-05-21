import React from 'react';
import dataParser from '../../utils/dataParser'
import { StyledCell, StyledRow, StyledTable, StyledTableBody } from './ModalTable.styles';

const ModalTable = ({ data, title }) => {
    if(!data) return ''
    const objectData = dataParser(data, title)
    return (
        <React.Fragment>
            <StyledTable>
                    <StyledTableBody>
                        {
                            objectData.map(element => {
                                const { id, name, status } = element;
                                return (
                                <StyledRow key={id}>
                                    <StyledCell>{name}</StyledCell>
                                    <StyledCell>{String(status)}</StyledCell>
                                </StyledRow>
                            )})
                        }
                    </StyledTableBody>
            </StyledTable>

        </React.Fragment>
    );}

export default ModalTable;