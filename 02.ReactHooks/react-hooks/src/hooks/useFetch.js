import { useState, useEffect } from "react"

const useFetch = (url, defaultValue) => {

    const [data, setData] = useState(defaultValue);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setLoading(false);
                setData(Object.values(result))
            })
    }, [url])

    return [data, setData,isLoading];
}

export default useFetch;