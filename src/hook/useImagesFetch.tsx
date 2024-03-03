import { useEffect, useRef, useState }from 'react';
import { useQuery } from 'react-query';
import { getPopularImages, getSerachImages } from '../api/api';
import Image from '../types/image';

async function getImagesFetch (search: string, page: number, signal: AbortSignal) {
    if(search === '') {
        const res = await getPopularImages(page, signal)
        return res
    } else {
        const res = await getSerachImages(search, page, signal)
        return res.results
    }

}

const useImagesFetch = ( query: string, page: number ) => {
    const [ allData, setAllData ] = useState<Image[]>([])
    const controllerRef = useRef<AbortController>()
    const [ hasNextPage, setHasNextPage ] = useState<boolean>(true)

    useEffect(() => {
        setAllData([])
    }, [query])

    const { data, isLoading } = useQuery(
        [query, page],
        async () => {
            controllerRef.current?.abort()
            controllerRef.current = new AbortController()
            const { signal } = controllerRef.current

            try {
                return await getImagesFetch(query, page, signal)
            } catch (error) {
                console.log(error)
            }
        }, 
        {
            enabled: true,
            refetchOnWindowFocus: false,
        }
    )

    useEffect(() => {
        if(data) {
            setAllData((currImages) => {return [...currImages, ...data]})
            setHasNextPage(data.length > 0)
        }
    }, [data])
    
    return { isLoading, hasNextPage, allData, data}
}

export default useImagesFetch