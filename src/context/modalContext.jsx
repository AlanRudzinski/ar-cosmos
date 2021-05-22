import React, { createContext, useContext, useState } from 'react';

import ModalLogic from '../components/ModalLogic/ModalLogic.component';


const ModalContext = createContext(null);

const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(null);
    const [category, setCategory] = useState(null);
    const [isSortingActive, setIsSortingActive] = useState(false)

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return(
        <Provider value={{ openModal, setCategory, isSortingActive, setIsSortingActive }}>
            {children}
            <ModalLogic triggerClose={closeModal} open={open} category={category}/>
        </Provider>
    )
} 

export const useModalContext = () => useContext(ModalContext)

export default ModalProvider;

