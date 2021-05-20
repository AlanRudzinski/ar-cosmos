import React from 'react';

import DesignCircle from '../DesignCircle/DesignCircle.component';
import DesignDot from '../DesignDot/DesignDot.component';
import { LAYOUT_DATA } from './layout.data';

const BackgroundElements = () => (
    <div>
        {
            LAYOUT_DATA.map(el => (
                el.type === "dot" 
                ? 
                <DesignDot key={el.id} left={el.left} top={el.top} color={el.color} right={el.right}/> 
                :
                <DesignCircle key={el.id} left={el.left} top={el.top} right={el.right} />
            ))
        }
    </div>
);      
export default BackgroundElements;