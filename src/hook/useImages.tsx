import { useEffect, useRef, useState }from 'react';
import getImages from '../api/getImages';
import Image from '../types/image';
import { useQuery } from 'react-query';

const useImages = ( query: string, page: number ) => {
    const [ allData, setAllData ] = useState<any[]>([])
    const controllerRef = useRef<AbortController>()
    const [ hasNextPage, setHasNextPage ] = useState<boolean>(true)

    useEffect(() => {
        setAllData([])
    }, [query])

    const { data, isLoading, error } = useQuery(
        [query, page],
        async () => {
            controllerRef.current?.abort()
            controllerRef.current = new AbortController()
            const { signal } = controllerRef.current

            const response = await getImages(query, page, signal)
            return response.docs
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
    
    return { isLoading, hasNextPage, allData}
}

export default useImages