import { useState, useEffect } from 'react';

export const useFetch = (url, method = 'GET') => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState(null) // for post request

    const postData = (postData) => {
        setOptions({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
    }

    useEffect(() => {
        const fetchData = async (fetchOptions) => {
            try {
                const response = await fetch(url, { ...fetchOptions });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const result = await response.json();
                setData(result);
                setIsPending(false);
                setError(null)
            } catch (err) {
                setError(err.message);
                setIsPending(false);
            }
        };

        if (method === 'GET') {
            fetchData();
        }
        if (method === 'POST' && options) {
            fetchData(options);
        }


    }, [url, options, method]);

    return { data, isPending, error, postData };
};

// export default useFetch;
