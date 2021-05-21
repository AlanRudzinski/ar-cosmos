import React, { createContext, useContext, useState } from 'react';

const RocketContext = createContext(null);

const { Provider } = RocketContext;

const RocketProvider = ({ children }) => {
    const [animating, setAnimating] = useState(false);

    const  toggleAnimation = () => setAnimating(!animating)
    return(
        <Provider value={{ toggleAnimation, animating }}>
            {children}
        </Provider>
    )
} 

export const useRocketContext = () => useContext(RocketContext)

export default RocketProvider;

