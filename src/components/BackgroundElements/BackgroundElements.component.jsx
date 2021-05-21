import React from 'react';

import DesignCircle from '../DesignCircle/DesignCircle.component';
import DesignDot from '../DesignDot/DesignDot.component';
import { LAYOUT_DATA } from './layout.data';

const BackgroundElements = () => (
    <React.Fragment>
        {
            LAYOUT_DATA.map(el => {
                const { id, left, right, top, color } = el;
                return (
                el.type === "dot" 
                ? 
                <DesignDot key={id} left={left} top={top} color={color} right={right}/> 
                :
                <DesignCircle key={id} left={left} top={top} right={right} />
                )})
        }
    </React.Fragment>
);      
export default BackgroundElements;