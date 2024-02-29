import { useEffect, useState }from 'react';
import getImages from '../api/getImages';
import Image from '../types/image';

const useImages = ( query: string, page: number ) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ hasNextPage, setHasNextPage ] = useState<boolean>(true)
    const [ data, setData ] = useState<Image[]>([])

    useEffect(() => {
        setIsLoading(true)
        getImages()
            .then(res => {
                setData((currData) => {return [...currData, ...res]})
                setIsLoading(false)
                if(res.length > 0) setHasNextPage(true)
            })
            .catch(e =>{
                return
            })
    }, [page, query])

    return { isLoading, hasNextPage, data}
}

export default useImages