import React from 'react';

import loader from '../../assets/loader.gif' 
import { StyledImage, StyledLoaderWrapper } from './Loader.styles';

const Loader = () => (
    <StyledLoaderWrapper>
        <StyledImage src={loader} />
        <span>...Loading</span>
    </StyledLoaderWrapper>
)

export default Loader;