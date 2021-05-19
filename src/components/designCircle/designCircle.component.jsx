import React from 'react';

import { StyledDesignCircle, StyledInnerCircle} from './designCircle.styles';

const DesignCircle = ({left, top, right}) => (
    <StyledDesignCircle left={left} top={top} right={right}>
        <StyledInnerCircle/>
    </StyledDesignCircle>
);      
export default DesignCircle;