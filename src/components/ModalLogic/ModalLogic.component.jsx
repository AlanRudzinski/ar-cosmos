import React, { useState, useEffect } from 'react';

import ModalView from '../ModalView/ModalView.component';

import useApiCall from '../../hooks/useApiCall';

const ModalLogic = ({ open, category, triggerClose }) => {
    const { apiCall, loading, error } = useApiCall(); 
    const [data, setData] = useState(null);

    const getData = async () => {
        const { data : apiData }  = await apiCall(
            `https://api.spacexdata.com/v4/${category}`
        );
        setData(apiData);
    }

    useEffect(() => {
        if(category) getData();
    }, [category])

    if(!open) return null;

    return (
        <ModalView title={category} data={data} error={error} loading={loading} triggerClose={triggerClose}/>
    )};      

export default ModalLogic;