import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true)

            try {
                const res = await fetch(url)
                console.log(res)
                if (!res.ok) {
                    throw new Error(res.statusText)

                }
                const response = await res.json()
                setIsPending(false)
                setData(response)
                setError(null)
            } catch (err) {
                setIsPending(false)
                setError('Unable to fetch data')
            }
        }
        fetchData()
    }, [url])
    return { data, isPending, error }
}

export default useFetch
