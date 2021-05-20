import React from 'react';

import loader from '../../assets/loader.gif' 
import { StyledImage } from './Loader.styles';

const Loader = () => (
    <React.Fragment>
        <StyledImage src={loader} />
        <span>...Loading</span>
    </React.Fragment>
)

export default Loader;