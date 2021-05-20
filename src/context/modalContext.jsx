import React, { createContext, useContext, useState } from 'react';

import DetailsModal from '../components/DetailsModal/DetailsModal.component';


const ModalContext = createContext(null);

const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(null);
    const [category, setCategory] = useState(null);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return(
        <Provider value={{ openModal, setCategory }}>
            {children}
            <DetailsModal triggerClose={closeModal} open={open} category={category}/>
        </Provider>
    )
} 

export const useModalContext = () => useContext(ModalContext)

export default ModalProvider;

