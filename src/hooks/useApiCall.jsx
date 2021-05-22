import { useState, useEffect } from "react";
import axios from 'axios';

// sleep for loaader test, REMOVE IT!!!
const sleep = (time = 2000) =>
  new Promise((resolve) => setTimeout(resolve, time));


let source;

const cancelRequest = (msg) => {
  if (source) source.cancel(msg);
};


const useApiCall = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => cancelRequest, []);

    const apiCall = async ( url, errorMsg = "Something went wrong" ) => {
        source = axios.CancelToken.source();
        try {
            setError(null);
            setLoading(true);
            // await sleep();
            return await axios(url, {cancelToken: source.token})
        } catch (err) {
            setError(errorMsg);
            return err
        } finally {
            setLoading(false);
        }
    };
    return { apiCall, cancelRequest, loading, error}
}

export default useApiCall;