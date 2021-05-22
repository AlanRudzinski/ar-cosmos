import React, { createContext, useContext, useState } from 'react';

const RocketContext = createContext(null);

const { Provider } = RocketContext;

const RocketProvider = ({ children }) => {
    const [animate, setAnimate] = useState(false);
    const [animating, setAnimating] = useState(false);

    const  toggleAnimation = () => setAnimate(!animate)
    return(
        <Provider value={{ toggleAnimation, animate, animating, setAnimating }}>
            {children}
        </Provider>
    )
} 

export const useRocketContext = () => useContext(RocketContext)

export default RocketProvider;

