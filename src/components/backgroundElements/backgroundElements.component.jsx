import React from 'react';

import DesignCircle from '../designCircle/designCircle.component';
import DesignDot from '../designDot/designDot.component';
import { LAYOUT_DATA } from './layout.data';

const BackgroundElements = () => (
    <div>
        {
            LAYOUT_DATA.map(el => (
                el.type === "dot" 
                ? 
                <DesignDot left={el.left} top={el.top} color={el.color} right={el.right}/> 
                :
                <DesignCircle left={el.left} top={el.top} right={el.right} />
            ))
        }
    </div>
);      
export default BackgroundElements;