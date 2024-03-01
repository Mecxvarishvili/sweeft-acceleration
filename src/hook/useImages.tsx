import { useEffect, useState }from 'react';
import getImages from '../api/getImages';
import Image from '../types/image';
import { useQuery } from 'react-query';

const useImages = ( query: string, page: number ) => {
    const [ hasNextPage, setHasNextPage ] = useState<boolean>(true)
    const [ allData, setAllData ] = useState<Image[]>([])

    useEffect(() => {
        setAllData([])
    }, [query])

    const { data, isLoading, error } = useQuery(
        [query, page], 
        async () => {
            const response = await getImages(query, page)
            setHasNextPage(response.docs.length > 0)
            return response.docs
        }, 
        {
            enabled: true,
            refetchOnWindowFocus: false,
            onSuccess: (newData) => {setAllData((currState) => [...currState, ...newData]); }
        }
    )

    console.log(error)

    return { isLoading, hasNextPage, allData}
}

export default useImages