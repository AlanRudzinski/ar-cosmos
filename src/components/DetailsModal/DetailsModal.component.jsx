import React, { useState, useEffect } from 'react';

import ViewModal from '../ViewModal/ViewModal.component';

import useApiCall from '../../hooks/useApiCall';

const DetailsModal = ({ open, category, triggerClose }) => {
    const { apiCall, loading, error } = useApiCall(); 
    const [data, setData] = useState(null);

    const getData = async () => {
        const apiData  = await apiCall(
            `https://api.spacexdata.com/v4/${category}`
        );
        setData(apiData);
        console.log(data, category)
    }
    useEffect(() => {
        if(category) getData();
    }, [category])
    if(!open) return null
    return (
        <ViewModal title={category} data={data} error={error} loading={loading} triggerClose={triggerClose}/>
    )};      

export default DetailsModal;